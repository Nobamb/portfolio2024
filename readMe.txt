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

### 📌 Project 4. 정부법무공단 공식 웹사이트 리뉴얼
관공서 특유의 복잡한 정보 구조(Information Architecture)를 직관적으로 재정리하고, 4개 디바이스 환경에 대응하도록 설계한 고밀도 반응형 퍼블리싱 프로젝트

- **참고 링크**: https://www.kgls.or.kr/
- **작업 기간**: 40시간 (기획 및 분석, 퍼블리싱 100% 개인 작업)
- **핵심 성과**: 외부 시안 없이 기존 사이트 구조를 분석해 레이아웃을 코드로 역설계(Component Scan)했으며, Desktop / Laptop / Tablet / Mobile 전체 마크다운 구조 최적화 완수.

#### 🛠️ 사용 기술
- **Publishing**: HTML5, CSS3 (Advanced Media Query, Keyframes Animation)
- **Libraries & Script**: JavaScript (ES6+), jQuery, FontAwesome API
- **Keywords**: `setInterval`, `Switch-case`, `Scroll Animation`, `Form Search Action`

#### 🌟 핵심 구현 및 기술적 접근
* **4단 레이아웃 브레이크포인트 반응형 최적화**: 
  - 미디어 쿼리를 사용해 `1440px` 이상(데스크톱 원본 비율 유지 보존 영역), `769px~1280px`(랩탑), `481px~768px`(태블릿), `480px 이하`(모바일)까지 세분화된 브레이크포인트를 설정하여 미려하고 끊김 없는 화면 그리드 전환 처리.
* **제이쿼리 기반 동적 UI 콤팩트화**:
  - **헤더 GNB**: 마우스 호버 시 엘리먼트의 가로 폭(`width()`) 및 위치 계산 로직을 스크립트로 처리하여 1뎁스 메뉴 하단을 매끄럽게 따라다니는 '동적 언더라인 바' 구현. 모바일 환경에 맞는 Full-screen 햄버거 메뉴 및 아코디언 서브메니 동시 구축.
  - **타임 프로그레스 슬라이더**: `setInterval`을 복합적으로 조작하여 슬라이드가 전환되는 3000ms 동안 하단 진행 바(`progress_now`)의 가로 넓이가 실시간 충전되는 직관적 타임라인 인디케이터 구현. 인터럽트 에러 방지를 위해 Play/Pause 예외 처리 및 메모리 누수 원인 차단(`clearInterval`).
* **수직 무한 루프 애니메이션 스크립트**:
  - 키프레임(`@keyframes`)과 제이쿼리 이벤트 핸들러를 결합하여 다량의 이미지 배너가 위아래로 끊임없이 슬라이딩되는 무한 재생식 갤러리 연출 및 마우스 롤오버 시 일시정지(`paused`) 기능 부여로 가독성 및 UI 제어 편의성 향상.
* **검색 엔진 API 연동 및 DOM 연출**:
  - 메인 유틸리티 영역에 구글 맞춤 설정 검색 스키마(`action="https://www.google.com/search"`, `name="q"`) 유효 범위를 Form 태그로 다이렉트 바인딩하여 백엔드 인프라 없이도 동작하는 실용적인 검색 컴포넌트 탑재.
  - 윈도우 스크롤(`scroll()`) 위치 영역 좌표값(`offset().top`)과 브라우저 중심점 연산식을 정밀 가치 대입하여 해당 구역 진입 시 순차적으로 도장 찍히듯 등장하는 타이밍 체인형 트리거 애니메이션 구현.


### ⚙️ Core Skills Summary
* **Design & Prototyping**: Figma, Photoshop 기반의 와이어프레임 설계 및 컴포넌트 시스템 구축 가능.
* **Frontend Foundations**: HTML5/CSS3 지식을 바탕으로 시맨틱 마크업 및 웹 표준, 미디어 쿼리를 활용한 완벽한 반응형 레이아웃 구현.
* **Scripting & Logic**: JavaScript/jQuery를 활용한 풍부한 웹 인터랙션 연출 및 가용한 DOM 데이터 조작, 유효성 검사 로직 설계 가능.
