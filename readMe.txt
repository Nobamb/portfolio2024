## 💻 Web Publishing & Frontend Portfolios

### 📌 Project 1. 무궁화전시박물관 리뉴얼
공공/교육 기관 웹사이트의 접근성과 정보 전달력을 개선한 반응형 리뉴얼 프로젝트

- **참고 링크**: https://mugunghwaedu.modoo.at/
- **작업 기간**: 80시간 (기획, 디자인, 퍼블리싱 100% 개인 작업)
- **핵심 성과**: 데스크톱·태블릿·모바일 3개 디바이스 반응형 최적화, 웹 접근성 지침 준수

#### 🛠️ 사용 기술
- **Publishing**: HTML5, CSS3 (Media Query)
- **Libraries & Script**: JavaScript (ES6+), jQuery, jQuery UI (Datepicker)
- **Keywords**: `setInterval`, `Switch-case`, `Event Trigger`, `Date Object`

#### 🌟 핵심 구현 및 기술적 접근
* **웹 접근성(Web Accessibility) 강화**: 유틸리티 영역에 텍스트 드래그 기반 '글자 확대' 및 'TTS(글씨 읽어주기)' 기능을 자바스크립트로 직접 구현하여 취약계층 접근성 향상.
* **유효성 검증(Validation) 로직 구현**: 예약 시스템에서 `Date` 객체와 `hasClass`를 활용해 과거 날짜 선택 제한 및 알림창 예외 처리 구현. 예약 인원수 입력 폼에 정규식/유효성 검사 매커니즘을 적용하여 범위 초과(0 이하, 11 이상) 및 소수점, 문자 입력 원천 차단.
* **인터랙티브 UI 및 동적 연출**:
  - 무한 루프 형태의 홍보 갤러리 슬라이더 구현 (Hover 시 일시정지, 클릭 시 주변 요소 블러 및 클로즈업 레이어 팝업).
  - Intersection Observer 개념을 접용한 스크롤 연동형 이미지 등장 연출(시설안내 영역).

---

### 📌 Project 2. 포켓몬스터 공식 웹사이트 리뉴얼
대규모 컨텐츠와 이커머스(장바구니) 요소를 결합한 고도화된 인터랙티브 퍼블리싱 프로젝트

- **참고 링크**: https://pokemonkorea.co.kr/
- **작업 기간**: 80시간 (디자인, 퍼블리싱 100% 개인 작업)
- **핵심 성과**: 다량의 이미지 에셋 최적화, 복합 상태 관리(장바구니 팝업) 구현

#### 🛠️ 사용 기술
- **Publishing**: HTML5, CSS3 (Animation, Transform)
- **Libraries & Script**: JavaScript (ES6+), jQuery, Naver Login API
- **Keywords**: `Array.prototype.reduce()`, `append/remove`, `split`, `Regex.test()`

#### 🌟 핵심 구현 및 기술적 접근
* **DOM 조작 기반 상태 관리 (장바구니 시스템)**:
  - 상품 및 상세 페이지에서 장바구니 추가 시, 헤더 내 카운트 배지가 실시간 복합 연동되도록 구현.
  - `reduce()` 배열 메서드를 활용해 장바구니 내부의 상품별 수량, 가격 총계를 실시간으로 계산하고 반영하는 동적 팝업 UI 구현.
  - 담긴 아이템 개수(0, 1~5, 6 이상 등)에 따라 장바구니 아이콘 이미지 동적 변경 처리.
* **고급 스크롤 애니메이션 및 시각 효과**:
  - 스크롤 플로우에 따라 중앙의 대형 로고가 네비게이션 바로 축소·흡수되는 상단 헤더 연출.
  - 연혁(Timeline) 페이지에서 스크롤 값에 동기화되어 세대별 포켓몬이 등장하고 대화창이 타이핑되듯 좌우로 열리는 인터랙티브 모션 구현.
* **사용자 경험(UX) 극대화**:
  - 특정 영역 진입 시 커스텀 마우스 포인터(몬스터볼) 전환 효과.
  - 로그인 상태값에 따라 리뷰 작성 폼이 활성화/비활성화되는 조건부 렌더링 로직 모킹(Mocking) 구현 및 네이버 로그인 API 연동.

---

### 📌 Project 3. 아티스트 '한요한' 브랜드 사이트 (신규 제작)
음원 재생 스트리밍 아키텍처와 시간/이벤트 동기화 기능을 녹여낸 비주얼 퍼블리싱 프로젝트

- **작업 기간**: 80시간 (기획, 컨셉 디자인, 퍼블리싱 100% 개인 작업)
- **핵심 성과**: 복수 페이지 간 음원 상태 동기화, 사용자 반응형 이스터에그 스크립트 구현

#### 🛠️ 사용 기술
- **Publishing**: HTML5, CSS3 (Keyframes, 3D Transform)
- **Libraries & Script**: JavaScript (ES6+), jQuery
- **Keywords**: `HTML5 Audio API (play/pause)`, `Vanilla Foreach`, `Mouse Coordinate Tracking`

#### 🌟 핵심 구현 및 기술적 접근
* **전역 상태 동기화 (오디오 스트리밍 아키텍처)**: Intro ➡️ 메인 ➡️ 앨범 등 서로 다른 섹션(Page 1, Page 4)에 존재하는 오디오 플레이어 간의 싱크를 맞추어, 한쪽에서 재생 시 반대편 소스가 정지하고 상태 바(Progress Bar)가 실시간 업데이트되는 오디오 스크립트 설계.
* **실시간 데이터 기반 환경 변화 & 이스터에그**:
  - `Date` 객체로 사용자의 접속 시간을 체크하여 6시간 간격으로 웹사이트 전체 톤앤매너(배경색 브라이트니스)가 3단계로 자동 전환되는 타임 리액티브 시스템 구현.
  - 특정 단축키 입력(`Ctrl+C` ➡️ `Ctrl+V`, `ESC`)이나 특정 시간 정각에 숨겨진 히든 트랙이 자동 재생되는 이벤트 리스너 구현.
* **화려한 인터랙티브 모션 빌드**:
  - **Intro**: 가속도 계기판 카운팅 애니메이션 및 시퀀스 자막(Uno~Cuatro) 연동, 완료 시 화면이 조각나며 시야 너머로 사라지는 3D Depth 연출.
  - **Page 5 (Gallery)**: 마우스 좌표(`clientX`, `clientY`)를 실시간 추적하여 사용자의 마우스 움직임 각도에 따라 이미지가 입체적으로 기울어지는(Tilt Effect) 반응형 비주얼 구현.

---

### ⚙️ Core Skills Summary
* **Design & Prototyping**: Figma, Photoshop 기반의 와이어프레임 설계 및 컴포넌트 시스템 구축 가능.
* **Frontend Foundations**: HTML5/CSS3 지식을 바탕으로 시맨틱 마크업 및 웹 표준, 미디어 쿼리를 활용한 완벽한 반응형 레이아웃 구현.
* **Scripting & Logic**: JavaScript/jQuery를 활용한 풍부한 웹 인터랙션 연출 및 가용한 DOM 데이터 조작, 유효성 검사 로직 설계 가능.
