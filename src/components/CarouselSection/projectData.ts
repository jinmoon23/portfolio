export interface ProjectImages {
  detailImages: string[];
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
    troubleshootingItems: [
      {
        title: '🤖 react-native-vision-camera FrameProcessor 성능 최적화',
        description:
          '프레임 당 사과 객체 인식 모델이 동작하도록 구현해야 했으나, 무거운 모델 사용 시 카메라뷰가 끊기는 문제가 발생했습니다.',
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
        imageUrl: './daldidanDetail/7.png',
        technicalDetails: [
          {
            title: '📊 성능 요구사항',
            items: [
              '🎥 실시간 카메라뷰 기준 1초에 60 프레임 이상',
              '⏱️ 1프레임 == 1/60초 == 16ms',
              '⚡️ EfficientDet lite 0 모델 처리 시간: 36.77ms',
            ],
          },
          {
            title: '🔧 최적화 전략',
            items: [
              '📦 react-native-fast-tflite 라이브러리 활용',
              '🤖 모바일용 양자화된 EfficientDet lite 0 모델 사용',
              '⚙️ FrameProcessor의 SAMPLE_RATE 조절로 성능 최적화',
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
    troubleshootingItems: [
      {
        title: '🔐 FaceId 응답 지연 문제',
        description:
          'FaceId 응답을 기다리는 동안 사용자 경험이 저하되는 문제가 있었습니다.',
        solution:
          '🎭 FaceId 인식이 진행되는 동안 적절한 애니메이션을 적용하여 사용자 경험을 개선하였습니다.',
      },
    ],
  },
  떡볶이4U: {
    detailImages: ['./TteokDetail/1.png', './TteokDetail/2.png'],
    troubleshootingItems: [
      {
        title: '⚡️ 앱 로딩 성능 최적화',
        description:
          '첫 로드가 느리고 런치스크린 이후에도 추가 로딩 시간이 발생하여 앱이 느려 보이는 문제가 있었습니다.',
        solution: [
          '🚀 추천 페이지 데이터 로딩 최적화: 필요한 데이터만 우선적으로 로드',
          '⏳ 상세 페이지 진입 시 데이터 로딩으로 변경하고 로딩 인디케이터 추가',
          '🖼️ 세부 페이지 이미지 최적화 작업 진행',
        ],
        technicalDetails: [
          {
            title: '🔧 최적화 전략',
            items: [
              '📱 SceneDelegate에서의 사전 로드 검토',
              '📊 데이터 로딩 전략 변경: 전체 데이터 → 필요한 데이터만 로드',
              '👁️ 로딩 상태 표시를 통한 사용자 경험 개선',
              '⚡️ 이미지 최적화를 통한 로딩 시간 단축',
            ],
          },
          {
            title: '🔮 향후 개선 방향',
            items: [
              '💾 싱글턴 패턴을 활용한 데이터 캐싱 구현',
              '🧠 메모리 관리를 통한 첫 로드 이후 성능 향상',
              '📈 데이터 프리페칭 전략 수립',
            ],
          },
        ],
      },
      {
        title: '🔥 Firebase 데이터 관리 최적화',
        description:
          'Firebase 데이터 처리 과정에서 발생한 여러 성능 문제들을 해결했습니다.',
        solution: [
          '🔄 FB order 필드 추가 및 removeAll을 통한 데이터 중복 문제 해결',
          '⚡️ 불필요한 Fetch 제거로 페이지 재진입 시 성능 개선',
          '🚀 데이터 로딩 전략 변경으로 첫 화면 로딩 시간 단축',
        ],
        technicalDetails: [
          {
            title: '🔍 문제 해결 과정',
            items: [
              '📊 FB 데이터 정렬 및 중복 제거',
              '🔄 불필요한 Fetch 제거 및 북마크 동기화 유지',
              '⚡️ 우선순위 기반 데이터 로딩 구현',
            ],
          },
          {
            title: '📈 성능 개선 결과',
            items: [
              '🎯 CardView 무작위 표시 문제 해결',
              '⚡️ 페이지 재진입 시 불필요한 Fetch 제거',
              '🚀 첫 화면 로딩 시간 단축',
            ],
          },
        ],
      },
      {
        title: '🚫 앱 등록 심사 거절 대응',
        description:
          '앱의 핵심 기능 접근을 위한 계정 기반 로그인 요구사항으로 인한 심사 거절 문제가 발생했습니다.',
        solution: [
          '👤 게스트 로그인 모드 추가: 로그인 없이 기본 기능 이용 가능',
          '🔒 Firebase 보안 규칙 재점검 및 Auth 관련 규칙 수정',
          'ℹ️ 게스트 모드 제한 기능에 대한 명확한 안내 추가',
        ],
        technicalDetails: [
          {
            title: '👥 게스트 모드 구현',
            items: [
              '🔘 게스트 로그인 버튼 추가 및 관련 UI 구현',
              '⚠️ 스크랩, 북마크, 채팅 등 제한 기능에 대한 alert 안내',
              '👉 로그인 유도 메시지 및 프로세스 구현',
            ],
          },
          {
            title: '🛡️ 보안 강화',
            items: [
              '�� Firebase Auth 관련 보안 규칙 재검토',
              '🧪 데모 계정 및 테스트 환경 구성',
              '🔍 보안 취약점 점검 및 보완',
            ],
          },
        ],
      },
      {
        title: '⚠️ 앱 업데이트 심사 거절 대응',
        description:
          '약관 동의 및 부적절한 콘텐츠 관리에 대한 요구사항으로 인한 심사 거절 문제가 발생했습니다.',
        solution: [
          '📜 개인정보 이용약관 페이지 구현 및 필수 동의 프로세스 추가',
          '🚨 커뮤니티 신고 및 차단 기능 구현',
          '👮 관리자 계정 생성 및 콘텐츠 관리 시스템 구축',
        ],
        technicalDetails: [
          {
            title: '📋 약관 및 신고 시스템',
            items: [
              '✅ 회원가입 시 필수 약관 동의 페이지 구현',
              '🚨 리뷰글, 채팅방 메시지 신고 기능 구현',
              '⛔️ 신고 3회 누적 또는 성적/폭력성 사유 즉시 차단 로직 구현',
            ],
          },
          {
            title: '👮 관리자 시스템',
            items: [
              '👤 관리자 계정 생성 및 권한 설정',
              '📊 신고된 유저 및 게시글 관리 화면 구현',
              '💬 커뮤니티 지역채팅 관리 기능 구현',
            ],
          },
          {
            title: '🚫 차단 기능',
            items: [
              '⛔️ 사용자 간 차단 기능 구현',
              '👤 마이페이지에서 차단 유저 관리 기능',
              '🔍 차단된 콘텐츠 필터링 시스템 구현',
            ],
          },
        ],
      },
    ],
  },
};
