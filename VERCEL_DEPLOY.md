# Vercel 배포 가이드

pinpoint를 Vercel에 배포하는 방법입니다.

---

## 🚀 배포 방법 (3가지)

### 방법 1: Vercel CLI (추천) ⚡

가장 빠르고 간단합니다!

#### 1. Vercel CLI 설치
```bash
npm install -g vercel
```

#### 2. Vercel 로그인
```bash
vercel login
```

#### 3. 배포 실행
```bash
cd "C:\Users\Administrator\Downloads\College Admission Prediction Site (1)"
vercel
```

#### 4. 질문에 답하기
```
? Set up and deploy? Y
? Which scope? (본인 계정 선택)
? Link to existing project? N
? What's your project's name? pinpoint
? In which directory is your code located? ./
? Want to modify these settings? N
```

#### 5. 배포 완료! 🎉
```
✅ Production: https://pinpoint.vercel.app
```

---

### 방법 2: Vercel 웹사이트 (GUI)

#### 1. Vercel 가입
```
https://vercel.com
```
GitHub 계정으로 로그인

#### 2. 새 프로젝트 생성
1. **"New Project"** 클릭
2. GitHub 저장소 선택: `nyanyangnyang/pinpopinpo`
3. **"Import"** 클릭

#### 3. 프로젝트 설정
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

#### 4. 환경변수 설정
```
VITE_USE_MOCK=true
VITE_ENV=production
```

#### 5. **"Deploy"** 클릭

#### 6. 배포 완료! 🎉
1~2분 후 완료 (자동)

---

### 방법 3: GitHub Actions (자동화)

이미 GitHub에 푸시했으므로, Vercel과 연동하면 **자동 배포**됩니다!

---

## ⚙️ 환경변수 설정

Vercel 대시보드에서:

1. **Settings** → **Environment Variables**
2. 다음 변수 추가:

```env
VITE_USE_MOCK=true
VITE_API_BASE_URL=https://api.pinpoint.com/api
VITE_ENV=production
VITE_APP_NAME=pinpoint
VITE_APP_VERSION=1.0.0
```

---

## 🔄 자동 배포 설정

### GitHub 푸시 시 자동 배포

Vercel과 GitHub가 연동되면:
```bash
git push origin main
```
→ **자동으로 Vercel에 배포됩니다!**

### 브랜치별 배포
- `main` → Production
- `dev` → Preview

---

## 🌐 도메인 설정

### Vercel 제공 도메인 (무료)
```
https://pinpoint.vercel.app
```

### 커스텀 도메인 추가 (선택사항)
1. **Settings** → **Domains**
2. 도메인 입력: `pinpoint.com`
3. DNS 설정 (제공되는 가이드 따라하기)

---

## 📊 배포 확인

### 1. 빌드 로그 확인
Vercel 대시보드 → **Deployments** → 최신 배포 클릭

### 2. 사이트 접속
```
https://pinpoint.vercel.app
```

### 3. Mock 모드 확인
- 대학 선택 → 분석 결과 확인
- Console에 `[MOCK]` 로그 있는지 확인

---

## 🔧 문제 해결

### 빌드 실패 시

#### 1. 로컬에서 빌드 테스트
```bash
npm run build
```

#### 2. node_modules 재설치
```bash
rm -rf node_modules
npm install
```

#### 3. 캐시 클리어
Vercel 대시보드 → **Settings** → **Clear Cache**

---

### 환경변수 오류 시

#### 1. .env 파일 확인
```bash
cat .env.production
```

#### 2. Vercel 환경변수 재설정
대시보드에서 다시 입력

#### 3. 재배포
```bash
vercel --prod
```

---

## 🎯 성능 최적화

### 1. 이미지 최적화
Vercel이 자동으로 최적화합니다!

### 2. CDN 활용
전 세계 Edge Network로 빠른 로딩

### 3. 자동 SSL
HTTPS 자동 적용 ✅

---

## 📈 Analytics 설정 (선택사항)

### Vercel Analytics
1. **Settings** → **Analytics**
2. **Enable** 클릭
3. 방문자 통계 확인 가능

---

## 🔄 백엔드 연동 시

### 환경변수만 변경
```env
# Before (Mock)
VITE_USE_MOCK=true

# After (실제 API)
VITE_USE_MOCK=false
VITE_API_BASE_URL=https://api.pinpoint.com/api
```

### Vercel에서 재배포
자동으로 새 설정 적용! ✨

---

## 📋 체크리스트

배포 전 확인사항:

- [ ] 로컬 빌드 성공 (`npm run build`)
- [ ] .gitignore에 .env 포함
- [ ] GitHub에 푸시 완료
- [ ] Vercel 계정 생성
- [ ] 환경변수 설정 완료
- [ ] 도메인 확인
- [ ] SEO 메타 태그 확인
- [ ] sitemap.xml 존재
- [ ] robots.txt 존재

---

## 🎉 배포 완료 후

### 1. 사이트 테스트
- [ ] 메인 페이지 로딩
- [ ] 성적 입력 동작
- [ ] 대학 선택 동작
- [ ] 분석 결과 표시
- [ ] 모바일 반응형 확인

### 2. SEO 설정
- [ ] 네이버 서치 어드바이저 등록
- [ ] 구글 서치 콘솔 등록 (선택)
- [ ] 사이트맵 제출

### 3. 모니터링
- [ ] Vercel Analytics 확인
- [ ] 에러 로그 확인
- [ ] 성능 모니터링

---

## 🔗 유용한 링크

- **Vercel 대시보드**: https://vercel.com/dashboard
- **Vercel 문서**: https://vercel.com/docs
- **Vercel CLI 문서**: https://vercel.com/docs/cli

---

**배포 후 링크를 공유해주세요!** 🚀

```
https://pinpoint.vercel.app
```

