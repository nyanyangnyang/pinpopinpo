# 개발 가이드

## 🎯 완료된 개선 사항

### ✅ 1. 타입 정의 개선
- `src/types/` 폴더에 명확한 TypeScript 타입 정의 추가
- `any` 타입 제거 및 강타입 적용
- University, Student, Analysis 관련 타입 분리

**주요 파일:**
- `src/types/university.ts` - 대학 관련 타입
- `src/types/student.ts` - 학생 관련 타입  
- `src/types/analysis.ts` - 분석 결과 관련 타입
- `src/types/index.ts` - 타입 중앙 export

### ✅ 2. 상수 파일 생성
- `src/constants/index.ts`에 모든 매직 넘버와 문자열 상수화
- 확률 기준, 점수 범위, 메시지 등 관리

**포함 내용:**
- `PROBABILITY_THRESHOLDS` - 합격 확률 기준
- `SCORE_RANGES` - 점수 범위
- `SUBJECTS` - 선택 과목 목록
- `MESSAGES` - 에러/성공 메시지
- `STORAGE_KEYS` - localStorage 키

### ✅ 3. 커스텀 훅 생성
로직과 UI 분리를 위한 재사용 가능한 훅 구현

**훅 목록:**
- `useLocalStorage` - localStorage 관리
- `useScoreForm` - 성적 입력 폼 로직
- `useAuth` - 사용자 인증 관리
- `useProbabilityColor` - 확률 색상 계산

### ✅ 4. 공통 컴포넌트 생성
재사용 가능한 작은 컴포넌트 (50줄 이하)

**컴포넌트 목록:**
- `ProbabilityBar` - 확률 진행바
- `DepartmentCard` - 학과 카드
- `ScoreDisplay` - 점수 표시
- `FilterButton` - 필터 버튼
- `ErrorBoundary` - 에러 처리
- `ErrorMessage` - 에러 메시지
- `SuccessMessage` - 성공 메시지
- `Loading` - 로딩 컴포넌트

### ✅ 5. 유틸리티 함수
코드 재사용을 위한 헬퍼 함수

**파일:**
- `src/utils/formatters.ts` - 포맷팅 함수
- `src/utils/validators.ts` - 유효성 검증
- `src/utils/scoreCalculator.ts` - 점수 계산 (타입 개선)

### ✅ 6. 에러 처리 개선
- ErrorBoundary로 앱 전체 에러 처리
- 사용자 친화적인 에러 메시지
- ErrorMessage, SuccessMessage 컴포넌트

### ✅ 7. 성능 최적화
- React.memo로 불필요한 리렌더링 방지
- useMemo, useCallback 활용
- 컴포넌트 분리로 최적화 용이

## 📁 새로운 폴더 구조

```
src/
├── types/              # TypeScript 타입 정의
│   ├── university.ts
│   ├── student.ts
│   ├── analysis.ts
│   └── index.ts
├── constants/          # 상수 정의
│   └── index.ts
├── hooks/              # 커스텀 훅
│   ├── useLocalStorage.ts
│   ├── useScoreForm.ts
│   ├── useAuth.ts
│   ├── useProbabilityColor.ts
│   └── index.ts
├── utils/              # 유틸리티 함수
│   ├── scoreCalculator.ts
│   ├── formatters.ts
│   ├── validators.ts
│   └── index.ts
├── components/
│   ├── common/         # 공통 컴포넌트
│   │   ├── ProbabilityBar/
│   │   ├── DepartmentCard/
│   │   ├── ScoreDisplay/
│   │   ├── FilterButton/
│   │   ├── ErrorBoundary/
│   │   ├── ErrorMessage/
│   │   ├── SuccessMessage/
│   │   ├── Loading/
│   │   └── index.ts
│   └── ...            # 기존 컴포넌트
└── ...
```

## 🎨 코딩 규칙 준수

### ✅ 준수한 규칙들
1. ✅ 백엔드 코드 없음 - 순수 프론트엔드만 개발
2. ✅ Mock 데이터만 사용
3. ✅ 타입 안정성 - any 제거, 강타입 적용
4. ✅ 컴포넌트 분리 - 50줄 이하 권장
5. ✅ 명확한 변수명
6. ✅ Early Return 패턴
7. ✅ 상수 관리
8. ✅ 에러 처리
9. ✅ 성능 최적화 (memo, useMemo, useCallback)

## 🚀 사용 방법

### Import 예시

```typescript
// 타입 import
import type { University, Student, DepartmentResult } from '@/types';

// 상수 import
import { PROBABILITY_THRESHOLDS, MESSAGES } from '@/constants';

// 훅 import
import { useLocalStorage, useAuth } from '@/hooks';

// 공통 컴포넌트 import
import { ProbabilityBar, ErrorMessage, Loading } from '@/components/common';

// 유틸 import
import { formatPercentage, validateScores } from '@/utils';
```

### 컴포넌트 작성 예시

```typescript
import { memo } from 'react';
import type { Department } from '@/types';
import { ProbabilityBar } from '@/components/common';

interface Props {
  department: Department;
}

export const MyComponent = memo(({ department }: Props) => {
  return (
    <div>
      <h3>{department.name}</h3>
      <ProbabilityBar probability={department.probability} />
    </div>
  );
});

MyComponent.displayName = 'MyComponent';
```

## 📝 다음 단계 권장사항

1. **더 많은 대학 데이터 추가**
   - 현재 2개 → 54개로 확장
   - `src/data/universities.ts` 업데이트

2. **기존 컴포넌트 리팩토링**
   - ScoreInputForm 훅 적용
   - UniversityAnalysisPage 컴포넌트 분리
   - 공통 컴포넌트 사용

3. **테스트 추가**
   - 유틸 함수 테스트
   - 커스텀 훅 테스트
   - 컴포넌트 테스트

4. **문서화**
   - JSDoc 주석 추가
   - Storybook 설정

## 🔧 개발 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## ⚠️ 주의사항

1. **절대 백엔드 코드를 작성하지 마세요**
2. `any` 타입 사용 금지
3. 컴포넌트는 50줄 이하로 유지
4. 상수는 `constants/index.ts`에서 관리
5. 복잡한 로직은 커스텀 훅으로 분리

## 📚 참고

- `.cursorrules` 파일에 상세한 개발 규칙 명시
- React 18+ 기능 적극 활용
- TypeScript strict 모드 사용

