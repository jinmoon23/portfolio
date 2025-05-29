import type { RandomTransform } from "../types/thirdPage.types";

// 이미지 경로 배열
export const THIRD_PAGE_IMAGES = [
  "about/1.jpeg",
  "about/2.jpeg",
  "about/3.jpeg",
  "about/4.jpeg",
  "about/5.jpeg",
  "about/6.jpeg",
  "about/7.jpeg",
  "about/8.jpeg",
  "about/9.jpeg",
  "about/10.jpeg",
  "about/11.jpeg",
  "about/12.jpeg",
  "about/13.jpeg",
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
  ANIMATION_EASING: "cubic-bezier(0.34,1.56,0.64,1)",
  HOVER_TRANSITION_DURATION: 500, // ms
  INTERSECTION_THRESHOLD: 0.1,
  INTERSECTION_ROOT_MARGIN: "50px",
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
  title: "작은 시작, 큰 연결",
  paragraphs: [
    "프론트엔드 개발자로서, 작은 디테일이 사용자 경험을 더욱 풍부하게 만들고 자연스러운 소통을 이끌어낸다고 믿습니다. 화면의 섬세한 요소와 직관적인 상호작용을 통해, 더 많은 사람들이 편리하고 즐겁게 사용할 수 있는 서비스를 만들기 위해 꾸준히 고민하고 있습니다.",
    "모든 개인은 자신만의 특별한 추억과 경험을 가지고 있습니다. 각자의 특별함이 모여 더 나은 세상을 만들어가는 것처럼, 저는 이러한 특별함을 기술로 연결하고 내일로 이어질 수 있는 서비스를 개발하고자 합니다.",
    "'사용자들이 어떤 서비스를 필요로 할까?', '어떤 경험이 특별하게 다가올까?'와 같은 질문들을 탐험들과 함께 고민하며, 더 나은 결과를 만들어내기 위해 노력합니다.",
    "사용자 피드백을 기반으로 기술을 개선하고, 테스트를 통해 부족한 부분을 보완하며, 점진적으로 발전하는 서비스를 만드는 것이 저의 목표입니다. 이렇게 사용자와 팀 모두가 만족할 수 있는 결과를 함께 이루어가고 싶습니다.",
  ],
} as const;
