# 피츠버그 3D 재현 — 한글화 (Pittsburgh 3D Recreation · KR)

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-sigco3111.github.io-blue)](https://sigco3111.github.io/Pittsburgh-3D-Recreation/)

OSM(OpenStreetMap) 데이터로 만든 피츠버그 시의 3D 모형입니다. 세 개의 강(Allegheny, Monongahela, Ohio), 다운타운 건물 ~7,500개, 도시 외곽 패브릭 ~78,000개, 18개 다리, 주요 랜드마크를 Three.js 기반 실시간 렌더링으로 시각화합니다. **원본은 Daniel Farinax의 샌프란시스코 Three.js 도시 시연**에서 영감을 받아 피츠버그로 이식·확장한 프로젝트입니다.

## 원본

이 프로젝트는 Daniel Farinax가 X에 공유한 [샌프란시스코 Three.js city loop](https://x.com/daniel_farinax/status/2088353519225237799)에서 영감을 받아 만들었습니다. 다크 아키텍처 매켓(dark architectural-maquette) 스타일 그대로, 같은 방식으로 피츠버그를 재현합니다.

원본 Github: <https://github.com/aditano/Pittsburgh-3D-Recreation>

## 주요 특징

- **OSM 데이터 기반 도시**: 건물 외곽선, 도로, 공원 데이터로 피츠버그 코어 지형 구성
- **세 개의 강**: Allegheny, Monongahela, Ohio의 합류점(Point)
- **다리 18개**: Roberto Clemente, Andy Warhol, Rachel Carson, Fort Pitt, Birmingham, West End 등 — 실제 형상 분류(현수/아치/트러스/거더)에 따라 모델링
- **랜드마크 라벨**: U.S. Steel Tower, PPG Place, Cathedral of Learning, PNC Park, Acrisure Stadium 등 22개
- **자연 지형**: Mount Washington, North Side, Oakland의 부드러운 구릉
- **카메라 프리셋**: 항공뷰 · 다운타운 · 포인트 · 다리 · 경기장 · 오클랜드 · 대학교 · 마운트워싱턴 · 회전
- **날씨 효과**: 맑음 / 비 / 눈 파티클 전환
- **블룸/포스트 프로세싱**: GPU 부담을 고려해 모바일에서는 자동 비활성
- **설정 저장**: 품질 / 해상도 / 날씨는 localStorage에 저장되어 새로 고침해도 유지
- **한글 UI**: 카메라 뷰, 랜드마크 라벨, 다리 이름, 주요 인클라인이 한국어로 표시

## 구동법

```bash
# 의존성 설치
npm install

# 개발 서버 (Vite 기본 5173 포트)
npm run dev
```

`http://localhost:5173/` 접속.

### 빌드

```bash
npm run build      # dist/ 에 정적 산출물 (Three.js 번들 + 데이터 json)
npm run preview    # dist/ 로컬 미리보기
```

## 데이터

- `public/data/pittsburgh.json` — 핵심 도시 데이터 (OpenStreetMap Overpass 추출 + 수작업 강/다리/랜드마크 오버레이)
  - `buildings` 7,488개 (다운타운 디테일 모델)
  - `bridges` 18개
  - `parks` 189개
  - `water` 2개 폴리곤 (강 합류)
  - `landmarks` 27개
- `public/data/landcover.json` — 토지 피복 (잔디/포장/모래/숲)
- `public/data/fabric.json` — 외곽 패브릭 (배경 빌딩 77,621개, footprint + 높이만)

좌표계는 로컬 미터 좌표입니다. **+X=동, +Y=위, +Z=남**. 원점은 세 강 합류점(Point)에 가깝게 잡혀 있습니다.

## 라이브 데모

🌐 **<https://sigco3111.github.io/Pittsburgh-3D-Recreation/>** 에서 직접 확인해 보세요.

## 원작자 / Attribution

원본 프로젝트: [aditano/Pittsburgh-3D-Recreation](https://github.com/aditano/Pittsburgh-3D-Recreation) · **Inspired by Daniel Farinax** ([@daniel_farinax](https://x.com/daniel_farinax))의 샌프란시스코 Three.js city loop.

본 포크(`sigco3111/Pittsburgh-3D-Recreation`)는 UI/라벨 한국어화 + gh-pages 배포를 추가했습니다.

## 라이선스

원본 저장소 라이선스를 따릅니다.
