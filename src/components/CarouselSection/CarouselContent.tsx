export interface ProjectContent {
  period: string;
  projectName: string;
  roles: string[];
  description: string[];
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
    img: "/daldidan.png",
    bg: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400",
    projectContent: {
      period: "2025.01 ~ 2025.02",
      projectName: "SSAFY 2학기 자율 프로젝트 달디단",
      roles: [
        "Next.js와 TypeScript를 활용한 웹 애플리케이션 개발",
        "React Query를 활용한 서버 상태 관리",
        "Tailwind CSS를 활용한 반응형 UI 구현",
        "AWS S3를 활용한 이미지 저장소 구축",
      ],
      description: [
        "달디단은 사용자가 쉽게 달력을 만들고 공유할 수 있는 서비스입니다.",
        "사용자는 자신만의 달력을 만들고, 다른 사용자와 공유할 수 있습니다.",
        "달력에 일정을 추가하고, 카테고리별로 구분하여 관리할 수 있습니다.",
        "공유된 달력을 통해 다른 사용자의 일정을 확인하고 참여할 수 있습니다.",
      ],
    },
  },
  {
    title: "SSAFY 12th, 특화 프로젝트",
    subtitle: "더 쉽게, 마음까지 담아",
    serviceName: "또가게",
    img: "/Ttho.png",
    bg: "bg-gradient-to-br from-teal-300 via-blue-300 to-indigo-400",
    text: "text-white",
    projectContent: {
      period: "2025.03 ~ 2025.04",
      projectName: "SSAFY 2학기 특화 프로젝트 ***또가게***",
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
        "**또가게**로 등록한 나만의 맛집 또한 Map에서 Marker로 표시됩니다.",
        "유저는 나만의 맛집을 지인에게 선물할 수 있고 선물 받은 맛집의 기프티콘을 Map에서 곧바로 확인, OneStop 결제로 이어질 수 있습니다.",
      ],
    },
  },
  {
    title: "SSAFY 12th, 공통 프로젝트",
    subtitle: "태그하고, 보여주고, 대화하고",
    serviceName: "AiTalk",
    img: "/AiTalk.png",
    bg: "bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-300",
    projectContent: {
      period: "2024.07 ~ 2024.08",
      projectName: "SSAFY 1학기 공통 프로젝트 AiTalk",
      roles: [
        "Spring Boot를 활용한 백엔드 API 개발",
        "React와 TypeScript를 활용한 프론트엔드 개발",
        "WebSocket을 활용한 실시간 채팅 기능 구현",
        "JWT를 활용한 인증/인가 구현",
      ],
      description: [
        "AiTalk는 AI를 활용한 채팅 서비스입니다.",
        "사용자는 AI와 대화하며 다양한 주제에 대해 이야기할 수 있습니다.",
        "대화 내용을 태그로 분류하여 관리할 수 있습니다.",
        "다른 사용자와 대화 내용을 공유하고 소통할 수 있습니다.",
      ],
    },
  },
  {
    title: "내일배움캠프 배포 프로젝트",
    subtitle: "떡볶이 좋아하는사람 여기 모여라!",
    serviceName: "떡볶이4U",
    img: "/TTEOK_2.png",
    bg: "bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-500",
    projectContent: {
      period: "2024.01 ~ 2024.02",
      projectName: "내일배움캠프 배포 프로젝트 떡볶이4U",
      roles: [
        "React와 TypeScript를 활용한 프론트엔드 개발",
        "Firebase를 활용한 실시간 데이터베이스 구축",
        "Kakao Maps API를 활용한 지도 서비스 구현",
        "반응형 웹 디자인 구현",
      ],
      description: [
        "떡볶이4U는 떡볶이 맛집을 찾고 공유하는 서비스입니다.",
        "사용자는 자신이 좋아하는 떡볶이 맛집을 등록하고 공유할 수 있습니다.",
        "지도에서 주변 떡볶이 맛집을 쉽게 찾을 수 있습니다.",
        "리뷰와 평점을 통해 맛집 정보를 공유할 수 있습니다.",
      ],
    },
  },
];
