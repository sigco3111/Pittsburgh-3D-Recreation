// 한국어 사전 — Pittsburgh 3D Recreation
// 사용법:
//   import { KO } from '../scripts/i18n-ko.js';
//   KO['Aerial']         // '항공뷰'
//   KO['Downtown']       // '다운타운 (Downtown)'
//   KO['U.S. STEEL TOWER'] // 'U.S. 스틸 타워'

export const KO = {
  // ====== index.html 정적 텍스트 ======
  'Pittsburgh \u00b7 Architecture \u00b7 Meters': '피츠버그 \u00b7 건축 \u00b7 미터 좌표',
  'Architecture \u00b7 Meters': '건축 \u00b7 미터 좌표',
  'Pittsburgh': '피츠버그',
  'OSM rivers, streets, parks, downtown footprints. +X east \u00b7 +Y up \u00b7 +Z south.\n        Confluence = 0.': 'OSM 강, 도로, 공원, 다운타운 건물 데이터. +X=동, +Y=위, +Z=남. 세 강 합류점 = 원점.',
  'Layers': '레이어',
  'buildings \u00b7 loading': '건물 \u00b7 로딩 중',
  'Settings': '설정',
  'Quality': '품질',
  'Low': '낮음',
  'Medium': '중간',
  'High': '높음',
  'Ultra': '울트라',
  'Resolution': '해상도',
  '50%': '50%',
  '75%': '75%',
  '100%': '100%',
  '150%': '150%',
  '200%': '200%',
  'Lower either if the city stutters. Bloom stays off on phones.': '도시가 끊겨 보이면 둘 다 낮춰 주세요. 모바일에서는 Bloom 효과가 꺼집니다.',
  'Generating Pittsburgh\u2026': '피츠버그 생성 중\u2026',
  'Sunny': '맑음',
  'Rain': '비',
  'Snow': '눈',
  // 카메라 뷰 프리셋
  'Aerial': '항공뷰',
  'Downtown': '다운타운',
  'The Point': '포인트',
  'Bridges': '다리',
  'Stadiums': '경기장',
  'Oakland': '오클랜드',
  'Cathedral': '대학교',
  'Mt. Wash': '마운트워싱턴',
  'Rotate': '회전',

  // ====== 랜드마크 빌딩 (LABELLED 배열, 모두 대문자 키) ======
  'U.S. STEEL TOWER': 'U.S. 스틸 타워',
  'PPG PLACE': 'PPG 플레이스',
  'BNY MELLON CENTER': 'BNY 멜론 센터',
  'FIFTH AVENUE PLACE': '5번가 플레이스',
  'ONE OXFORD CENTRE': '원 옥스포드 센터',
  'TOWER AT PNC PLAZA': 'PNC 플라자 타워',
  'GULF TOWER': '걸프 타워',
  'KOPPERS BUILDING': '코퍼스 빌딩',
  'GRANT BUILDING': '그랜트 빌딩',
  'UNION TRUST BUILDING': '유니온 트러스트 빌딩',
  'ALLEGHENY COUNTY COURTHOUSE': '알러게니 카운티 법원',
  'CONVENTION CENTER': '컨벤션 센터',
  'PNC PARK': 'PNC 파크',
  'ACRISURE STADIUM': '애크리슈어 스타디움',
  'PPG PAINTS ARENA': 'PPG 페인츠 아레나',
  'ANDY WARHOL MUSEUM': '앤디 워홀 미술관',
  'SCIENCE CENTER': '사이언스 센터',
  'CATHEDRAL OF LEARNING': '래닝의 대학성당',
  'HEINZ MEMORIAL CHAPEL': '하인츠 기념 예배당',
  'CARNEGIE MUSEUM': '카네기 박물관',
  'SOLDIERS & SAILORS MEMORIAL': '솔저스 & 세일러스 기념관',
  'PHIPPS CONSERVATORY': '핍스 식물원',

  // district 라벨
  'POINT STATE PARK': '포인트 스테이트 파크',
  'MOUNT WASHINGTON': '마운트워싱턴',
  'THE STRIP DISTRICT': '스트립 지구',
  'OAKLAND': '오클랜드',

  // OSM landmark (소문자형 — landmarks.js 가 다른 키)
  // (이들은 run-time 표시용 — main.js 의 placeLandmarkLabels 가 LABELLED 키를 사용하므로 위 키들과 일치)
  'KOPPERS TOWER': '코퍼스 타워',

  // bridges — pittsburgh.json 의 bridges[].n 그대로 박힘
  'ROBERTO CLEMENTE BRIDGE': '로베르토 클레멘테 다리',
  'ANDY WARHOL BRIDGE': '앤디 워홀 다리',
  'RACHEL CARSON BRIDGE': '레이첼 카슨 다리',
  'FORT PITT BRIDGE': '포트 피트 다리',
  'FORT DUQUESNE BRIDGE': '포트 듀케인 다리',
  'SMITHFIELD STREET BRIDGE': '스미스필드 스트리트 다리',
  'LIBERTY BRIDGE': '리버티 다리',
  'VETERANS BRIDGE': '베테랑 다리',
  'WEST END BRIDGE': '웨스트 엔드 다리',
  'DAVID MCCULLOUGH BRIDGE': '데이비드 매컬로 다리',
  'ANDY WARHOL RAIL BRIDGE': '앤디 워홀 철교',
  'BIRMINGHAM BRIDGE': '버밍엄 다리',
  'SOUTH TENTH STREET BRIDGE': '사우스 10번가 다리',
  'PANHANDLE BRIDGE': '팬핸들 다리',
  'HOT METAL BRIDGE': '핫 메탈 다리',
  '31ST STREET BRIDGE': '31번가 다리',
  '40TH STREET BRIDGE': '40번가 다리',
  'HOMESTEAD GRAYS BRIDGE': '홈스테드 그레이스 다리',

  // INCLINES (소문자형, addLabel 에서 .toUpperCase() 처리되므로 대문자 키도 가능)
  'Duquesne Incline': '듀케인 인클라인',
  'Monongahela Incline': '모논거헐라 인클라인',
  'DUQUESNE INCLINE': '듀케인 인클라인',
  'MONONGAHELA INCLINE': '모논거헐라 인클라인',

  // 자주 쓰일 빌딩 검색 키 (한글 별도 매핑 X — search-by-name 용이므로 영문 유지하되 비워둠)
};

// KO 헬퍼: 라벨이 KO 사전에 있으면 반환, 없으면 원본 그대로
export function ko(label) {
  if (label == null) return '';
  return KO[label] ?? label;
}

// KO 빌딩 라벨 변환
export function koUpper(label) {
  if (label == null) return '';
  return KO[label.toUpperCase()] ?? label;
}
