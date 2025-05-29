export interface ProjectContent {
  period: string;
  projectName: string;
  roles: string[];
  description: string[];
  videoUrl?: string;
  imageUrl?: string;
  isVerticalVideo?: boolean;
}

export interface CardData {
  title: string;
  subtitle: string;
  serviceName: string;
  img: string;
  bg?: string;
  text?: string;
  projectContent: ProjectContent;
}

export const cardData: CardData[] = [
  {
    title: "SSAFY 12th, 자율 프로젝트",
    subtitle: "쉽게 사용하고. 쉽게 확인하고",
    serviceName: "달디단",
    img: "daldidan.png",
    bg: "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600",
    text: "text-white",
    projectContent: {
      period: "2025.04 ~ 2025.05",
      projectName: "SSAFY 2학기 자율 프로젝트 달디단",
      videoUrl: "daldidan.mp4",
      roles: [
        "Expo를 활용한 FE 개발 환경 설정",
        "React-native-Vision-Camera를 활용한 카메라 기능 구현",
        "FrameProcessor를 활용한 프레임 연산 수행",
        "React-native-fast-tflite 로더와 EfficientDet lite-0 모델을 활용한 사과 객체 인식 구현",
      ],
      description: [
        "달디단은 사용자가 손쉽게 사과의 당도를 측정할 수 있는 서비스입니다.",
        "사용자는 카메라를 통해 사과를 촬영하고, 당도를 측정할 수 있습니다.",
        "당도는 Brix로 표시되며, User Interaction을 유도하기 위해 터치 후 당도 측정 결과를 확인할 수 있습니다.",
        "당도는 사과의 크기, 색상, 모양 등 다양한 요소를 고려하여 측정됩니다.",
      ],
    },
  },
  {
    title: "SSAFY 12th, 특화 프로젝트",
    subtitle: "더 쉽게, 마음까지 담아",
    serviceName: "또가게",
    img: "Ttho.png",
    bg: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700",
    text: "text-white",
    projectContent: {
      period: "2025.02 ~ 2025.04",
      projectName: "SSAFY 2학기 특화 프로젝트 또가게",
      imageUrl: "Ttho.png",
      roles: [
        "Next.js를 활용한 React web 구성, WebView를 적용한 react-native(android) 환경 구성",
        "postMessage를 통한 web ↔ native 간 통신 구성(native 환경 내 전화번호부 접근 트리거 및 저장소, 위치, 알림 등에 대한 접근 권한 동의 트리거)",
        "나만의 기프티콘 생성 및 받은 기프티콘 사용 관련 FE 로직 구성",
        "마이페이지 내 결제 내역 구성 및 충전 관련 FE 로직 구성",
        "ReactQuery를 활용한 서버 상태 관리 및 Zustand를 활용한 클라이언트 상태 관리",
      ],
      description: [
        "기프티콘 생성 주체를 기존의 대기업에서 선물을 하는 본인에게로 위임합니다. 이로써 선물 본연의 마음을 담는 과정을 기프티콘 생성 과정에 담습니다.",
        "받은 기프티콘은 NFC를 통해 결제됩니다. 점포 사장님은 우리 서비스를 알지 못하더라도 계좌이체의 실질을 가지기 때문에 기존 결제 패러다임과 달라 혼란스러울 걱정이 없습니다.",
        "받은 기프티콘은 Map 페이지에서 Marker로 표시됩니다.",
        "또가게로 등록한 나만의 맛집 또한 Map에서 Marker로 표시됩니다.",
        "유저는 나만의 맛집을 지인에게 선물할 수 있고 선물 받은 맛집의 기프티콘을 Map에서 곧바로 확인, OneStop 결제로 이어질 수 있습니다.",
      ],
    },
  },
  {
    title: "SSAFY 12th, 공통 프로젝트",
    subtitle: "태그하고, 보여주고, 대화하고",
    serviceName: "AiTalk",
    img: "AiTalk.png",
    bg: "bg-gradient-to-br from-amber-600 via-orange-600 to-red-600",
    text: "text-white",
    projectContent: {
      period: "2024.07 ~ 2024.08",
      projectName: "SSAFY 1학기 공통 프로젝트 AiTalk",
      imageUrl: "AiTalk.png",
      roles: [
        "React + TypeScript를 활용한 프론트엔드 개발",
        "얼굴등록 및 인식 로그인과 카드 태그 로그인 등 유저(치료사 및 아동) 관련 제반 동작 FE 로직 처리",
        "Redux를 활용한 클라이언트 상태 관리",
        "클라이언트 측 객체 인식을 위한 AI 모델 적용(coco-SSD)",
        "클라이언트 측 제반 FE 아키텍처 구성 및 페이지 설계",
      ],
      description: [
        "AiTalk는 AI를 활용하여 언어치료사의 치료를 돕는 교구 서비스입니다.",
        "사용자는 AI와 대화하거나 NFC칩이 내장된 카드를 태그해 언어 치료를 진행할 수 있습니다.",
        "사용자는 카메라를 활용해 주변의 물체를 인식하고 생성된 이미지를 활용해 언어 치료를 진행할 수 있습니다.",
        "언어치료사를 위한 관리자 페이지가 구성되어 효율적인 아이 관리가 가능합니다.",
      ],
    },
  },
  {
    title: "내일배움캠프 배포 프로젝트",
    subtitle: "떡볶이 좋아하는사람 여기 모여라!",
    serviceName: "떡볶이4U",
    img: "TTEOK_2.png",
    bg: "bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800",
    text: "text-white",
    projectContent: {
      period: "2024.01 ~ 2024.02",
      projectName: "내일배움캠프 배포 프로젝트 떡볶이4U",
      videoUrl: "tteok.mp4",
      isVerticalVideo: true,
      roles: [
        "Swift와 Xcode를 활용한 네이티브 앱 개발",
        "MessageKit과 Google Firebase를 활용해 로컬 기반 실시간 채팅 구현",
        "VerticalCardSwiper를 활용해 현대카드 Dive App 벤치마킹. 추천 페이지 구성",
      ],
      description: [
        "떡볶이4U는 떡볶이 맛집을 찾고 함께 먹을 사람을 찾는 서비스입니다.",
        "사용자는 자신이 좋아하는 떡볶이 맛집을 등록하고 카테고리별로 구분할 수 있습니다.",
        "사용자는 채팅을 통해 함께 먹을 사람을 찾을 수 있습니다.",
        "사용자는 추천 페이지에서 카드를 스와이프하여 좋아하는 떡볶이 맛집을 찾을 수 있습니다.",
      ],
    },
  },
];
