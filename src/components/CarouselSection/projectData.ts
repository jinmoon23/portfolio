export interface ProjectImages {
  detailImages: string[];
  projectBackground: {
    question: string;
    existingProblems: {
      description: string;
      issues: string[];
    };
    solutions: {
      conclusion: string;
      solution: string[];
    };
  };
  troubleshootingItems?: {
    title: string;
    description: string;
    solution: string | string[];
    codeSnippets?: {
      language: string;
      code: string;
    }[];
    imageUrl?: string;
    technicalDetails?: {
      title: string;
      items: string[];
    }[];
  }[];
}

export interface ProjectData {
  [key: string]: ProjectImages;
}

export const projectImages: ProjectData = {
  달디단: {
    detailImages: [
      './daldidanDetail/1.png',
      './daldidanDetail/2.png',
      './daldidanDetail/3.png',
      './daldidanDetail/4.png',
      './daldidanDetail/5.png',
      './daldidanDetail/6.png',
    ],
    projectBackground: {
      question:
        '첨단 AI가 일상을 변화해나가는 와중에 왜 여전히 소비자들은 직감에 의존해서 과일을 선택해야 하는가? 라는 질문에서 프로젝트는 시작했습니다.',
      existingProblems: {
        description:
          '기존에 비슷한 서비스가 있었지만 [ 맛있다 / 보통이다 / 맛없다 ] 라는 정보만을 나타낼 수 있었습니다. 하지만 사용자 편의성 부분에서 부족함이 많았습니다.',
        issues: [
          '사과의 꼭지가 보여야만 하고 하나의 사과에 대해서만 당도 측정이 가능함',
          'WEB 기반이라 직접 카메라를 활용해 촬영한 이미지를 활용할 수 없음',
        ],
      },
      solutions: {
        conclusion:
          '위와 같은 문제를 해결하기 위해 실제 마트에서 활용할 수 있도록 스마트폰 앱을 제작하였고 다양한 각도에서 당도 추론이 가능하도록 모델을 학습하여 서비스에 구현하였습니다.',
        solution: [],
      },
    },
    troubleshootingItems: [
      {
        title: '🤖 react-native-vision-camera FrameProcessor 성능 최적화',
        description:
          '프레임 당 사과 객체 인식 모델이 동작하도록 구현해야 했으나, 무거운 모델 사용 시 객체 인식 성능은 높았으나 카메라뷰가 끊기는 문제가 발생했습니다.',
        solution: [
          '⚡️ EfficientDet lite 0 모델(36.77ms)을 사용하여 모바일 최적화',
          '⏱️ FrameProcessor의 SAMPLE_RATE를 조절하여 1초에 4번의 객체 인식 연산 수행',
          '🔍 Netron을 통한 모델 메타데이터 분석 및 최적화된 전처리 구현',
        ],
        codeSnippets: [
          {
            language: 'typescript',
            code: `// 1초에 4번의 객체 인식 연산 수행
const SAMPLE_RATE = 15;

const frameProcessor = useFrameProcessor(
  async (frame) => {
    'worklet';
    if (!modelRef.current) {
      logWorklet('[Worklet] Model not loaded');
      return;
    }

    frameCount.value = (frameCount.value + 1) % SAMPLE_RATE;`,
          },
          {
            language: 'typescript',
            code: `export const MODEL_INPUT_SIZE = 320;
...
const resized = preprocessFrame(frame, MODEL_INPUT_SIZE);
const outputs = model.runSync([resized]);
const boxes = outputs[0] as Float32Array;
for (let i = 0; i < totalDetections; i++) {
  const y1 = boxes[i * 4];
  const x1 = boxes[i * 4 + 1];
  const y2 = boxes[i * 4 + 2];
  const x2 = boxes[i * 4 + 3];
  boxesArray.push({ x1, y1, x2, y2 });
  scoresArray.push(scores[i]);
}`,
          },
        ],
        technicalDetails: [
          {
            title: '📊 해결해야 할 문제 정의',
            items: [
              '실시간 카메라뷰 기준 1초에 60 프레임 이상일 때 인간의 눈은 끊기지 않는다고 느낌',
              '⏱1프레임 == 1/60초 == 16ms 이므로 16ms 이하로 처리해야 함',
              'EfficientDet lite 4 모델: 처리시간 206.8ms / 성능 mAP 41.96% ',
            ],
          },
          {
            title: '🔧 문제 해결 전략',
            items: [
              '모바일용으로 양자화된 EfficientDet lite 0 모델로 교체: 처리시간 36.77ms / 성능 mAP 25.96% ',
              'FrameProcessor의 SAMPLE_RATE 조절로 15프레임 당 연산으로 수정해 많은 변수 상황에서도 36.77ms의 객체 인식 모델 연산의 시간을 유지할 수 있도록 설정함',
              '러프하게 진행된 FE측 사과 객체 인식 이후 사과 객체의 이미지를 BE로 전달해 Yolov8n 모델을 통해 사과의 정확한 위치와 Segmentations 정보를 연산 후 전달받도록 함',
            ],
          },
        ],
      },
    ],
  },
  또가게: {
    detailImages: [
      './TthoMarketDetail/1.png',
      './TthoMarketDetail/2.png',
      './TthoMarketDetail/3.png',
      './TthoMarketDetail/4.png',
      './TthoMarketDetail/5.png',
      './TthoMarketDetail/6.png',
    ],
    projectBackground: {
      question:
        '팀원들과 식사 중 각자 사는 동네의 맛집들에 관련하여 이야기를 나눴습니다. "이 가게는 꼭 가봤으면 좋겠다. 특히 이 메뉴는 되게 맛있으니 가게 되면 꼭 먹어보세요" 등등 다양한 이야기가 나왔습니다. 그러던 중 로컬의 맛집을 소개하고 추천함과 동시에 선물할 수 있다면 어떨까? 라는 질문에서 해당 프로젝트가 시작되었습니다. ',
      existingProblems: {
        description:
          '더 나아가 현행 기프티콘의 발행이 대기업 위주인 점과 마음이 담긴 선물로서의 의미가 점점 퇴색되어 가고 있다는 점을 보완하기 위해 기프티콘의 간편한 사용성과 선물로서의 의미를 강조하기 위해 프로젝트 기획에 신경을 썼습니다. ',
        issues: [],
      },
      solutions: {
        conclusion:
          '결과적으로 단순화된 3명의 주체가 현행 결제 시스템 상에서 추가적인 소요 없이 서비스의 이점을 누릴 수 있도록 구성하는데 성공했습니다.',
        solution: [
          '선물하는 사람: 선물하고자 하는 맛집을 선택하고 추천 메뉴와 메세지를 입력합니다. 이후 결제를 마무리하고 해당 기프티콘을 선물합니다.',
          '선물받는 사람: 전해받은 기프티콘을 활용해 해당 추천 맛집에서 식사 후 NFC 결제를 진행합니다.',
          '점주: 기존의 NFC 결제와 동일하게 결제를 진행합니다. 서비스 주체인 "또가게"에서 DEPOSIT 금액을 점주에게 계좌이체 합니다.',
          '이런 핀테크 시스템을 통해 모든 이해주체는 간편하게 선물을 주고받고 사용할 수 있습니다.',
        ],
      },
    },
    troubleshootingItems: [
      {
        title: '🌐 WebView 구성 시 web ↔ native 간 통신 구현',
        description:
          'WebView에서 web과 native 간의 양방향 통신을 구현하는 과정에서 발생한 문제를 해결했습니다.',
        solution: [
          '📡 postMessage 메서드를 활용한 양방향 통신 구현',
          '📤 web에서 native로의 메시지 전송 및 응답 처리',
          '📥 native에서 web으로의 메시지 전송 및 에러 처리',
        ],
        codeSnippets: [
          {
            language: 'typescript',
            code: `// web -> native try
if (window.ReactNativeWebView) {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({
      type: 'OPEN_CONTACTS',
    })
  );
}

// native catch
const onMessage = useCallback((event: WebViewMessageEvent) => {
  const data = JSON.parse(event.nativeEvent.data);
  handleWebViewMessage(
    event,
    message => {
      webViewRef.current?.postMessage(message);
    },
    () => {
      webViewRef.current?.reload();
    },
  );
}, []);`,
          },
        ],
        technicalDetails: [
          {
            title: '🔌 통신 구조',
            items: [
              '📤 web에서 native로의 메시지 전송: postMessage 메서드 활용',
              '📥 native에서의 메시지 수신: WebViewMessageEvent를 통한 처리',
              '📡 native에서 web으로의 응답: postMessage를 통한 메시지 전송',
              '⚠️ 에러 처리: try-catch를 통한 안정적인 에러 핸들링',
            ],
          },
          {
            title: '⚙️ 구현 포인트',
            items: [
              '🎯 메시지 타입 기반의 이벤트 처리',
              '📝 JSON 형식의 메시지 구조화',
              '⏳ 비동기 처리와 에러 핸들링',
              '🔄 WebView 리로드 기능 구현',
            ],
          },
        ],
      },
    ],
  },
  AiTalk: {
    detailImages: [
      './AiTalkDetail/1.png',
      './AiTalkDetail/2.png',
      './AiTalkDetail/3.png',
      './AiTalkDetail/4.png',
      './AiTalkDetail/5.png',
      './AiTalkDetail/6.png',
      './AiTalkDetail/7.png',
      './AiTalkDetail/8.png',
    ],
    projectBackground: {
      question:
        '팀원 중 한명의 친구였던 언어치료사분의 이러한 불편함을 해결하기 위해 AI 기반 언어치료교구 개발 프로젝트가 시작되었습니다. ',
      existingProblems: {
        description:
          '기존의 언어 치료는 치료에 필요한 실물 도구(책이나 이미지 카드 등)를 활용해 진행했습니다.',
        issues: [
          '그런데 이러한 실물 도구는 대게 비싼 가격이고 가지고 다니기 불편했으며 치료 대상인 아이의 주의를 끌기 어렵다는 단점이 있습니다. ',
        ],
      },
      solutions: {
        conclusion:
          '치료 대상 아이의 주의를 끌고 하나의 기기에서 다양한 치료 도구를 활용할 수 있도록 구현하였습니다.',
        solution: [
          'NFC 칩이 내장된 이미지 카드를 태그하면 해당 카드에 매핑된 이미지를 화면이 띄웁니다. 이후 동사 또는 문장을 제작하는 치료를 진행할 수 있습니다.',
          '내장된 카메라를 활용해 치료실 주변의 객체를 인식해 이미지를 생성합니다. 이후 동사 또는 문장을 제작하는 치료를 진행할 수 있습니다.',
          '동실이 캐릭터와 함께 이야기를 주고받을 수 있습니다. 이 과정은 언어치료사가 없는 상황에서도 언어치료를 진행할 수 있도록 돕습니다. ',
        ],
      },
    },
    troubleshootingItems: [
      {
        title: '인간관계 갈등 상황 문제',
        description:
          'SSAFY 첫번째 프로젝트다 보니 각자 모르는 사람들이 많았고 그렇다보니 인간성에 대한 부분과 더불어 역량적인 부분에서 경계심이 컸습니다. 자연스럽게 매끄러운 소통이 일어나기 힘들었고 인간관계적인 부분에서 가장 큰 트러블을 겪었던 프로젝트였습니다.',
        solution:
          '인간성과 역량적인 부분에서의 경계심은 그간의 트러블에 비해 자연히 해결되었습니다. 시간이 지나면서 각자 자신이 맡은 파트에 대해 집중하다 보니 서로의 역량에 대한 인정과 동일 목표에 대해 몰입하는 서로를 보며 인간적인 부분에서의 경계심은 허물어졌습니다. 결과적으로 팀원 모두 OnDevice 환경에 대한 지식이 전혀 없는 상태에서 안갯속을 걷는 듯한 상황 속에서 프로젝트를 진행했지만 프로젝트 컨설턴트님과 코치님, 그리고 긍정적인 팀원들 덕분에 최종 기한까지 기획했던 MVP 기능들을 모두 완성할 수 있었고 결과 또한 우수하여 프로젝트 우수상을 받을 수 있었습니다.',
      },
    ],
  },
  떡볶이4U: {
    detailImages: ['./TteokDetail/1.png', './TteokDetail/2.png'],
    projectBackground: {
      question:
        '기획에 대해 팀원들과 토의하기에 앞서 아이스브레이킹을 위해 각자의 취미가 무엇인지, 좋아하는 음식은 무엇인지, 취업하고 싶은 기업은 어디인지 등등을 서로에게 묻는 시간을 가졌습니다. 그러던 중 우리 모두가 좋아하는 음식으로 떡볶이 등 분식이 있다는 점을 발견했고 “좋아하는 것에 대한 프로젝트라면 모두가 즐겁게 프로젝트에 몰입할 수 있지 않을까?” 라는 물음으로 시작으로 프로젝트가 시작했습니다.',
      existingProblems: {
        description:
          '사용자들이 자신의 지역에서 맛있는 떡볶이 맛집을 쉽게 찾고, 실제 방문 후기와 평점을 통해 신뢰성 있는 정보를 얻을 수 있도록 개발되었습니다.',
        issues: [],
      },
      solutions: {
        conclusion:
          '떡볶이 등의 분식의 기본적인 특징이 종류가 다양한 반면 혼자서는 다양하게 시키지 못한다는 단점이 존재했습니다.',
        solution: [
          '이러한 문제를 해결하기 위해  분식 LOVER 들의 커뮤니티 앱 제작이 메인 프로젝트 방향성이 되었습니다.',
        ],
      },
    },
    troubleshootingItems: [
      {
        title:
          '핵심 기능인 실시간 메세지 기반 커뮤니티를 의사소통 부재로 구현하지 못할 뻔 했던 상황',
        description:
          '해당 파트를 맡았던 팀원이 데일리 미팅 및 회고 때는 공유하지 않다가 마감 일정 일주일 전 역량이 안되어 구현하지 못하겠다고 선언하였습니다. 해당 기능은 프로젝트의 핵심이었기 때문에 누군가는 총대를 매고 구현해야만 했습니다.',
        solution: [
          '짧은 시간 내에 안정성 높은 실시간 채팅 서비스를 구현하기 위해 예시가 잘 주어져 있는 MessageKit 라이브러리를 활용했고 실제 데모 프로젝트에 적용하면서 단계적으로 설명이 정리되어 있었던 외부 블로그를 활용해 하루 내 구현을 완료했습니다.',
          '이후 UI/UX 측면과 많은 버그를 처리하며 마감일정에 맞춰 앱을 배포할 수 있었습니다. ',
        ],
        technicalDetails: [
          {
            title: '느낀점',
            items: [
              '아무래도 화상 기반의 부트캠프의 특성상 본인의 성과를 숨기려고 마음먹으면 충분히 숨길 수 있다는 사실을 어느정도 인지하고 있었어야 했는데 팀원 모두 각자가 맡은 파트를 해결하느라 제대로 확인이 불가능했던 것 같습니다. ',
              '친목적인 부분과는 별개로 성과와 관련한 회의에서는 조금 더 서로 날카로워 질 필요가 있다는 사실을 뼈저리게 느끼는 프로젝트였습니다.',
            ],
          },
        ],
      },
      {
        title: '🚫 앱 등록 심사 거절 대응',
        description:
          '앱의 핵심 기능 접근을 위한 계정 기반 로그인 요구사항으로 인한 심사 거절 문제가 발생했습니다.',
        solution: [
          '게스트 로그인 모드 추가: 로그인 없이 기본 기능 이용 가능',
          'Firebase 보안 규칙 재점검 및 Auth 관련 규칙 수정',
          '게스트 모드 제한 기능에 대한 명확한 안내 추가',
        ],
        technicalDetails: [
          {
            title: '👥 게스트 모드 구현',
            items: [
              '게스트 로그인 버튼 추가 및 관련 UI 구현',
              '스크랩, 북마크, 채팅 등 제한 기능에 대한 alert 안내',
              '로그인 유도 메시지 및 프로세스 구현',
            ],
          },
          {
            title: '🛡️ 보안 강화',
            items: [
              'Firebase Auth 관련 보안 규칙 재검토',
              '데모 계정 및 테스트 환경 구성',
              '보안 취약점 점검 및 보완',
            ],
          },
        ],
      },
      {
        title: '⚠️ 앱 업데이트 심사 거절 대응',
        description:
          '약관 동의 및 부적절한 콘텐츠 관리에 대한 요구사항으로 인한 심사 거절 문제가 발생했습니다.',
        solution: [
          '개인정보 이용약관 페이지 구현 및 필수 동의 프로세스 추가',
          '커뮤니티 신고 및 차단 기능 구현',
          '관리자 계정 생성 및 콘텐츠 관리 시스템 구축',
        ],
        technicalDetails: [
          {
            title: '📋 약관 및 신고 시스템',
            items: [
              '회원가입 시 필수 약관 동의 페이지 구현',
              '리뷰글, 채팅방 메시지 신고 기능 구현',
              '신고 3회 누적 또는 성적/폭력성 사유 즉시 차단 로직 구현',
            ],
          },
          {
            title: '👮 관리자 시스템',
            items: [
              '관리자 계정 생성 및 권한 설정',
              '신고된 유저 및 게시글 관리 화면 구현',
              '커뮤니티 지역채팅 관리 기능 구현',
            ],
          },
          {
            title: '🚫 차단 기능',
            items: [
              '사용자 간 차단 기능 구현',
              '마이페이지에서 차단 유저 관리 기능',
              '차단된 콘텐츠 필터링 시스템 구현',
            ],
          },
        ],
      },
    ],
  },
};
