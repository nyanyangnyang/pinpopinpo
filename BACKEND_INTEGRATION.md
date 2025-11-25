# 백엔드 연동 가이드

프론트엔드와 백엔드를 연동하는 방법을 설명합니다.

---

## 🎯 개요

이 프로젝트는 **Mock 모드**와 **실제 API 모드**를 쉽게 전환할 수 있도록 설계되었습니다.

### 현재 상태
- ✅ Mock 모드로 완전히 작동 (백엔드 없이 테스트 가능)
- ✅ API 서비스 레이어 완성 (실제 API 호출 준비 완료)
- ✅ TypeScript 타입 정의 완료
- ✅ API 명세서 작성 완료

---

## 📁 프로젝트 구조

```
src/
├── services/           # API 서비스 레이어
│   ├── api.ts          # 기본 API 설정 및 공통 함수
│   ├── authService.ts  # 인증 API
│   ├── universityService.ts  # 대학 데이터 API
│   ├── predictionService.ts  # 합격 예측 API
│   └── index.ts
├── types/              # TypeScript 타입 정의
├── data/               # Mock 데이터
└── utils/              # 유틸리티 함수
```

---

## 🔧 환경 설정

### 1. 환경변수 파일 생성

`.env.example`을 복사하여 `.env` 파일 생성:

```bash
cp .env.example .env
```

### 2. 환경변수 설정

`.env` 파일 수정:

```env
# Mock 모드 사용 (백엔드 연동 전: true, 연동 후: false)
VITE_USE_MOCK=true

# 백엔드 API URL
VITE_API_BASE_URL=http://localhost:8000/api

# 카카오 로그인 설정
VITE_KAKAO_CLIENT_ID=your_kakao_client_id
VITE_KAKAO_REDIRECT_URI=http://localhost:3000/auth/kakao/callback
```

---

## 🚀 Mock 모드 → 실제 API 전환

### 단계별 전환 방법

#### 1️⃣ 백엔드 서버 실행 확인

백엔드 서버가 `http://localhost:8000`에서 실행 중인지 확인하세요.

```bash
curl http://localhost:8000/api/universities/list
```

#### 2️⃣ 환경변수 변경

`.env` 파일에서 Mock 모드 비활성화:

```env
VITE_USE_MOCK=false
```

#### 3️⃣ 개발 서버 재시작

```bash
npm run dev
```

#### 4️⃣ API 연동 확인

브라우저 개발자 도구(F12) → Network 탭에서 API 호출 확인:
- Mock 모드: `[MOCK]` 로그만 출력
- 실제 API: HTTP 요청 확인 가능

---

## 🔌 API 서비스 사용 예시

### 대학 데이터 조회

```typescript
import { fetchUniversityData } from '@/services/universityService';

// Mock 모드: 로컬 데이터 반환
// 실제 API: GET /api/universities 호출
const data = await fetchUniversityData();
```

### 합격 예측 분석

```typescript
import { analyzePrediction } from '@/services/predictionService';

const result = await analyzePrediction({
  university_id: 'yonsei',
  scores: {
    korean: 135.5,
    math: 140.2,
    english: 1,
    inquiry1: 45,
    inquiry2: 48,
    koreanHistory: 2,
  },
});
```

### 로그인

```typescript
import { loginWithKakao } from '@/services/authService';

// 카카오 로그인
const response = await loginWithKakao(code);
console.log(response.user);
console.log(response.access_token);
```

---

## 🎨 API 응답 형식

### 성공 응답

```typescript
interface ApiResponse<T> {
  success: true;
  data: T;
}
```

### 실패 응답

```typescript
interface ApiResponse {
  success: false;
  error: string;
  code?: string;
}
```

### 사용 예시

```typescript
const response = await api.get('/universities/list');

if (response.success) {
  // 성공
  console.log(response.data);
} else {
  // 실패
  console.error(response.error);
}
```

---

## 🔐 인증 처리

### JWT 토큰 관리

토큰은 `localStorage`에 자동 저장됩니다:

```typescript
// 로그인 시
localStorage.setItem('access_token', response.access_token);
localStorage.setItem('refresh_token', response.refresh_token);

// API 호출 시 자동으로 Authorization 헤더 추가
```

### 토큰 갱신

```typescript
import { refreshAccessToken } from '@/services/authService';

// 토큰 만료 시 자동 갱신
const newToken = await refreshAccessToken(refreshToken);
```

---

## 📊 데이터 구조

### 성적 데이터 (UserScores)

```typescript
interface UserScores {
  korean: number;        // 국어 표준점수 (0-149)
  math: number;          // 수학 표준점수 (0-148)
  english: number;       // 영어 등급 (1-9)
  inquiry1: number;      // 탐구1 원점수 (0-50)
  inquiry2: number;      // 탐구2 원점수 (0-50)
  koreanHistory: number; // 한국사 등급 (1-9)
}
```

### 예측 결과 (DepartmentResult)

```typescript
interface DepartmentResult {
  dept_id: string;        // 학과 ID
  name: string;           // 학과명
  group: 'A' | 'B' | 'C'; // 모집군
  track: 'humanities' | 'science'; // 계열
  quota: number;          // 모집인원
  calculatedScore: number;// 환산점수
  probability: number;    // 합격 확률 (0-100)
  cutoff2024: number;     // 2024년 최저선
}
```

---

## 🧪 테스트 방법

### 1. Mock 모드 테스트

```bash
# .env 파일
VITE_USE_MOCK=true

# 서버 실행
npm run dev

# 브라우저에서 모든 기능 테스트
# - 성적 입력
# - 대학 선택
# - 합격 확률 조회
```

### 2. 실제 API 테스트

```bash
# .env 파일
VITE_USE_MOCK=false
VITE_API_BASE_URL=http://localhost:8000/api

# 백엔드 서버 실행 확인
curl http://localhost:8000/api/universities/list

# 프론트엔드 서버 실행
npm run dev

# API 호출 확인
# - 브라우저 개발자 도구 → Network 탭
# - Console에 에러 없는지 확인
```

---

## ⚠️ 주의사항

### 1. CORS 설정 필요

백엔드에서 CORS 허용:

```python
# FastAPI 예시
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 2. API 응답 형식 통일

모든 API 응답은 다음 형식을 따라야 합니다:

```json
{
  "success": true,
  "data": { ... }
}
```

또는

```json
{
  "success": false,
  "error": "에러 메시지"
}
```

### 3. 환경변수 보안

`.env` 파일은 절대 Git에 커밋하지 마세요!
- ✅ `.env.example` - Git에 커밋 (템플릿)
- ❌ `.env` - `.gitignore`에 포함 (실제 설정)

---

## 🐛 문제 해결

### API 호출 실패

```typescript
// 문제: CORS 에러
// 해결: 백엔드에서 CORS 설정 확인

// 문제: 404 Not Found
// 해결: API_BASE_URL과 엔드포인트 경로 확인

// 문제: 401 Unauthorized
// 해결: 토큰이 올바르게 전달되는지 확인
```

### Mock 모드 전환 안 됨

```bash
# 1. 환경변수 확인
cat .env

# 2. 서버 재시작
npm run dev

# 3. 브라우저 캐시 삭제 (Ctrl + Shift + Del)
```

---

## 📞 연락처

### 프론트엔드 팀
- GitHub: https://github.com/nyanyangnyang/pinpopinpo
- 질문: GitHub Issues에 등록

### 백엔드 팀
- API 명세서: `API_SPECIFICATION.md` 참고
- 구현 완료 시 프론트엔드 팀에 알려주세요

---

## ✅ 체크리스트

백엔드 개발자가 확인할 사항:

- [ ] API 명세서 검토 완료
- [ ] CORS 설정 완료
- [ ] `/api/universities` 엔드포인트 구현
- [ ] `/api/predictions/analyze` 엔드포인트 구현
- [ ] `/api/auth/kakao/login` 엔드포인트 구현
- [ ] JWT 토큰 인증 구현
- [ ] 에러 응답 형식 통일
- [ ] 로컬에서 API 테스트 완료
- [ ] 프론트엔드 팀에 연동 요청

---

**백엔드 연동 준비 완료! 🎉**

프론트엔드는 Mock 모드로 완전히 작동하며, 
환경변수만 변경하면 실제 API로 즉시 전환 가능합니다!

