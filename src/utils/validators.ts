/**
 * 유효성 검증 함수들
 */

import type { StudentInfo, SubjectSelection, StudentScores } from '../types';

/**
 * 이름 유효성 검증
 */
export function validateName(name: string): boolean {
  return name.trim().length >= 2;
}

/**
 * 전화번호 유효성 검증
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^01[0-9]-?\d{3,4}-?\d{4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * 기본 정보 유효성 검증
 */
export function validateBasicInfo(info: StudentInfo, subjects: SubjectSelection): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!validateName(info.name)) {
    errors.push('이름은 2자 이상이어야 합니다.');
  }

  if (!validatePhone(info.phone)) {
    errors.push('올바른 전화번호 형식이 아닙니다.');
  }

  if (!info.gender) {
    errors.push('성별을 선택해주세요.');
  }

  if (!subjects.koreanSub) {
    errors.push('국어 선택과목을 선택해주세요.');
  }

  if (!subjects.mathSub) {
    errors.push('수학 선택과목을 선택해주세요.');
  }

  if (!subjects.inquiry1 || !subjects.inquiry2) {
    errors.push('탐구 과목 2개를 선택해주세요.');
  }

  if (!subjects.region) {
    errors.push('지역인재 해당 여부를 선택해주세요.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * 성적 유효성 검증
 */
export function validateScores(scores: StudentScores): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!scores.koreanScore) {
    errors.push('국어 점수를 입력해주세요.');
  }

  if (!scores.mathScore) {
    errors.push('수학 점수를 입력해주세요.');
  }

  if (!scores.englishGrade) {
    errors.push('영어 등급을 선택해주세요.');
  }

  if (!scores.koreanHistoryGrade) {
    errors.push('한국사 등급을 선택해주세요.');
  }

  if (!scores.inquiry1Score) {
    errors.push('탐구1 점수를 입력해주세요.');
  }

  if (!scores.inquiry2Score) {
    errors.push('탐구2 점수를 입력해주세요.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

