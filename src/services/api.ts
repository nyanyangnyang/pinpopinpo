/**
 * API 기본 설정 및 공통 함수
 */

// 환경변수에서 API URL 가져오기 (없으면 기본값 사용)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Mock 모드 여부 (개발 중에는 true, 백엔드 연동 시 false)
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true' ?? true;

/**
 * API 응답 공통 타입
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * HTTP 메서드 타입
 */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * API 요청 옵션
 */
interface RequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number>;
}

/**
 * API 요청 공통 함수
 */
async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { method = 'GET', headers = {}, body, params } = options;

  // URL 파라미터 추가
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  try {
    const response = await fetch(url.toString(), {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('API Request Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
    };
  }
}

/**
 * API 엔드포인트
 */
export const api = {
  /**
   * GET 요청
   */
  get: <T>(endpoint: string, params?: Record<string, string | number>) =>
    request<T>(endpoint, { method: 'GET', params }),

  /**
   * POST 요청
   */
  post: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'POST', body }),

  /**
   * PUT 요청
   */
  put: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'PUT', body }),

  /**
   * DELETE 요청
   */
  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: 'DELETE' }),

  /**
   * PATCH 요청
   */
  patch: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'PATCH', body }),
};

/**
 * Mock 모드 확인
 */
export const isMockMode = () => USE_MOCK;

/**
 * API Base URL 가져오기
 */
export const getApiBaseUrl = () => API_BASE_URL;

