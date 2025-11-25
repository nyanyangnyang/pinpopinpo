# 🎯 pinpoint - 대학 합격 예측 분석 사이트

> 전문가 그 이상의 전문가 집단, pinpoint

대학 수능 성적 기반 합격 확률 예측 서비스입니다. 54개 주요 대학의 403개 학과 데이터를 분석하여 정밀한 합격 확률을 제공합니다.

## ✨ 주요 기능

- 📝 **성적 입력** - 수능 성적 (국어, 수학, 영어, 탐구) 입력 및 저장
- 🎓 **대학 선택** - 54개 주요 대학 중 선택
- 📊 **합격 확률 분석** - 학과별 합격 확률 정규분포 모델 계산
- 🤖 **AI 원서 조합** - 최적의 지원 전략 제공
- 💰 **가격 안내** - 서비스 요금제

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: Radix UI + Tailwind CSS
- **Icons**: Lucide React
- **State**: React Hooks + localStorage
- **Data**: Mock 데이터 (프론트엔드 전용)

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build
```

## 📁 프로젝트 구조

```
src/
├── types/              # TypeScript 타입 정의
├── constants/          # 상수 관리
├── hooks/              # 커스텀 훅
├── utils/              # 유틸리티 함수
├── components/
│   ├── common/         # 재사용 가능한 공통 컴포넌트
│   └── ...            # 페이지별 컴포넌트
├── data/               # Mock 데이터
└── ...
```

## 🎨 코드 품질

- ✅ TypeScript strict 모드
- ✅ any 타입 사용 금지
- ✅ 컴포넌트 50줄 이하 권장
- ✅ 커스텀 훅으로 로직 분리
- ✅ 상수 중앙 관리
- ✅ ErrorBoundary 적용
- ✅ React.memo 성능 최적화

자세한 개발 가이드는 [DEVELOPMENT.md](./DEVELOPMENT.md)를 참고하세요.

## 📝 개발 규칙

이 프로젝트는 **프론트엔드 전용**입니다. 백엔드 개발은 별도 팀에서 진행합니다.

- ❌ FastAPI, Express 등 백엔드 코드 작성 금지
- ❌ 데이터베이스 연결 금지
- ✅ Mock 데이터만 사용
- ✅ 프론트엔드 컴포넌트 개발

상세한 규칙은 `.cursorrules` 파일을 확인하세요.

## 🌟 주요 개선 사항 (최근 업데이트)

1. **타입 시스템 강화** - any 제거 및 강타입 적용
2. **상수 관리** - 매직 넘버/문자열 중앙 관리
3. **커스텀 훅** - useLocalStorage, useAuth, useScoreForm 등
4. **공통 컴포넌트** - 재사용 가능한 작은 컴포넌트 생성
5. **에러 처리** - ErrorBoundary 및 사용자 친화적 메시지
6. **성능 최적화** - memo, useMemo, useCallback 적용

## 📚 원본 디자인

Figma: https://www.figma.com/design/J7ezwcma3irljmY8u3eEsI/College-Admission-Prediction-Site

## 📄 라이선스

Private

---

**Made with ❤️ by pinpoint team**
