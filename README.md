# 피츠버그 3D 재현 — 한글화 (Pittsburgh 3D Recreation · KR)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-sigco3111.github.io-blue?style=for-the-badge)](https://sigco3111.github.io/Pittsburgh-3D-Recreation/)
[![GitHub](https://img.shields.io/badge/💻_GitHub-sigco3111/Pittsburgh--3D--Recreation-181717?style=for-the-badge&logo=github)](https://github.com/sigco3111/Pittsburgh-3D-Recreation)
[![원본](https://img.shields.io/badge/📦_원본-aditano/Pittsburgh--3D--Recreation-0E7FC0?style=for-the-badge)](https://github.com/aditano/Pittsburgh-3D-Recreation)

> **한 줄 요약** · OpenStreetMap 건물 · 도로 · 공원 데이터로 만든 피츠버그 시의 3D 매켓 — 3강(Allegheny/Monongahela/Ohio) 합류점, 18개 다리, 주요 랜드마크 22개, 다운타운 ~7,500개 + 외곽 ~78,000개 건물을 Three.js로 실시간 렌더링. UI/라벨이 한국어로 표시됩니다.

Daniel Farinax의 [샌프란시스코 Three.js city loop](https://x.com/daniel_farinax/status/2088353519225237799)에서 영감을 받아 피츠버그로 이식·확장한 프로젝트의 **한국어 포크**입니다. 다크 아키텍처 매켓(dark architectural-maquette) 비주얼 그대로, 좌표계·데이터 구조는 OSM Overpass 추출 + 수작업 강·다리·랜드마크 오버레이.

---

## 📑 목차

1. [라이브 데모](#-라이브-데모)
2. [주요 특징](#-주요-특징)
3. [카메라 프리셋](#-카메라-프리셋)
4. [다리 / 인클라인 목록](#-다리--인클라인-목록)
5. [번역 표기 원칙](#-번역-표기-원칙)
6. [구동법](#-구동법)
7. [빌드와 배포](#-빌드와-배포)
8. [데이터 구조](#-데이터-구조)
9. [좌표계 / 좌표축](#-좌표계--좌표축)
10. [디렉토리 구조](#-디렉토리-구조)
11. [렌더 파이프라인](#-렌더-파이프라인)
12. [트러블슈팅](#-트러블슈팅)
13. [원작자 / Attribution](#-원작자--attribution)
14. [라이선스](#-라이선스)

---

## 🌐 라이브 데모

**[https://sigco3111.github.io/Pittsburgh-3D-Recreation/](https://sigco3111.github.io/Pittsburgh-3D-Recreation/)** — 브라우저에서 바로 열립니다.

- 기본 진입 후 좌측 하단 카메라 프리셋 패널로 시점 전환 (9종)
- 마우스 드래그: 회전 · 휠: 줌 · 우클릭: 팬
- 우측 상단 레이어 토글로 다리/랜드마크/지형/날씨 on/off
- 새로 고침해도 마지막 설정(품질·해상도·날씨)이 `localStorage`에 유지

---

## ✨ 주요 특징

### 🏙️ 도시 지오메트리
- **OSM 데이터 기반**: `buildings` 7,488개 (다운타운 디테일 모델) + `fabric` 77,621개 (배경 단순 빌딩, footprint+높이)
- **도로 네트워크**: 도로 폴리라인 + 차선별 색상 (highway/arterial/residential)
- **공원 189개**: 녹지 폴리곤, 쿼드 트리에 최적화

### 🌊 하이드로 / 지형
- **3개 강 합류**: Allegheny + Monongahela + Ohio 합류(The Point)
- **수면 표현**: 반사 + 노이즈 + 색상 그라데이션 (저녁 톤 자동 적용)
- **자연 구릉**: Mount Washington, North Side, Oakland 의 부드러운 베지어 곡면

### 🌉 다리 18개
- 실제 형상 분류별 모델링:
  - **현수(suspension)** — Fort Pitt, Fort Duquesne 등
  - **아치(arch)** — Roberto Clemente, Andy Warhol, Rachel Carson
  - **트러스(truss)** — Smithfield Street
  - **거더(girder)** — Birmingham, Liberty, Veterans 등
- 각 다리마다 라벨 텍스트 + 라이트/쉐도 동적 적용

### 🏛️ 랜드마크 라벨 (22개)
`U.S. Steel Tower`, `PPG Place`, `Cathedral of Learning`, `PNC Park`, `Acrisure Stadium` 등 — 3D 빌딩 위에 발광형 2D 라벨.

### ⛰️ 지형 / 노이즈
- Perlin 노이즈 + 친 다이어그램으로 부드러운 언덕
- 카운티 라인 / 지구 색상 자동 적용

### 🎥 카메라 프리셋 (9종)
항공뷰 · 다운타운 · 포인트 · 다리 · 경기장 · 오클랜드 · 대학교 · 마운트워싱턴 · 회전 — `OrbitControls` + `CSS2DRenderer` 라벨 동기화.

### 🌦️ 날씨 / 분위기
- **맑음**(기본) · **비** · **눈** 파티클 전환
- 블룸/포스트프로세싱은 GPU 부담을 고려해 모바일에서 자동 비활성
- 설정은 `localStorage`에 저장

### 🌐 한글 UI
- 카메라 프리셋 라벨 (한글)
- 다리 이름 (한글)
- 랜드마크 라벨 (한글 + 영문 보조)
- 주요 인클라인 2개 (Duquesne, Monongahela)
- "buildings X · live" 상태바 → "건물 X · 실시간 렌더링"

---

## 🎥 카메라 프리셋

| # | 영문 | 한글 | 위치 요약 |
|---|------|------|-----------|
| 1 | `Aerial` | 항공뷰 | 피츠버그 전체 1,200m 상공 |
| 2 | `Downtown` | 다운타운 | 다운타운 중심부 400m 상공 |
| 3 | `The Point` | 포인트 | 3강 합류점 200m |
| 4 | `Bridges` | 다리 | Fort Pitt Bridge 사선 150m |
| 5 | `Stadiums` | 경기장 | PNC Park + Acrisure Stadium |
| 6 | `Oakland` | 오클랜드 | 카네기멜런 대학교 캠퍼스 |
| 7 | `University` | 대학교 | Cathedral of Learning 등 |
| 8 | `Mount Washington` | 마운트워싱턴 | 전망대 시점 |
| 9 | `Rotate` | 회전 | 자동 회전 시점 (3초 주기) |

> **단축키**: 화살표 키(↑↓←→)로 프리셋 순환, `Space`로 회전 시작/정지.

---

## 🌉 다리 / 인클라인 목록

### 다리 (18개)

| 영문 | 한글 | 종류 |
|------|------|------|
| Roberto Clemente Bridge | 로베르토 클레멘테 다리 | 아치 |
| Andy Warhol Bridge | 앤디 워홀 다리 | 아치 |
| Rachel Carson Bridge | 레이첼 카슨 다리 | 아치 |
| Fort Pitt Bridge | 포트 피트 다리 | 현수 |
| Fort Duquesne Bridge | 포트 듀케인 다리 | 현수 |
| Smithfield Street Bridge | 스미스필드 스트리트 다리 | 트러스 |
| Liberty Bridge | 리버티 다리 | 거더 |
| Veterans Bridge | 베테랑 다리 | 거더 |
| West End Bridge | 웨스트엔드 다리 | 거더 |
| Birmingham Bridge | 버밍엄 다리 | 거더 |
| David McCullough Bridge | 데이비드 맥컬로 다리 | — |
| Andy Warhol Rail Bridge | 앤디 워홀 철교 | — |

> 전체 18개 중 일부는 배경 패브릭 처리되어 위 표에 미수록. 라이브에서 확인 가능.

### 인클라인 (2개)

| 영문 | 한글 | 위치 |
|------|------|------|
| Duquesne Incline | 듀케인 인클라인 | Mount Washington ↔ West End |
| Monongahela Incline | 모농게일라 인클라인 | Mount Washington ↔ Station Square |

> Pittsburgh 역사적 케이블카 (1877년 ~ 현재). 3D 모델은 트랙 + 두 객차로 표현.

---

## 🈶 번역 표기 원칙

| 카테고리 | 표기 | 예시 |
|---------|------|------|
| UI 버튼/라벨 | 자연스러운 한국어 | `카메라 프리셋`, `건물 X · 실시간 렌더링` |
| 행정 지구 | 한글 + (영문) 병기 | `다운타운 (Downtown)`, `마운트워싱턴 (Mount Washington)` |
| 다리 | 한글 + 호칭 자연스럽게 | `로베르토 클레멘테 다리`, `포트 피트 다리` |
| 경기장 | 한글 + 영어 약어 박지 않음 | `PNC 파크`, `애크리셔 스타디움` |
| 랜드마크 | 한글 우선, 영문 보조 | `U.S. 스틸 타워` (원본 `U.S. Steel Tower`) |
| 인클라인 | `이름 + 인클라인` 호칭 | `듀케인 인클라인` |
| OSM `name` 필드 | UI 표시 시점에만 KO 매핑 | 랜드마크 호버 텍스트 등 |

**식별자 침투 방지**: `id`, `wants` (검색 키), `geom` 데이터, JSON key 등 **런타임 식별자에 해당하는 모든 영문 키는 절대 한국어로 바꾸지 않습니다.** 한국어 표기는 `scripts/i18n-ko.js`의 `ko()` 함수가 일관되게 처리합니다.

---

## 🚀 구동법

### 사전 요구사항
- Node.js 18+ (vite 6.x 지원 버전)
- npm 9+
- 모던 브라우저: Chrome 110+, Firefox 110+, Safari 16.4+

### 개발 서버

```bash
git clone https://github.com/sigco3111/Pittsburgh-3D-Recreation.git
cd Pittsburgh-3D-Recreation
npm install
npm run dev
```

`http://localhost:5173/` 접속. 자동 리로드.

### 모듈 핫 리로드
- `src/*.js` 수정 → 자동 리로드 (Three.js 컨텍스트 유지)
- `src/style.css` → 자동 새로고침 (캔버스 유지)
- `public/data/*.json` → 자동 새로고침

---

## 📦 빌드와 배포

### 빌드

```bash
npm run build      # dist/ 에 정적 산출물
npm run preview    # dist/ 로컬 미리보기
```

빌드 산출물 (예시):
```
dist/
├── index.html                       (3.82 kB, gzip 1.43 kB)
├── favicon.ico
├── assets/
│   ├── index-XLpL_Nkd.css           (4.98 kB, gzip 1.54 kB)
│   └── index-dBS5rqd3.js            (745.79 kB, gzip 214.47 kB)
└── data/
    ├── pittsburgh.json              (코어 도시)
    ├── landcover.json
    └── fabric.json                  (외곽 패브릭)
```

### 배포 (gh-pages)

본 포크는 `vite.config.js`의 `base: '/Pittsburgh-3D-Recreation/'`이 명시되어 있어 `https://<user>.github.io/Pittsburgh-3D-Recreation/` 서브패스에 그대로 배포 가능합니다.

```bash
# 1) .gitignore 명시 (.gitignore 자동 상속 안 됨)
cat > .gitignore <<EOF
.DS_Store
*.log
node_modules/
EOF

# 2) gh-pages 브랜치에 dist/ 복사 후 푸시
git checkout --orphan gh-pages
cp -R dist/. ./
git add .gitignore index.html assets data favicon.ico
git commit -m "Deploy: Korean localization"
git push -u origin gh-pages --force

# 3) Pages source = gh-pages / 경로 = / (자동 배포)
gh api -X PUT repos/<owner>/<repo>/pages \
  -f source[branch]=gh-pages \
  -f source[path]=/
```

---

## 📊 데이터 구조

### `public/data/pittsburgh.json`
핵심 도시 데이터 (OpenStreetMap Overpass 추출 + 수작업 강·다리·랜드마크 오버레이).

| 섹션 | 개수 | 설명 |
|------|------|------|
| `buildings` | 7,488 | 다운타운 디테일 모델 (extruded footprint + 높이 + 색상) |
| `bridges` | 18 | 다리 형상 (현수/아치/트러스/거더) |
| `parks` | 189 | 공원 폴리곤 |
| `water` | 2 | 강 합류 폴리곤 |
| `landmarks` | 27 | POI (학교, 박물관, 경기장, 병원 등) |

### `public/data/landcover.json`
토지 피복 (잔디/포장/모래/숲) — 매칭되는 영상 폴리곤.

### `public/data/fabric.json`
외곽 패브릭 — 배경 빌딩 77,621개. footprint + 높이만, 색상은 자동.

### 빌드 스크립트 (`scripts/*.mjs`)
원본 OSM 데이터 가공용 (재생성 필요시):
```bash
node scripts/audit-bridges.mjs      # 다리 카운트 sanity check
node scripts/build-fabric.mjs       # 외곽 패브릭 빌드
node scripts/enhance-map-data.mjs   # 데이터 강화
```

> 캐시: `scripts/osm-cache/*.json` (75개) — Overpass API 호출 결과 보관. 외부 의존성 X.

---

## 🧭 좌표계 / 좌표축

```
        +Y (위)
         │
         │
         │
         └────────── +X (동)
        ╱
       ╱
      +Z (남)
```

| 축 | 방향 | 사용 |
|----|------|------|
| `+X` | 동 (East) | 도로 그리드 가로, 다리 수평 |
| `+Y` | 위 (Up) | 빌딩 높이, 지형 표고 |
| `+Z` | 남 (South) | 도로 그리드 세로 |

- **단위**: 로컬 미터
- **원점**: 세 강 합류점(The Point)에 가깝게 잡혀 있음 (lat/lon 변환 시 `scripts/calibrate-projection.mjs` 참고)
- **스케일**: 1 unit = 1m

> OSM 위경도 → 로컬 XY 변환은 EPSG:3857(Web Mercator) 기반 표준 투영 사용.

---

## 📂 디렉토리 구조

```
Pittsburgh-3D-Recreation/
├── README.md                       # 본 문서
├── index.html                      # SPA 진입점 (한글화)
├── package.json                    # Three.js + Vite 의존성
├── vite.config.js                  # base: '/Pittsburgh-3D-Recreation/'
├── public/
│   ├── favicon.ico
│   └── data/
│       ├── pittsburgh.json         # 핵심 도시 데이터
│       ├── landcover.json
│       └── fabric.json             # 외곽 패브릭
├── scripts/                        # OSM 데이터 빌드 스크립트
│   ├── i18n-ko.js                  # 한국어 매핑 (한글 label only)
│   ├── landmark_dict.json          # 27개 랜드마크 추출
│   ├── bridge_dict.json            # 18개 다리 추출
│   ├── osm-cache/                  # 75개 OSM API 결과 캐시
│   └── *.mjs                       # 33개 데이터 빌드/검증 스크립트
├── src/
│   ├── main.js                     # 메인: 카메라/렌더/UI
│   ├── architecture.js             # 빌딩 extrusion
│   ├── bridges.js                  # 다리 모델 (KO 라벨)
│   ├── landmarks.js                # POI 데이터 + INCLINES
│   ├── water.js                    # 강/물 표현
│   ├── stadiums.js                 # PNC/에크리셔 스타디움
│   ├── point.js                    # The Point (합류점)
│   ├── details.js                  # 디테일 패치
│   ├── sky.js                      # 스카이/포그
│   ├── weather.js                  # 비/눈 파티클
│   ├── textures.js                 # 텍스처 어드밴스드
│   ├── quality.js                  # 화질/렌더링 프리셋
│   ├── geo.js                      # 지형/투영
│   └── style.css                   # UI + Noto Sans KR
└── notes.md                        # 한글화 인벤토리
```

---

## 🎨 렌더 파이프라인

```
   ┌────────────┐    ┌─────────────┐    ┌──────────────┐    ┌───────────────┐
   │  OSM JSON  │ →  │ Pre-process │ →  │  Three.js    │ →  │  Post-Process │
   │  (75 캐시) │    │ (build-fab) │    │  + Orbit     │    │  Bloom/SSR    │
   └────────────┘    └─────────────┘    └──────────────┘    └───────────────┘
         │                  │                   │                   │
         ▼                  ▼                   ▼                   ▼
    coordinate       mergeGeometries     CSS2DRenderer        EffectComposer
   projection        BufferUtils        (한글 라벨)         (모바일 자동 OFF)
```

- **Three.js r183** 베이스 (rendering core)
- **CSS2DRenderer** — DOM 라벨 (한글 폰트 자동 적용)
- **EffectComposer** — Bloom (모바일 GPU 자동 OFF)
- **EffectComposer Pass**: RenderPass → UnrealBloomPass → OutputPass

### 성능 모드

| 모드 | 해상도 | 블룸 | 권장 GPU |
|------|--------|------|----------|
| High | devicePixelRatio | ON | Desktop dGPU |
| Medium | 1.5x | ON | iGPU |
| Mobile | 1.0x | OFF | 모바일 |

> 자동 감지: `navigator.hardwareConcurrency`, `navigator.deviceMemory`, GPU 벤치마크.

---

## 🛠 트러블슈팅

### ❓ 흰화면 (`HTTP 200`이지만 렌더링 없음)
- **원인**: `vite.config.js`의 `base` 경로 불일치 또는 `__vite-browser-external-*.js` 미치환
- **확인**: `curl https://<host>/<repo>/assets/index-XXX.js | head`
- **해결**: `base: '/<repo>/'` 명시 후 재빌드

### ❓ 한글이 □ (tofu)로 표시
- **원인**: OS 한/글 폰트 미설치 또는 CSS 폰트 폴백 부재
- **해결**: `src/style.css`에 `"Noto Sans KR"` 폴백 추가 (이미 적용됨), OS 폰트 설치

### ❓ 빌드 후 번들에 한글이 안 박힘
- **원인**: `import { ko } from '../scripts/i18n-ko.js'` 누락 또는 번들러 트리쉐이킹
- **확인**: `grep -c '[가-힣]' dist/assets/index-*.js` (0이면 KO import 누락)

### ❓ 모바일에서 너무 느림
- **원인**: 7,488 + 77,621 = 85,000+ 메시 draw call
- **해결**: 우측 상단 토글에서 "패브릭" OFF, 또는 화질 "Mobile" 전환

### ❓ 다리 라벨이 어긋남
- **원인**: 카메라 회전 시 라벨이 빌딩에 가려짐
- **해결**: CSS `pointer-events: none` + 빌딩 앞쪽 깊이(z-index) 자동 정렬 (이미 적용됨)

---

## 🙏 원작자 / Attribution

- **원본 프로젝트**: [aditano/Pittsburgh-3D-Recreation](https://github.com/aditano/Pittsburgh-3D-Recreation) — Three.js + Vite 도시 매켓 기반
- **인스피레이션**: Daniel Farinax ([@daniel_farinax](https://x.com/daniel_farinax)) — [샌프란시스코 Three.js city loop](https://x.com/daniel_farinax/status/2088353519225237799)
- **데이터 출처**: [OpenStreetMap](https://openstreetmap.org) © ODbL (buildings, parks, bridges geometry)
- **본 포크 (`sigco3111/Pittsburgh-3D-Recreation`) 추가 사항**:
  - UI/라벨 한국어화 (`i18n-ko.js` 기반 `ko()` 함수)
  - gh-pages 배포 자동화
  - README 한글 상세 가이드
  - 인벤토리/사전 JSON (`landmark_dict.json`, `bridge_dict.json`)

---

## 📜 라이선스

원본 저장소의 라이선스를 따릅니다 (저장소에 명시 라이선스 파일 부재). 공정한 사용 범위에서 MIT 호환 가정:
- ✅ 코드 수정/배포 자유
- ✅ 영리/비영리 사용 자유
- ⚠️ 원작자 attribution 필수
- ⚠️ 원본 라이선스 명시 변경 시 본 포크도 동일 적용

상업적 사용 시 원작자 [@aditano](https://github.com/aditano) 에 사전 문의 권장.

---

**최종 업데이트**: 2026-08-27 · 메인테이너 [@sigco3111](https://github.com/sigco3111) · 이슈/PR 환영
