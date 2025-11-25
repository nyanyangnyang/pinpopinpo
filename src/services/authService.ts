/**
 * 인증 관련 API 서비스
 */

import { api, isMockMode } from './api';
import type { User } from '@/types';

/**
 * 로그인 요청 데이터
 */
export interface LoginRequest {
  provider: 'kakao' | 'google' | 'naver';
  code: string;
  redirect_uri: string;
}

/**
 * 로그인 응답 데이터
 */
export interface LoginResponse {
  user: User;
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

/**
 * 카카오 로그인
 */
export async function loginWithKakao(code: string): Promise<LoginResponse> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 카카오 로그인:', code);
    
    // Mock 사용자 데이터
    return {
      user: {
        id: 'mock_user_123',
        nickname: '테스트 사용자',
        profile_image: undefined,
        email: 'test@example.com',
      },
      access_token: 'mock_access_token',
      refresh_token: 'mock_refresh_token',
      expires_in: 3600,
    };
  }

  // 실제 API 호출
  const response = await api.post<LoginResponse>('/auth/kakao/login', {
    code,
    redirect_uri: window.location.origin,
  });
  
  if (response.success && response.data) {
    return response.data;
  }

  throw new Error(response.error || '로그인에 실패했습니다.');
}

/**
 * 토큰 갱신
 */
export async function refreshAccessToken(refreshToken: string): Promise<{
  access_token: string;
  expires_in: number;
}> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 토큰 갱신:', refreshToken);
    return {
      access_token: 'mock_new_access_token',
      expires_in: 3600,
    };
  }

  // 실제 API 호출
  const response = await api.post<{
    access_token: string;
    expires_in: number;
  }>('/auth/refresh', { refresh_token: refreshToken });
  
  if (response.success && response.data) {
    return response.data;
  }

  throw new Error(response.error || '토큰 갱신에 실패했습니다.');
}

/**
 * 로그아웃
 */
export async function logout(): Promise<void> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 로그아웃');
    return;
  }

  // 실제 API 호출
  const response = await api.post('/auth/logout');
  
  if (!response.success) {
    throw new Error(response.error || '로그아웃에 실패했습니다.');
  }
}

/**
 * 내 정보 조회
 */
export async function fetchMyProfile(): Promise<User> {
  // Mock 모드
  if (isMockMode()) {
    console.log('[MOCK] 내 정보 조회');
    return {
      id: 'mock_user_123',
      nickname: '테스트 사용자',
      email: 'test@example.com',
    };
  }

  // 실제 API 호출
  const response = await api.get<User>('/auth/me');
  
  if (response.success && response.data) {
    return response.data;
  }

  throw new Error(response.error || '사용자 정보를 불러오는데 실패했습니다.');
}

