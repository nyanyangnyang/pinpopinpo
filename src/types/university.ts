// 대학 관련 타입 정의

export interface University {
  university_id: string;
  name: string;
  region: string;
  category: '최상위' | '상위' | '상위(거점)' | '중위' | '중하위';
  departments: Department[];
}

export interface Department {
  dept_id: string;
  name: string;
  track: 'humanities' | 'science';
  group: 'A' | 'B' | 'C';
  quota: number;
  formula: Formula;
  cutoffs: Cutoff[];
}

export interface Formula {
  base_total: number;
  final_total: number;
  weights: {
    korean: number;
    math: number;
    english?: number;
    inquiry: number;
  };
  score_types: {
    korean: 'standard' | 'percentile';
    math: 'standard' | 'percentile';
    inquiry: 'converted' | 'standard';
    english: 'converted' | 'penalty';
  };
  english_conversion?: Record<string, number>;
  english_penalty?: Record<string, number>;
  korean_history_bonus?: Record<string, number>;
}

export interface Cutoff {
  year: number;
  min: number;
  mean: number;
  std: number;
  n: number;
  competition_ratio?: number;
}

export interface UniversityMetadata {
  project_name: string;
  total_universities: number;
  total_departments: number;
  data_years: number[];
  base_year: number;
  last_updated: string;
  description: string;
}

export interface UniversityData {
  metadata: UniversityMetadata;
  universities: University[];
}

// UI에서 사용하는 대학 목록 아이템 타입
export interface UniversityListItem {
  id: string;
  label: string;
  logo?: string;
  category?: string;
  abbr?: string;
  color?: string;
}

