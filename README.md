## Mini Project - Haker-News

<img src="https://img.shields.io/badge/-React 17.0.2-61DAFB?style=plastic&logo=React&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/-typescript 4.5.5-3178C6?style=plastic&logo=Typescript&logoColor=white"/>

### 동작 페이지
- https://jeondoh.github.io/haker-news/

### UI / figma 화면
- https://www.figma.com/file/B2sMWfqwRYySs1QBbORfG0/Haker-news---%EB%AF%B8%EB%8B%88%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Copy?node-id=168%3A2569

### Haker-News API 주소
- https://github.com/HackerNews/API

### npm (CRA with typescript)
- recoil : 0.5.2
- axios : 0.25.0
- react-query : 3.34.12
- react-hook-form : 7.26.1
- react-router-dom : 6.2.1
- styled-components : 5.3.3
- framer-motion : 6.2.3
- material-ui/icons: 4.11.2
- react-intersection-observer: 8.33.1

### 프로젝트 설명
### 1. 폴더구조

![폴더구조](https://user-images.githubusercontent.com/41669026/158403128-f298702f-0654-43bf-afc9-c34f10186ef7.PNG)
  - components
    - 재사용 컴포넌트 및 router의 하위 컴포넌트 모음
  - hooks
    - 커스텀 훅 함수 모음
  - router
    - react-router-dom 이용한 프로젝트 라우팅 관리
  - styles
    - styled-components를 이용한 컴포넌트 모음
  - theme
    - 다크모드 이용을 위하여 DefaultTheme 오버라이딩 후 재구성
  - utils
    - api fetch용 함수, 공통 함수 모음
    
### 2. 개발 목록
  - typescript를 사용해 데이터 type 지정, 오류 최소화 
  - recoil 사용한 라이트 & 다크모드 상태관리
  - react-query를 사용해 fetch된 데이터 캐싱, refetching 대기시간 관리
  - 카테고리별 데이터 무한 스크롤 기능
  - 컴포넌트 재귀적 사용, 댓글&대댓글 구현
  - 뉴스 검색기능
