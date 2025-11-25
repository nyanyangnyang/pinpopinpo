import { useState, useCallback } from 'react';
import type { StudentInfo, SubjectSelection, StudentScores } from '../types';
import { MESSAGES } from '../constants';

interface UseScoreFormProps {
  onSubmit: (data: { studentInfo: StudentInfo; subjects: SubjectSelection; scores: StudentScores }) => void;
  savedScores?: {
    studentInfo?: StudentInfo;
    subjects?: SubjectSelection;
    scores?: StudentScores;
  } | null;
}

export function useScoreForm({ onSubmit, savedScores }: UseScoreFormProps) {
  const [step, setStep] = useState<'basic' | 'scores'>('basic');
  
  // 기본 정보
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    name: savedScores?.studentInfo?.name || '',
    phone: savedScores?.studentInfo?.phone || '',
    gender: savedScores?.studentInfo?.gender || '',
    year: '2025학년도',
    examType: '수능',
    scoreType: '가채점',
  });

  // 응시 과목
  const [subjects, setSubjects] = useState<SubjectSelection>({
    korean: '국어 (택1)',
    koreanSub: savedScores?.subjects?.koreanSub || '',
    math: '수학 (택1)',
    mathSub: savedScores?.subjects?.mathSub || '',
    inquiry: '탐구 (택2)',
    inquiry1: savedScores?.subjects?.inquiry1 || '',
    inquiry2: savedScores?.subjects?.inquiry2 || '',
    secondLang: savedScores?.subjects?.secondLang || '',
    region: savedScores?.subjects?.region || '',
  });

  // 성적
  const [scores, setScores] = useState<StudentScores>({
    koreanScore: savedScores?.scores?.koreanScore || '',
    mathScore: savedScores?.scores?.mathScore || '',
    englishGrade: savedScores?.scores?.englishGrade || '',
    koreanHistoryGrade: savedScores?.scores?.koreanHistoryGrade || '',
    inquiry1Score: savedScores?.scores?.inquiry1Score || '',
    inquiry2Score: savedScores?.scores?.inquiry2Score || '',
  });

  // 기본 정보 완성 여부
  const isBasicComplete = Boolean(
    studentInfo.name &&
    studentInfo.phone &&
    studentInfo.gender &&
    subjects.koreanSub &&
    subjects.mathSub &&
    subjects.inquiry1 &&
    subjects.inquiry2 &&
    subjects.region
  );

  // 성적 정보 완성 여부
  const isScoresComplete = Boolean(
    scores.koreanScore &&
    scores.mathScore &&
    scores.englishGrade &&
    scores.koreanHistoryGrade &&
    scores.inquiry1Score &&
    scores.inquiry2Score
  );

  // 기본 정보 다음 단계로
  const handleBasicNext = useCallback(() => {
    if (!isBasicComplete) {
      alert(MESSAGES.ERROR.REQUIRED_FIELDS);
      return;
    }
    setStep('scores');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isBasicComplete]);

  // 성적 제출
  const handleSubmitScores = useCallback(() => {
    if (!isScoresComplete) {
      alert(MESSAGES.ERROR.REQUIRED_SCORES);
      return;
    }
    onSubmit({ studentInfo, subjects, scores });
  }, [isScoresComplete, onSubmit, studentInfo, subjects, scores]);

  // 기본 정보 초기화
  const resetBasicInfo = useCallback(() => {
    setStudentInfo({
      name: '',
      phone: '',
      gender: '',
      year: '2025학년도',
      examType: '수능',
      scoreType: '가채점',
    });
    setSubjects({
      korean: '국어 (택1)',
      koreanSub: '',
      math: '수학 (택1)',
      mathSub: '',
      inquiry: '탐구 (택2)',
      inquiry1: '',
      inquiry2: '',
      secondLang: '',
      region: '',
    });
  }, []);

  // 이전 단계로
  const handleBack = useCallback(() => {
    setStep('basic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    step,
    studentInfo,
    setStudentInfo,
    subjects,
    setSubjects,
    scores,
    setScores,
    isBasicComplete,
    isScoresComplete,
    handleBasicNext,
    handleSubmitScores,
    resetBasicInfo,
    handleBack,
  };
}

