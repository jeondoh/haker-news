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
  - 뉴스 검색기능
  ----
  - recoil 사용한 라이트 & 다크모드 상태관리
  
![다크모드 1](https://user-images.githubusercontent.com/41669026/158421413-d9931a23-8456-47f8-af2d-32b4b3149fe4.PNG)

Provider에 테마를 지정하여 컴포넌트별 styled-components에서 동적으로 모드별 색상을 지정할 수 있게 하였습니다.

![다크모드 2](https://user-images.githubusercontent.com/41669026/158421416-4971855e-1ac1-44e1-91b1-1a7deee9e3aa.PNG)

로컬 스토리지를 활용하여 사용자가 라이트/다크 모드 지정 후 브라우저 재시작시 유지되게 하였습니다.

  ----
  - react-query를 사용해 fetch된 데이터 캐싱, refetching 대기시간 관리

![react-query key 관리](https://user-images.githubusercontent.com/41669026/158422617-81e66ec2-ca96-4ee2-90b7-40e94c7d532d.PNG)

react-query 설정에 필요한 key들을 지정하거나 캐싱된 데이터를 꺼내올때 함수를 사용하여 효율적으로 관리하였습니다.

![react-query](https://user-images.githubusercontent.com/41669026/158422622-50a84307-6893-4e66-8ad8-10b03b6344c6.PNG)

개발환경일때 reactquerydevtools를 활용하여 fetch하여 캐싱된 데이터를 확일 할 수 있습니다.

  ----
  - 카테고리별 데이터 무한 스크롤 기능

![무한스크롤](https://user-images.githubusercontent.com/41669026/158423465-79a16bed-ebd6-4797-abca-7a496877c219.PNG)

react-intersection-observer와 함께 사용해 많은 데이터를 한꺼번에 가져오지 않고 페이징화 하여 관리했습니다.

  ----
  - 컴포넌트 재귀적 사용, 댓글&대댓글 구현

![댓글 재귀1](https://user-images.githubusercontent.com/41669026/158423856-3743b956-98e0-4400-9dad-70da3d71e5da.PNG)
![댓글 재귀2](https://user-images.githubusercontent.com/41669026/158423863-883f6091-f113-49ff-9b6d-e8cd1a3aaa95.PNG)

Comment.tsx 댓글 컴포넌트와 Comments.tsx 대댓글 컴포넌트를 재귀적으로 사용하여 댓글/대댓글 기능을 구현하였습니다.

  ----
