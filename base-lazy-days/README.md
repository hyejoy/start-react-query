# 🧖 Lazy Days Spa

React Query를 활용한 데이 스파 예약 관리 앱 실습 프로젝트

> Udemy "React Query / TanStack Query: React Server State Management" 강의 실습

---

## 🛠 Tech Stack

**Client**

- React + TypeScript
- TanStack Query (React Query) — 서버 상태 관리
- Axios — HTTP 클라이언트
- Chakra UI — 스타일링
- Vite — 빌드 도구

**Server**

- Node.js + Express
- JWT — 인증

---

## 📁 프로젝트 구조

```
base-lazy-days/
├── client/                  # 프론트엔드
│   └── src/
│       ├── auth/            # 인증 (Context, localStorage)
│       ├── axiosInstance/   # Axios 설정 + JWT 헤더
│       ├── react-query/     # QueryClient 설정
│       ├── components/
│       │   ├── app/         # App, Navbar, Loading
│       │   ├── appointments/ # 예약 캘린더
│       │   ├── treatments/  # 시술 목록
│       │   ├── staff/       # 직원 목록
│       │   ├── user/        # 유저 프로필
│       │   └── common/      # 공통 컴포넌트
│       ├── mocks/           # MSW 목 데이터 (테스트용)
│       └── test-utils/      # 테스트 유틸
├── server/                  # 백엔드
│   ├── src/
│   │   ├── route-methods/   # API 라우트
│   │   ├── db-func/         # DB 유틸
│   │   └── middlewares/     # 미들웨어
│   └── db/                  # JSON DB
└── shared/                  # 공유 타입 정의
```

---

## 🚀 시작하기

### Server

```bash
cd server
npm install

# .env 파일 생성
echo "EXPRESS_SECRET=your_secret_here" > .env

npm start
```

### Client

```bash
cd client
npm install
npm run dev
```

---

## 🔑 테스트 계정

```
ID: test
PW: test
```

---

## 📚 학습 내용

- `useQuery` 커스텀 훅으로 추상화
- 로딩/에러 처리 중앙화
- `useMutation` — 예약/취소/유저 수정
- 쿼리 캐시 무효화 (`invalidateQueries`)
- 낙관적 업데이트 (Optimistic Update)
- Dependent Query (조건부 쿼리)
- React Query 테스트

---

## ⚠️ 주의사항

- 반응형 미지원
- 예약 수정 인증 미적용 (학습용)
- 관리자 페이지 없음
