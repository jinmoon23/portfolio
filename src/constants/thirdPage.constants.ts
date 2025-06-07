import type { RandomTransform } from '../types/thirdPage.types';

// 이미지 경로 배열
export const THIRD_PAGE_IMAGES = [
  'about/1.jpeg',
  'about/2.jpeg',
  'about/3.jpeg',
  'about/4.jpeg',
  'about/5.jpeg',
  'about/6.jpeg',
  'about/7.jpeg',
  'about/8.jpeg',
  'about/9.jpeg',
  'about/10.jpeg',
  'about/11.jpeg',
  'about/12.jpeg',
  'about/13.jpeg',
] as const;

// 애니메이션 변환 방향 설정
export const ANIMATION_DIRECTIONS: RandomTransform[] = [
  { x: -100, y: -50, rotate: -15 },
  { x: 100, y: -30, rotate: 12 },
  { x: -80, y: 60, rotate: -8 },
  { x: 120, y: 40, rotate: 20 },
  { x: -60, y: -80, rotate: -12 },
  { x: 80, y: -60, rotate: 15 },
  { x: -120, y: 20, rotate: -20 },
  { x: 60, y: 80, rotate: 10 },
  { x: -40, y: -100, rotate: -5 },
  { x: 40, y: 100, rotate: 8 },
  { x: -100, y: 30, rotate: -18 },
  { x: 90, y: -20, rotate: 14 },
  { x: -70, y: 70, rotate: -10 },
];

// 애니메이션 설정
export const ANIMATION_CONFIG = {
  STAGGER_DELAY: 80, // ms
  ANIMATION_DURATION: 800, // ms
  ANIMATION_EASING: 'cubic-bezier(0.34,1.56,0.64,1)',
  HOVER_TRANSITION_DURATION: 500, // ms
  INTERSECTION_THRESHOLD: 0.1,
  INTERSECTION_ROOT_MARGIN: '50px',
} as const;

// 스크롤 제어 설정
export const SCROLL_CONFIG = {
  DEBOUNCE_DELAY: 50, // ms
  TOUCH_END_DELAY: 100, // ms
  SCROLL_THRESHOLD: 10, // px
  EAGER_LOAD_COUNT: 4, // 즉시 로드할 이미지 개수
} as const;

// About Me 텍스트 내용
export const ABOUT_ME_CONTENT = {
  title: '작은 시작, 큰 연결',
  paragraphs: [
    '프론트엔드 개발자로서 작은 디테일 하나하나가 전체 사용자 경험을 결정짓는 핵심임을 믿습니다. 화면의 미세한 요소와 세심하게 설계된 상호작용은 사용자에게 단순한 편리함을 넘어, 감동과 즐거움을 선사할 수 있다고 생각합니다. 저는 이러한 섬세한 경험을 통해 더 많은 사람들이 직관적으로, 그리고 자연스럽게 소통할 수 있는 서비스를 만들기 위해 끊임없이 고민하고 있습니다.',
    '모든 개인은 자신만의 소중한 추억과 경험을 지니고 있습니다. 각자의 특별함이 모여 더 나은 세상을 만들어가듯, 저는 기술을 통해 사람들의 특별한 경험이 자연스럽게 연결되고, 내일로 이어질 수 있는 서비스를 개발하고자 합니다.',
    "'사용자들이 진정으로 원하는 서비스는 무엇일까?', '어떤 경험이 일상 속에서 특별한 기억으로 남을 수 있을까?'와 같은 질문을 늘 마음에 품고, 다양한 시도와 탐구를 이어가고 있습니다.",
    '저는 사용자 피드백을 가장 소중한 성장의 자산으로 여기며, 이를 바탕으로 기술을 지속적으로 개선하고, 꼼꼼한 테스트를 통해 부족한 부분을 보완합니다. 점진적으로 발전하는 서비스를 통해, 사용자와 팀 모두가 진정으로 만족할 수 있는 결과를 함께 만들어가고 싶습니다.',
  ],
} as const;

export const EDUCATION_INFO = {
  title: 'Education & Experience',
  items: [
    {
      school: '삼성청년SW/AI아카데미',
      degree: '파이썬 Full Stack 개발 역량 기반 AI 심화 기능 개발',
      period: '2024.07 - 2025.07',
      location: '부산광역시 강서구',
    },
    {
      school: 'iOS 앱개발 부트캠프',
      degree: '내일배움캠프',
      period: '2024.02 - 2024.07',
      location: '서울특별시 강남구',
    },
    {
      school: '동아대학교',
      degree: '경영학과',
      period: '2014 - 2018',
      location: '부산광역시 서구',
    },
    {
      school: '부산동성고등학교',
      degree: '인문계열',
      period: '2011 - 2014',
      location: '부산광역시 부산진구',
    },
  ],
};

export const MILITARY_INFO = {
  title: 'Military Service',
  items: [
    {
      rank: 'OFFICER',
      position: '대한민국 육군 장교 중위 전역',
      period: '2018.03 - 2020.06',
      location: '경기도 여주시 / 강원도 홍천시',
      description:
        '대한민국 육군 기갑 장교로 복무하며 리더십과 책임감을 배웠습니다. 소대장으로서 부대 작전 및 행정 업무를 담당하며, 다양한 상황에서의 의사결정 능력과 팀워크를 향상할 수 있었습니다.',
    },
  ],
};
