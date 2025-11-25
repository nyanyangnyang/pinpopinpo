# Swagger 연동 가이드

백엔드 개발자가 Swagger 파일을 보내주면 프론트엔드에서 활용하는 방법입니다.

---

## 📋 Swagger란?

**OpenAPI Specification (Swagger)**는 RESTful API를 설명하는 표준 형식입니다.

### 장점
- ✅ API 명세를 자동으로 확인 가능
- ✅ TypeScript 타입 자동 생성
- ✅ API 클라이언트 코드 자동 생성
- ✅ 백엔드 변경사항 자동 반영

---

## 🎯 백엔드 개발자에게 요청할 것

### 1. Swagger 파일 형식
다음 중 하나로 제공받으세요:

```
✅ swagger.json (JSON 파일)
✅ swagger.yaml (YAML 파일)
✅ http://localhost:8000/api/swagger.json (URL)
```

### 2. OpenAPI 버전 확인
```
✅ OpenAPI 3.0 이상 권장
```

### 3. 예시 요청
```
안녕하세요!
프론트엔드 연동을 위해 Swagger 파일이 필요합니다.

1. Swagger 문서 URL 또는 파일 (swagger.json/yaml)
2. API 베이스 URL (예: http://localhost:8000/api)
3. 인증 방식 (Bearer Token 등)

감사합니다!
```

---

## 🚀 Swagger 연동 방법

### 방법 1: openapi-typescript-codegen (추천) ⭐

**가장 인기있는 TypeScript 코드 생성 도구**

#### Step 1: 패키지 설치

```bash
npm install --save-dev openapi-typescript-codegen
```

#### Step 2: Swagger 파일 받기

백엔드 개발자에게 받은 `swagger.json` 파일을 프로젝트에 저장:

```
프로젝트 루트/
├── swagger.json  ← 여기에 저장
├── src/
└── ...
```

#### Step 3: 코드 생성 스크립트 추가

`package.json`에 추가:

```json
{
  "scripts": {
    "generate:api": "openapi --input ./swagger.json --output ./src/generated --client axios"
  }
}
```

#### Step 4: API 코드 생성

```bash
npm run generate:api
```

자동으로 생성된 파일들:

```
src/generated/
├── models/           # TypeScript 타입 정의
│   ├── User.ts
│   ├── University.ts
│   ├── Prediction.ts
│   └── ...
├── services/         # API 호출 함수
│   ├── AuthService.ts
│   ├── UniversityService.ts
│   ├── PredictionService.ts
│   └── ...
└── index.ts
```

#### Step 5: 프론트엔드에서 사용

```typescript
// 기존 방식 (수동)
import { api } from '@/services/api';
const response = await api.get('/universities');

// Swagger 자동 생성 (새로운 방식)
import { UniversityService } from '@/generated/services/UniversityService';
const universities = await UniversityService.getUniversities();
```

---

### 방법 2: openapi-typescript (타입만 생성)

**타입 정의만 필요한 경우**

#### Step 1: 설치

```bash
npm install --save-dev openapi-typescript
```

#### Step 2: 타입 생성

```bash
npx openapi-typescript swagger.json --output src/types/api.ts
```

#### Step 3: 사용

```typescript
import type { paths } from '@/types/api';

type UniversityResponse = paths['/api/universities']['get']['responses']['200']['content']['application/json'];

const universities: UniversityResponse = await api.get('/universities');
```

---

## 📝 실제 적용 예시

### 현재 프로젝트 구조 (수동 방식)

```typescript
// src/services/universityService.ts
export async function fetchUniversityData(): Promise<UniversityData> {
  if (isMockMode()) {
    return getMockUniversityData();
  }
  
  const response = await api.get<UniversityData>('/universities');
  return response.data;
}
```

### Swagger 적용 후 (자동 생성)

```typescript
// src/generated/services/UniversityService.ts (자동 생성됨)
export class UniversityService {
  public static async getUniversities(): Promise<UniversityData> {
    const response = await OpenAPI.request({
      method: 'GET',
      url: '/universities',
    });
    return response;
  }
}

// 프론트엔드에서 사용
import { UniversityService } from '@/generated/services/UniversityService';
const data = await UniversityService.getUniversities();
```

---

## 🔄 개발 워크플로우

### 백엔드 API 변경 시

1. 백엔드 개발자: API 수정 후 Swagger 파일 업데이트
2. 백엔드 개발자: 업데이트된 `swagger.json` 전달
3. 프론트엔드 개발자: 파일 교체
4. 프론트엔드 개발자: `npm run generate:api` 실행
5. 자동으로 타입 및 API 코드 재생성! ✨

### 자동화 (고급)

Swagger 파일을 URL로 받을 수 있다면:

```json
{
  "scripts": {
    "generate:api": "openapi --input http://localhost:8000/api/swagger.json --output ./src/generated --client axios"
  }
}
```

개발 서버 시작 시 자동으로 최신 API 반영!

```json
{
  "scripts": {
    "predev": "npm run generate:api",
    "dev": "vite"
  }
}
```

---

## ⚙️ 설정 옵션

### openapi-typescript-codegen 옵션

```bash
openapi \
  --input ./swagger.json \           # Swagger 파일 경로
  --output ./src/generated \         # 출력 경로
  --client axios \                   # HTTP 클라이언트 (axios, fetch, xhr)
  --useOptions \                     # 옵션 패턴 사용
  --useUnionTypes \                  # Union 타입 사용
  --exportSchemas true \             # 스키마 export
  --exportServices true              # 서비스 export
```

### 추천 설정

```json
{
  "scripts": {
    "generate:api": "openapi --input ./swagger.json --output ./src/generated --client fetch --useOptions --useUnionTypes"
  }
}
```

---

## 🎯 현재 프로젝트 적용 계획

### 1단계: 준비 (지금)
- ✅ 백엔드 개발자에게 Swagger 파일 요청
- ✅ `openapi-typescript-codegen` 설치
- ✅ 스크립트 설정

### 2단계: Swagger 파일 받은 후
- 🔄 API 코드 자동 생성
- 🔄 기존 `src/services/` 파일과 비교
- 🔄 점진적으로 교체

### 3단계: Mock 모드 유지
```typescript
// Swagger로 생성된 코드도 Mock 모드 지원 가능
import { UniversityService } from '@/generated/services/UniversityService';

export async function fetchUniversityData() {
  if (isMockMode()) {
    return getMockUniversityData(); // Mock 데이터
  }
  return UniversityService.getUniversities(); // 실제 API
}
```

---

## 📚 참고 자료

### openapi-typescript-codegen
- GitHub: https://github.com/ferdikoomen/openapi-typescript-codegen
- 가장 인기있는 TypeScript 코드 생성 도구
- axios, fetch, xhr 지원

### openapi-typescript
- GitHub: https://github.com/drwpow/openapi-typescript
- 타입 정의만 생성
- 더 가볍고 빠름

### Swagger 문서
- 공식 사이트: https://swagger.io/
- OpenAPI Spec: https://spec.openapis.org/oas/latest.html

---

## ⚠️ 주의사항

### 1. .gitignore 설정

자동 생성된 코드는 Git에 커밋하지 않는 것이 좋습니다:

```gitignore
# .gitignore
src/generated/
```

대신 `swagger.json`만 커밋하고, 팀원들이 `npm run generate:api`로 생성.

### 2. 백엔드와 버전 맞추기

Swagger 파일 버전과 실제 배포된 백엔드 버전이 일치하는지 확인하세요.

### 3. 커스텀 로직 유지

자동 생성된 코드는 수정하지 말고, wrapper를 만들어 사용:

```typescript
// ✅ 좋은 예
import { UniversityService } from '@/generated/services/UniversityService';

export async function fetchUniversityData() {
  // 커스텀 로직 (에러 처리, Mock 모드 등)
  if (isMockMode()) {
    return getMockUniversityData();
  }
  
  try {
    return await UniversityService.getUniversities();
  } catch (error) {
    console.error('대학 데이터 로드 실패:', error);
    throw error;
  }
}
```

---

## 🎉 결론

Swagger 파일을 받으면:
1. **타입 자동 생성** - 수동 작업 불필요
2. **API 코드 자동 생성** - 오타 방지
3. **백엔드 변경사항 자동 반영** - 항상 최신 상태 유지

**백엔드 개발자에게 Swagger 파일을 요청하세요!** 🚀

