/**
 * 대학 관련 API 서비스
 * Mock 모드와 실제 API 모드를 전환할 수 있습니다
 */

import { api, isMockMode } from './api';
import type { UniversityData, University } from '@/types';
import { getUniversityData as getMockUniversityData } from '@/data/universities';

/**
 * 전체 대학 데이터 조회
 */
export async function fetchUniversityData(): Promise<UniversityData> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 대학 데이터 조회');
    return Promise.resolve(getMockUniversityData());
  }

  // 실제 API 호출
  const response = await api.get<UniversityData>('/universities');
  
  if (response.success && response.data) {
    return response.data;
  }

  throw new Error(response.error || '대학 데이터를 불러오는데 실패했습니다.');
}

/**
 * 특정 대학 데이터 조회
 */
export async function fetchUniversityById(universityId: string): Promise<University | null> {
  // Mock 모드
  if (isMockMode()) {
    console.log(`[MOCK] 대학 조회: ${universityId}`);
    const data = getMockUniversityData();
    return data.universities.find((u: University) => u.university_id === universityId) || null;
  }

  // 실제 API 호출
  const response = await api.get<University>(`/universities/${universityId}`);
  
  if (response.success && response.data) {
    return response.data;
  }

  return null;
}

/**
 * 대학 목록 조회 (간단 정보만)
 */
export async function fetchUniversityList(): Promise<Array<{
  id: string;
  name: string;
  region: string;
  category: string;
}>> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 대학 목록 조회');
    const data = getMockUniversityData();
    return data.universities.map((u: University) => ({
      id: u.university_id,
      name: u.name,
      region: u.region,
      category: u.category,
    }));
  }

  // 실제 API 호출
  const response = await api.get<Array<{
    id: string;
    name: string;
    region: string;
    category: string;
  }>>('/universities/list');
  
  if (response.success && response.data) {
    return response.data;
  }

  return [];
}

