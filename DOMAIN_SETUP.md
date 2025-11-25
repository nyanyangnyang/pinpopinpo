# 커스텀 도메인 연결 가이드

`pinpointai.co.kr` 도메인을 Vercel에 연결하는 방법입니다.

---

## 📋 사전 준비

✅ 도메인 구매 완료: `pinpointai.co.kr`
✅ Vercel 배포 완료
✅ 도메인 관리 페이지 접근 권한

---

## 🚀 도메인 연결 절차

### 1단계: Vercel에서 도메인 추가

#### 1. Vercel 대시보드 접속
```
https://vercel.com/dashboard
```

#### 2. 프로젝트 선택
- **pinpoint** 프로젝트 클릭

#### 3. Settings → Domains
1. **Settings** 탭 클릭
2. **Domains** 메뉴 클릭
3. 도메인 입력란에 입력:
   ```
   pinpointai.co.kr
   ```
4. **Add** 버튼 클릭

---

### 2단계: DNS 설정 확인

Vercel이 제공하는 DNS 레코드를 확인하세요.

#### A. 방법 1: A 레코드 (권장) ✅

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto 또는 3600
```

```
Type: A
Name: www
Value: 76.76.21.21
TTL: Auto 또는 3600
```

#### B. 방법 2: CNAME 레코드

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto 또는 3600
```

---

### 3단계: 도메인 등록업체에서 DNS 설정

#### 한국 주요 도메인 등록업체별 가이드

---

### 🔹 가비아 (Gabia)

1. **가비아 로그인**
   ```
   https://www.gabia.com
   ```

2. **My가비아 → 서비스 관리**
   - 도메인 → DNS 정보 → DNS 설정

3. **레코드 추가**
   
   **A 레코드 (Root 도메인)**
   ```
   호스트: @
   타입: A
   값/위치: 76.76.21.21
   TTL: 3600
   ```

   **A 레코드 (www)**
   ```
   호스트: www
   타입: A
   값/위치: 76.76.21.21
   TTL: 3600
   ```

4. **저장** 클릭

---

### 🔹 후이즈 (Whois)

1. **후이즈 로그인**
   ```
   https://www.whois.co.kr
   ```

2. **도메인 관리 → DNS 관리**

3. **레코드 추가**
   ```
   타입: A
   호스트명: @
   IP 주소: 76.76.21.21
   ```
   
   ```
   타입: A
   호스트명: www
   IP 주소: 76.76.21.21
   ```

4. **적용** 클릭

---

### 🔹 카페24

1. **카페24 로그인**
   ```
   https://www.cafe24.com
   ```

2. **나의 서비스 관리 → 도메인 관리**

3. **DNS 레코드 설정**
   ```
   레코드 타입: A
   호스트: @
   값: 76.76.21.21
   ```

4. **저장**

---

### 🔹 AWS Route 53

1. **Route 53 콘솔**
   ```
   https://console.aws.amazon.com/route53
   ```

2. **Hosted zones → pinpointai.co.kr 선택**

3. **Create record**
   
   **Root 도메인**
   ```
   Record name: (비워두기)
   Record type: A
   Value: 76.76.21.21
   TTL: 300
   ```

   **www 서브도메인**
   ```
   Record name: www
   Record type: A
   Value: 76.76.21.21
   TTL: 300
   ```

4. **Create records**

---

## ⏱️ DNS 전파 대기

### 전파 시간
```
최소: 5분
일반: 1~2시간
최대: 48시간
```

### DNS 전파 확인

#### 방법 1: 온라인 도구
```
https://dnschecker.org
```
- 도메인 입력: `pinpointai.co.kr`
- A 레코드 확인: `76.76.21.21`

#### 방법 2: 명령어 (Windows PowerShell)
```bash
nslookup pinpointai.co.kr
```

예상 결과:
```
Name:    pinpointai.co.kr
Address: 76.76.21.21
```

#### 방법 3: 명령어 (dig - Git Bash)
```bash
dig pinpointai.co.kr +short
```

---

## 🔐 SSL 인증서 (자동)

### Vercel SSL
```
✅ 자동으로 Let's Encrypt SSL 인증서 발급
✅ HTTPS 자동 활성화
✅ 인증서 자동 갱신
```

### 확인 방법
1. DNS 전파 완료 후
2. Vercel 대시보드에서 도메인 상태 확인
3. **"Valid Configuration"** 표시되면 완료

### SSL 발급 시간
```
DNS 전파 후: 5~30분
```

---

## 🌐 서브도메인 추가 (선택사항)

### www 서브도메인
이미 설정 완료! ✅

### 추가 서브도메인 (예: api, admin)

#### 1. Vercel에서 추가
```
api.pinpointai.co.kr
admin.pinpointai.co.kr
```

#### 2. DNS에 CNAME 레코드 추가
```
Type: CNAME
Name: api
Value: cname.vercel-dns.com
TTL: 3600
```

---

## ✅ 확인 사항

### 1. DNS 설정 확인
```bash
nslookup pinpointai.co.kr
nslookup www.pinpointai.co.kr
```

### 2. Vercel 대시보드 확인
- Settings → Domains
- 초록색 체크 표시 확인

### 3. 브라우저 접속
```
https://pinpointai.co.kr
https://www.pinpointai.co.kr
```

### 4. HTTPS 확인
- 자물쇠 아이콘 확인
- 인증서 유효성 확인

---

## 🔄 리다이렉션 설정

### www → Root (또는 반대)

#### Vercel에서 자동 처리
```
pinpointai.co.kr ← 메인
www.pinpointai.co.kr → 리다이렉트
```

또는

```
www.pinpointai.co.kr ← 메인
pinpointai.co.kr → 리다이렉트
```

#### 설정 방법
Vercel 대시보드 → Domains → **"Redirect to"** 선택

---

## 🔧 문제 해결

### DNS가 전파되지 않을 때

#### 1. TTL 확인
- TTL이 너무 높으면 시간이 오래 걸림
- 권장: 300~3600초

#### 2. 기존 레코드 삭제
- 기존 A, AAAA, CNAME 레코드 확인
- 충돌하는 레코드 삭제

#### 3. 네임서버 확인
```bash
nslookup -type=NS pinpointai.co.kr
```

도메인 등록업체의 네임서버를 사용하는지 확인

---

### SSL 인증서 발급 실패 시

#### 1. DNS 전파 완료 확인
```bash
nslookup pinpointai.co.kr
```

#### 2. Vercel 도메인 재추가
- 도메인 삭제 후 다시 추가

#### 3. CAA 레코드 확인
일부 도메인에는 CAA 레코드가 필요할 수 있습니다:
```
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
```

---

### "Invalid Configuration" 표시

#### 원인
- DNS 레코드가 올바르지 않음
- DNS 전파 미완료

#### 해결
1. DNS 레코드 재확인
2. 1시간 대기 후 재확인
3. Vercel 지원팀 문의

---

## 📝 index.html 업데이트

도메인 연결 후 메타 태그도 업데이트해야 합니다!

### 변경 전
```html
<link rel="canonical" href="https://pinpoint.vercel.app/" />
<meta property="og:url" content="https://pinpoint.vercel.app/" />
```

### 변경 후
```html
<link rel="canonical" href="https://pinpointai.co.kr/" />
<meta property="og:url" content="https://pinpointai.co.kr/" />
<meta property="og:image" content="https://pinpointai.co.kr/og-image.png" />
```

### sitemap.xml 업데이트

```xml
<loc>https://pinpointai.co.kr/</loc>
```

### robots.txt 업데이트

```
Sitemap: https://pinpointai.co.kr/sitemap.xml
```

---

## 🎯 네이버 서치 어드바이저 업데이트

도메인 변경 시:

### 1. 기존 사이트 유지
```
pinpoint.vercel.app (임시)
```

### 2. 새 사이트 추가
```
pinpointai.co.kr (메인)
```

### 3. 소유권 인증
새 도메인으로 다시 인증

### 4. 사이트맵 재제출
```
https://pinpointai.co.kr/sitemap.xml
```

---

## 📊 최종 체크리스트

### Vercel
- [ ] 도메인 추가 완료
- [ ] Valid Configuration 표시
- [ ] SSL 인증서 발급 완료

### DNS
- [ ] A 레코드 설정 (@)
- [ ] A 레코드 설정 (www)
- [ ] DNS 전파 확인

### 웹사이트
- [ ] https://pinpointai.co.kr 접속
- [ ] https://www.pinpointai.co.kr 접속
- [ ] HTTPS 자물쇠 표시
- [ ] 모든 기능 정상 작동

### SEO
- [ ] index.html 메타 태그 업데이트
- [ ] sitemap.xml URL 업데이트
- [ ] robots.txt URL 업데이트
- [ ] 네이버 서치 어드바이저 재등록

---

## 🚀 배포 후 타임라인

```
0분:    DNS 레코드 설정
30분:   DNS 전파 시작
1시간:  대부분 지역에서 접속 가능
2시간:  SSL 인증서 발급 완료
6시간:  전 세계 DNS 전파 완료
24시간: 완전히 안정화
```

---

## 🔗 유용한 링크

- **Vercel 도메인 가이드**: https://vercel.com/docs/concepts/projects/domains
- **DNS 전파 확인**: https://dnschecker.org
- **SSL 상태 확인**: https://www.ssllabs.com/ssltest/

---

## 📞 지원

### 도메인 등록업체 고객센터
- 가비아: 1544-4755
- 후이즈: 1670-1400
- 카페24: 1544-0360

### Vercel 지원
- 이메일: support@vercel.com
- 문서: https://vercel.com/support

---

**도메인 연결 후 꼭 알려주세요!** 🎉

```
https://pinpointai.co.kr
```

