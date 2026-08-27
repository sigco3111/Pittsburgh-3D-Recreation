# Pittsburgh 3D Recreation — UI 텍스트 인벤토리 (한글화 대상)

> 작성: STEP 2 (코드베이스 인벤토리)
> 범위: `src/main.js` + `index.html` + 보조 모듈에서 UI 노출 텍스트

## 1. index.html (정적 텍스트)

| line | 영문 텍스트 | 도메인 컨텍스트 |
|------|-------------|----------------|
| 6 | `Pittsburgh · Architecture · Meters` | title |
| 22 | `Generating Pittsburgh…` | loader text |
| 27 | `Architecture · Meters` | eyebrow text |
| 28 | `Pittsburgh` | h1 |
| 30-31 | `OSM rivers, streets, parks, downtown footprints. +X east · +Y up · +Z south. Confluence = 0.` | meta description |
| 36 | `Layers` | eyebrow |
| 37 | `buildings · loading` | placeholder |
| 39 | `Settings` | settings toggle button |
| 42 | `Quality` | settings kicker |
| 43 | `aria-label="Quality"` | aria |
| 44-47 | `Low / Medium / High / Ultra` | quality seg labels |
| 49 | `Resolution` | kicker |
| 50 | `aria-label="Resolution"` | aria |
| 51-55 | `50% / 75% / 100% / 150% / 200%` | resolution seg labels |
| 57 | `Lower either if the city stutters. Bloom stays off on phones.` | note |
| 61 | `aria-label="Weather"` | aria |
| 62-64 | `Sunny / Rain / Snow` | weather buttons |
| 67-77 | nav 버튼들 `Aerial / Downtown / The Point / Bridges / Stadiums / Oakland / Cathedral / Mt. Wash / Rotate` | nav buttons |
| 79 | `src=/src/main.js` | module entry |

## 2. src/main.js (LABELLED 배열)

| line | 영문 텍스트 (UI 표시) | 도메인 |
|------|----------------------|--------|
| 1058-1081 | 22개의 빌딩 라벨 (U.S. STEEL TOWER 등) | CSS2D 라벨 |
| 1084-1089 | 4개의 district 라벨 (POINT STATE PARK 등) | CSS2D 라벨 |
| 1119-1122 | INCLINES 의 n.toUpperCase() | CSS2D 라벨 |

### 영문 박힌 부분 추출
- LABELLED `[ [대문자 라벨, 검색이름] ]` — 라벨이 화면에 박힘 (UI 표시)
- DISTRICT_LABELS `[ [대문자, x, z, lift] ]` — 라벨이 화면에 박힘

## 3. src/main.js dynamic text

| line | 텍스트 | 컨텍스트 |
|------|--------|----------|
| 1495 | `buildings ${total} · live` | layersEl 동적 표시 |
| 1735 | error 메시지 (영문) | loader text |

## 4. src/landmarks.js INCLINES 데이터
- INCLINES 배열의 `n` 필드가 incline 이름 (Duquesne Incline / Monongahela Incline). 이 데이터가 main.js 의 placeLandmarkLabels 에서 CSS2D 라벨로 박힘.

## 5. src/bridges.js 라벨
- `addLabel(b.n, ...)` 으로 다리명이 그대로 박힘 (pittsburgh.json 의 .bridges[].n)

## 핵심 라벨 (도메인)
- 다리: 18개 (예: ROBERTO CLEMENTE BRIDGE 등)
- 빌딩: 22개
- 구역: 4개
- 랜드마크: 27개
- 인클라인: 2개
