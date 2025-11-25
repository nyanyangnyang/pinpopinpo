import { getUniversityData } from '../data/universities';
import type { 
  UserScores, 
  DepartmentResult,
  Department,
  Cutoff,
  University,
} from '../types';
import { SCORE_RANGES, PROBABILITY_THRESHOLDS } from '../constants';

/**
 * 탐구 변환 점수 계산 (백분위 -> 변환표준점수)
 */
function getConvertedInquiryScore(percentile: number): number {
  // 임시로 간단한 변환 사용
  return percentile * 0.72; // 백분위를 점수로 근사 변환
}

/**
 * 대학 환산 점수 계산
 */
export function calculateUniversityScore(
  userScores: UserScores,
  department: Department
): number {
  const formula = department.formula;
  const weights = formula.weights;
  const scoreTypes = formula.score_types;
  
  let totalScore = 0;

  // 국어
  if (weights.korean) {
    const koreanScore = (userScores.korean / SCORE_RANGES.KOREAN_MAX) * weights.korean;
    totalScore += koreanScore;
  }

  // 수학
  if (weights.math) {
    const mathScore = (userScores.math / SCORE_RANGES.MATH_MAX) * weights.math;
    totalScore += mathScore;
  }

  // 영어
  if (scoreTypes.english === 'converted' && formula.english_conversion) {
    const englishGrade = Math.min(Math.max(Math.round((100 - userScores.english * 10) / 10), 1), 9);
    const englishScore = formula.english_conversion[englishGrade.toString() as keyof typeof formula.english_conversion] || 0;
    if (weights.english) {
      totalScore += (englishScore / 100) * weights.english;
    }
  } else if (scoreTypes.english === 'penalty' && formula.english_penalty) {
    const englishGrade = Math.min(Math.max(Math.round((100 - userScores.english * 10) / 10), 1), 9);
    const penalty = formula.english_penalty[englishGrade.toString() as keyof typeof formula.english_penalty] || 0;
    totalScore += penalty;
  }

  // 탐구
  if (weights.inquiry) {
    let inquiry1 = userScores.inquiry1;
    let inquiry2 = userScores.inquiry2;
    
    if (scoreTypes.inquiry === 'converted') {
      inquiry1 = getConvertedInquiryScore(inquiry1);
      inquiry2 = getConvertedInquiryScore(inquiry2);
    }
    
    const avgInquiry = (inquiry1 + inquiry2) / 2;
    const inquiryScore = scoreTypes.inquiry === 'converted' 
      ? (avgInquiry / SCORE_RANGES.INQUIRY_MAX) * weights.inquiry
      : (avgInquiry / 100) * weights.inquiry;
    totalScore += inquiryScore;
  }

  // 한국사 가산점
  if (formula.korean_history_bonus) {
    const historyGrade = Math.min(Math.max(userScores.koreanHistory, 1), 9);
    const bonus = formula.korean_history_bonus[historyGrade.toString() as keyof typeof formula.korean_history_bonus] || 0;
    totalScore += bonus;
  }

  return Math.round(totalScore * 10) / 10;
}

/**
 * 합격 확률 계산 (정규분포 기반)
 */
export function calculateProbability(
  userScore: number,
  cutoffData: Cutoff
): number {
  const mean = cutoffData.mean;
  const std = cutoffData.std;
  const min = cutoffData.min;

  // 사용자 점수가 최저점보다 낮으면 낮은 확률
  if (userScore < min - std * 2) {
    return Math.max(1, Math.round((1 - (min - userScore) / (std * 3)) * 10));
  }

  // 정규분포를 이용한 확률 계산 (간소화 버전)
  const zScore = (userScore - mean) / std;
  
  // z-score를 확률로 변환 (간단한 근사)
  let probability = 50;
  if (zScore >= 2) probability = PROBABILITY_THRESHOLDS.VERY_STABLE;
  else if (zScore >= 1.5) probability = 93;
  else if (zScore >= 1) probability = 84;
  else if (zScore >= 0.5) probability = 69;
  else if (zScore >= 0) probability = 50;
  else if (zScore >= -0.5) probability = 31;
  else if (zScore >= -1) probability = 16;
  else if (zScore >= -1.5) probability = 7;
  else probability = 2;

  return Math.min(PROBABILITY_THRESHOLDS.VERY_STABLE, Math.max(1, probability));
}

/**
 * 특정 대학의 모든 학과 분석
 */
export function analyzeUniversity(
  universityId: string,
  userScores: UserScores
): DepartmentResult[] {
  const universityData = getUniversityData();
  const university = universityData.universities.find(
    (u: University) => u.university_id === universityId
  );

  if (!university) return [];

  return university.departments
    .map((dept: Department) => {
      const calculatedScore = calculateUniversityScore(userScores, dept);
      const cutoff2024 = dept.cutoffs.find((c: Cutoff) => c.year === 2024);
      const probability = cutoff2024 
        ? calculateProbability(calculatedScore, cutoff2024)
        : 0;

      return {
        dept_id: dept.dept_id,
        name: dept.name,
        group: dept.group,
        calculatedScore,
        probability,
        cutoff2024: cutoff2024?.min || 0,
        quota: dept.quota,
        track: dept.track,
      };
    })
    .sort((a: DepartmentResult, b: DepartmentResult) => b.probability - a.probability);
}

/**
 * 모든 대학 목록 가져오기
 */
export function getAllUniversities() {
  return getUniversityData().universities.map((u: University) => ({
    id: u.university_id,
    name: u.name,
    region: u.region,
    category: u.category,
  }));
}