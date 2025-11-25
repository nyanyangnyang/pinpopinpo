/**
 * 포맷팅 관련 유틸리티 함수
 */

/**
 * 숫자를 소수점 n자리로 포맷
 */
export function formatDecimal(num: number, digits: number = 1): string {
  return num.toFixed(digits);
}

/**
 * 백분율 포맷
 */
export function formatPercentage(num: number, digits: number = 1): string {
  return `${formatDecimal(num, digits)}%`;
}

/**
 * 전화번호 포맷 (010-1234-5678)
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * 모집군 한글 변환
 */
export function getGroupLabel(group: string): string {
  const labels: Record<string, string> = {
    'A': '가군',
    'B': '나군',
    'C': '다군',
  };
  return labels[group] || group;
}

/**
 * 계열 한글 변환
 */
export function getTrackLabel(track: string): string {
  const labels: Record<string, string> = {
    'humanities': '인문',
    'science': '자연',
  };
  return labels[track] || track;
}

/**
 * 점수 범위 검증
 */
export function validateScoreRange(
  score: number | string,
  min: number,
  max: number
): boolean {
  const numScore = typeof score === 'string' ? parseFloat(score) : score;
  return !isNaN(numScore) && numScore >= min && numScore <= max;
}

/**
 * 안전한 숫자 변환
 */
export function toNumber(value: string | number, defaultValue: number = 0): number {
  if (typeof value === 'number') return value;
  const num = parseFloat(value);
  return isNaN(num) ? defaultValue : num;
}

