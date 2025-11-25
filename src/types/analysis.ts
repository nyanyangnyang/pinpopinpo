// 분석 결과 관련 타입 정의

export interface DepartmentResult {
  dept_id: string;
  name: string;
  group: 'A' | 'B' | 'C';
  track: 'humanities' | 'science';
  quota: number;
  convertedScore: number;
  probability: number;
  cutoff2024: number;
  cutoffs?: Array<{
    year: number;
    min: number;
    mean: number;
    std: number;
    n: number;
    competition_ratio?: number;
  }>;
}

export interface AnalysisSubmitData {
  university: string;
  universityName?: string;
  scores: {
    korean: string | number;
    math: string | number;
    english: string | number;
    science1: string | number;
    science2: string | number;
  };
}

export type ProbabilityLevel = 
  | 'very_stable'    // 99% 이상
  | 'stable'         // 80-99%
  | 'safe'           // 70-80%
  | 'possible'       // 60-70%
  | 'moderate'       // 50-60%
  | 'ambitious'      // 40-50%
  | 'reach'          // 20-40%
  | 'unlikely';      // 20% 미만

export interface ProbabilityRange {
  min: number;
  max?: number;
  color: string;
  text: string;
}

