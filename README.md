# project-pocketmonDex

> 이 프로젝트는 스파르타의 내일배움캠프를 통해 개인과제로 제작되었습니다.

## ✨ 프로젝트 소개
- 작업기간 : 2025/02/03 ~ 2025/02/10 
- React vite를 사용하여 프로젝트를 생성했습니다.
- StyledComponent 와 react-router-dom, 그리고 redux toolkit 패키지를 사용했습니다.
- 컴포넌트를 통해 포켓몬을 선택하고 관리하며 기본 CRUD기능을 구현했습니다. 
- React의 상태관리와 이벤트핸들링을 활용하여, 포켓몬 정보를 다루는 작은 애플리케이션을 완성했습니다. 
- git branch전략을 사용하여 prop-drilling/context/RTK 세가지 상태관리 방식을 적용했습니다. 

## 🖥️ 사이트 소개
- 배포사이트 : [포켓몬 도감]()
![Image](https://github.com/user-attachments/assets/2c1bff24-0277-43a9-b5e5-b3cf1ccf4d59)

## 🛠️ 주요기능 및 구조 
- 반응형 레이아웃
- 중복선택, 선택수 제한 알림
- 포켓몬 상세페이지 내에서 주변 포켓몬으로 이동
- 포켓몬 상세페이지 내에서 추가, 삭제, 조회

### 폴더구조
```
📁 project-pocketmonDex
├─ LICENSE
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ doctor_oh.jpg
│  │  ├─ doctor_oh.webp
│  │  ├─ pokeball.png
│  │  ├─ pokemon-logo.png
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Dashboard.jsx
│  │  ├─ InsertPokemonData.jsx
│  │  ├─ MyPokemon.jsx
│  │  ├─ PokemonCard.jsx
│  │  └─ PokemonList.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Details.jsx
│  │  ├─ Dex.jsx
│  │  └─ Home.jsx
│  ├─ shared
│  │  └─ Router.jsx
│  └─ style
│     ├─ GlobalStyles.jsx
│     ├─ StButton.jsx
│     ├─ StContainer.jsx
│     └─ font
├─ supabaseClient.js
├─ vite.config.js
└─ yarn.lock

```
## 🔥 트러블 슈팅
- [[트러블슈팅] 포켓몬 데이터를 supabase에 넣어서 사용해보자!!](https://mangoman-e-ya.tistory.com/62)


## 🏷 TechStack
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 