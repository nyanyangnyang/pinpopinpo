# pinpoint API 명세서

백엔드 개발자를 위한 API 엔드포인트 명세입니다.

---

## 📋 기본 정보

- **Base URL**: `http://localhost:8000/api` (개발), `https://api.pinpoint.com/api` (프로덕션)
- **인증 방식**: JWT Bearer Token
- **Content-Type**: `application/json`
- **인코딩**: UTF-8

---

## 🔐 인증 (Authentication)

### 1. 카카오 로그인

```http
POST /auth/kakao/login
```

**Request Body:**
```json
{
  "code": "카카오에서 받은 인증 코드",
  "redirect_uri": "http://localhost:3000/auth/kakao/callback"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "nickname": "홍길동",
      "email": "hong@example.com",
      "profile_image": "https://..."
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600
  }
}
```

### 2. 토큰 갱신

```http
POST /auth/refresh
```

**Request Body:**
```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "access_token": "new_access_token",
    "expires_in": 3600
  }
}
```

### 3. 로그아웃

```http
POST /auth/logout
Authorization: Bearer {access_token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "로그아웃되었습니다."
}
```

### 4. 내 정보 조회

```http
GET /auth/me
Authorization: Bearer {access_token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "nickname": "홍길동",
    "email": "hong@example.com",
    "profile_image": "https://..."
  }
}
```

---

## 🎓 대학 정보 (Universities)

### 1. 전체 대학 데이터 조회

```http
GET /universities
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "metadata": {
      "project_name": "대학 정시 합격 예측 시스템",
      "total_universities": 54,
      "total_departments": 403,
      "data_years": [2022, 2023, 2024],
      "base_year": 2024,
      "last_updated": "2024-11-25",
      "description": "주요 대학의 정시 환산점수 공식 및 3개년 합격선 데이터"
    },
    "universities": [
      {
        "university_id": "yonsei",
        "name": "연세대학교",
        "region": "서울",
        "category": "최상위",
        "departments": [
          {
            "dept_id": "yonsei_경영학_0",
            "name": "경영학과",
            "track": "humanities",
            "group": "A",
            "quota": 60,
            "formula": {
              "base_total": 600,
              "final_total": 860,
              "weights": {
                "korean": 200,
                "math": 300,
                "english": 100,
                "inquiry": 200
              },
              "score_types": {
                "korean": "standard",
                "math": "standard",
                "inquiry": "converted",
                "english": "converted"
              },
              "english_conversion": {
                "1": 100,
                "2": 95,
                "3": 87.5,
                "4": 75,
                "5": 60
              },
              "korean_history_bonus": {
                "1": 10,
                "2": 10,
                "3": 10
              }
            },
            "cutoffs": [
              {
                "year": 2024,
                "min": 688.0,
                "mean": 694.5,
                "std": 4.5,
                "n": 60,
                "competition_ratio": 5.2
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### 2. 특정 대학 조회

```http
GET /universities/{university_id}
```

**Path Parameters:**
- `university_id`: 대학 ID (예: "yonsei", "korea")

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "university_id": "yonsei",
    "name": "연세대학교",
    "region": "서울",
    "category": "최상위",
    "departments": [...]
  }
}
```

### 3. 대학 목록 조회 (간단 정보)

```http
GET /universities/list
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "yonsei",
      "name": "연세대학교",
      "region": "서울",
      "category": "최상위"
    },
    {
      "id": "korea",
      "name": "고려대학교",
      "region": "서울",
      "category": "최상위"
    }
  ]
}
```

---

## 📊 합격 예측 (Predictions)

### 1. 합격 확률 분석

```http
POST /predictions/analyze
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "university_id": "yonsei",
  "scores": {
    "korean": 135.5,
    "math": 140.2,
    "english": 1,
    "inquiry1": 45,
    "inquiry2": 48,
    "koreanHistory": 2
  },
  "student_info": {
    "name": "홍길동",
    "phone": "010-1234-5678",
    "gender": "남성"
  }
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "university_id": "yonsei",
    "university_name": "연세대학교",
    "departments": [
      {
        "dept_id": "yonsei_경영학_0",
        "name": "경영학과",
        "group": "A",
        "track": "humanities",
        "quota": 60,
        "calculatedScore": 692.5,
        "probability": 84.5,
        "cutoff2024": 688.0
      }
    ],
    "analyzed_at": "2024-11-25T10:30:00Z"
  }
}
```

### 2. 예측 결과 저장

```http
POST /predictions/save
Authorization: Bearer {access_token}
```

**Request Body:**
```json
{
  "university_id": "yonsei",
  "university_name": "연세대학교",
  "departments": [...],
  "analyzed_at": "2024-11-25T10:30:00Z"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "prediction_123",
    "saved_at": "2024-11-25T10:30:00Z"
  }
}
```

### 3. 내 예측 기록 조회

```http
GET /predictions/user/{user_id}
Authorization: Bearer {access_token}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "prediction_123",
      "university_id": "yonsei",
      "university_name": "연세대학교",
      "departments": [...],
      "analyzed_at": "2024-11-25T10:30:00Z",
      "saved_at": "2024-11-25T10:30:00Z"
    }
  ]
}
```

---

## 📝 타입 정의

### UserScores
```typescript
{
  korean: number;      // 국어 표준점수
  math: number;        // 수학 표준점수
  english: number;     // 영어 등급 (1-9)
  inquiry1: number;    // 탐구1 원점수
  inquiry2: number;    // 탐구2 원점수
  koreanHistory: number; // 한국사 등급 (1-9)
}
```

### DepartmentResult
```typescript
{
  dept_id: string;
  name: string;
  group: "A" | "B" | "C";
  track: "humanities" | "science";
  quota: number;
  calculatedScore: number;  // 환산점수
  probability: number;      // 합격 확률 (0-100)
  cutoff2024: number;       // 2024년 최저 합격선
}
```

---

## ⚠️ 에러 응답

### 공통 에러 형식
```json
{
  "success": false,
  "error": "에러 메시지",
  "code": "ERROR_CODE"
}
```

### HTTP 상태 코드

| 코드 | 설명 |
|------|------|
| 200 | 성공 |
| 400 | 잘못된 요청 |
| 401 | 인증 필요 |
| 403 | 권한 없음 |
| 404 | 리소스 없음 |
| 500 | 서버 오류 |

### 에러 코드

| 코드 | 설명 |
|------|------|
| `AUTH_FAILED` | 인증 실패 |
| `TOKEN_EXPIRED` | 토큰 만료 |
| `INVALID_SCORES` | 잘못된 성적 데이터 |
| `UNIVERSITY_NOT_FOUND` | 대학 정보 없음 |
| `PREDICTION_FAILED` | 예측 분석 실패 |

---

## 🔧 개발 환경 설정

### 1. CORS 설정
```
허용 Origin: http://localhost:3000, https://pinpoint.com
허용 Methods: GET, POST, PUT, DELETE, OPTIONS
허용 Headers: Content-Type, Authorization
```

### 2. Rate Limiting
```
인증 없음: 10 requests/minute
인증 있음: 100 requests/minute
```

---

## 📞 문의

API 관련 문의사항은 프론트엔드 팀에게 연락주세요.

