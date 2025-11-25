/**
 * 합격 예측 관련 API 서비스
 */

import { api, isMockMode } from './api';
import type { DepartmentResult, UserScores } from '@/types';
import { analyzeUniversity as mockAnalyzeUniversity } from '@/utils/scoreCalculator';

/**
 * 합격 예측 요청 데이터
 */
export interface PredictionRequest {
  university_id: string;
  scores: UserScores;
  student_info?: {
    name: string;
    phone: string;
    gender: string;
  };
}

/**
 * 합격 예측 응답 데이터
 */
export interface PredictionResponse {
  university_id: string;
  university_name: string;
  departments: DepartmentResult[];
  analyzed_at: string;
}

/**
 * 합격 확률 분석
 */
export async function analyzePrediction(
  request: PredictionRequest
): Promise<PredictionResponse> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 합격 예측 분석:', request);
    
    const results = mockAnalyzeUniversity(request.university_id, request.scores);
    
    return {
      university_id: request.university_id,
      university_name: '대학명', // Mock에서는 간단하게
      departments: results,
      analyzed_at: new Date().toISOString(),
    };
  }

  // 실제 API 호출
  const response = await api.post<PredictionResponse>('/predictions/analyze', request);
  
  if (response.success && response.data) {
    return response.data;
  }

  throw new Error(response.error || '합격 예측 분석에 실패했습니다.');
}

/**
 * 예측 결과 저장
 */
export async function savePrediction(
  prediction: PredictionResponse
): Promise<{ id: string; saved_at: string }> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 예측 결과 저장:', prediction);
    return {
      id: `mock_${Date.now()}`,
      saved_at: new Date().toISOString(),
    };
  }

  // 실제 API 호출
  const response = await api.post<{ id: string; saved_at: string }>(
    '/predictions/save',
    prediction
  );
  
  if (response.success && response.data) {
    return response.data;
  }

  throw new Error(response.error || '예측 결과 저장에 실패했습니다.');
}

/**
 * 내 예측 기록 조회
 */
export async function fetchMyPredictions(userId: string): Promise<PredictionResponse[]> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 내 예측 기록 조회:', userId);
    return [];
  }

  // 실제 API 호출
  const response = await api.get<PredictionResponse[]>(`/predictions/user/${userId}`);
  
  if (response.success && response.data) {
    return response.data;
  }

  return [];
}

