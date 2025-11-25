// 학생 관련 타입 정의

export interface StudentInfo {
  name: string;
  phone: string;
  gender: '남성' | '여성' | '';
  year: string;
  examType: string;
  scoreType: string;
}

export interface SubjectSelection {
  korean: string;
  koreanSub: string;
  math: string;
  mathSub: string;
  inquiry: string;
  inquiry1: string;
  inquiry2: string;
  secondLang: string;
  region: '해당' | '비해당' | '';
}

export interface StudentScores {
  koreanScore: string | number;
  mathScore: string | number;
  englishGrade: string | number;
  koreanHistoryGrade: string | number;
  inquiry1Score: string | number;
  inquiry2Score: string | number;
}

export interface UserScores {
  korean: number;
  math: number;
  english: number;
  inquiry1: number;
  inquiry2: number;
  koreanHistory: number;
}

export interface SavedScoreData {
  studentInfo: StudentInfo;
  subjects: SubjectSelection;
  scores: StudentScores;
}

export interface User {
  id?: string;
  nickname: string;
  profile_image?: string;
  email?: string;
}

