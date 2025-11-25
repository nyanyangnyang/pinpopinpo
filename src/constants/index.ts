// 상수 정의 - 매직 넘버와 문자열 관리

// 합격 확률 기준
export const PROBABILITY_THRESHOLDS = {
  VERY_STABLE: 99,
  STABLE_HIGH: 80,
  STABLE: 70,
  POSSIBLE: 60,
  MODERATE: 50,
  AMBITIOUS: 40,
  REACH: 20,
  UNLIKELY: 0,
} as const;

// 점수 범위
export const SCORE_RANGES = {
  KOREAN_MAX: 149,
  MATH_MAX: 148,
  INQUIRY_MAX: 72,
  INQUIRY_QUESTION_MAX: 50,
  ENGLISH_MIN: 1,
  ENGLISH_MAX: 9,
  KOREAN_HISTORY_MIN: 1,
  KOREAN_HISTORY_MAX: 9,
} as const;

// 선택 과목
export const SUBJECTS = {
  KOREAN: ['화법과작문', '언어와매체'] as const,
  MATH: ['확률과통계', '미적분', '기하'] as const,
  SOCIAL_INQUIRY: [
    '생활과윤리',
    '윤리와사상',
    '사회문화',
    '한국지리',
    '세계지리',
    '세계사',
    '동아시아사',
    '경제',
    '정치와법',
  ] as const,
  SCIENCE_INQUIRY: [
    '물리학I',
    '화학I',
    '생명과학I',
    '지구과학I',
    '물리학II',
    '화학II',
    '생명과학II',
    '지구과학II',
  ] as const,
  SECOND_LANG: [
    '독일어',
    '프랑스어',
    '스페인어',
    '중국어',
    '일본어',
    '러시아어',
    '아랍어',
    '베트남어',
    '한문',
  ] as const,
} as const;

// 대학 카테고리
export const UNIVERSITY_CATEGORIES = {
  TOP: '최상위',
  HIGH: '상위',
  HIGH_REGIONAL: '상위(거점)',
  MID: '중위',
  MID_LOW: '중하위',
} as const;

// 모집군
export const ADMISSION_GROUPS = {
  A: 'A',
  B: 'B',
  C: 'C',
} as const;

// 계열
export const TRACKS = {
  HUMANITIES: 'humanities',
  SCIENCE: 'science',
} as const;

// 성별
export const GENDERS = {
  MALE: '남성',
  FEMALE: '여성',
} as const;

// 지역인재
export const REGIONAL_TALENT = {
  APPLICABLE: '해당',
  NOT_APPLICABLE: '비해당',
} as const;

// 학년도
export const ACADEMIC_YEARS = ['2025학년도', '2024학년도', '2023학년도'] as const;

// 시험 유형
export const EXAM_TYPES = ['수능', '모의평가'] as const;

// 점수 유형
export const SCORE_TYPES = ['가채점', '실채점'] as const;

// 메시지
export const MESSAGES = {
  ERROR: {
    REQUIRED_FIELDS: '모든 필수 정보를 입력해주세요.',
    REQUIRED_SCORES: '모든 성적 정보를 입력해주세요.',
    LOGIN_REQUIRED: '먼저 로그인이 필요합니다.',
    SCORE_INPUT_REQUIRED: '먼저 성적을 입력해주세요.',
    MAX_INQUIRY_SELECTED: '이미 2과목을 선택했습니다.',
  },
  SUCCESS: {
    SCORE_SAVED: '성적이 저장되었습니다!',
    SCORE_SAVED_DETAIL: '이제 \'핀포인트 AI 합격 예측\'에서 대학을 선택하세요.',
  },
  INFO: {
    REFERENCE_ONLY: '⚠️ 본 서비스는 참고용이며, 실제 합격 여부와 다를 수 있습니다. 최종 지원 결정은 신중히 하시기 바랍니다.',
    MEDICAL_EXCLUDED: '※ 의약학 계열 분석은 제외됩니다',
    TOTAL_DEPARTMENTS: '※ 총 403개 학과 데이터 분석 가능',
  },
} as const;

// 컴포넌트 크기 제한 (코딩 규칙)
export const COMPONENT_LIMITS = {
  RECOMMENDED_MAX_LINES: 50,
  WARNING_MAX_LINES: 100,
  CRITICAL_MAX_LINES: 200,
} as const;

// 애니메이션 시간
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// localStorage 키
export const STORAGE_KEYS = {
  USER: 'user',
  USER_SCORES: 'userScores',
  CURRENT_PAGE: 'currentPage',
  ANALYSIS_DATA: 'analysisData',
} as const;

