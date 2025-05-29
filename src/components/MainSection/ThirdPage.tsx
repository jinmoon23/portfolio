import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// fullPage API 타입 확장
declare global {
  interface Window {
    fullpage_api?: {
      setAllowScrolling: (allow: boolean) => void;
      setKeyboardScrolling: (allow: boolean) => void;
      moveSectionDown: () => void;
      moveSectionUp: () => void;
      moveTo: (section: number) => void;
    };
  }
}

const images = [
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
];

// 각 이미지마다 다른 애니메이션 시작점 생성
const getRandomTransform = (index: number) => {
  const directions = [
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

  return directions[index % directions.length];
};

const ThirdPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  // 스크롤 영역에서 전체 스크롤 제어
  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (!scrollableElement) return;

    let isScrollingDisabled = false;
    let scrollTimeout: NodeJS.Timeout;

    const setFullPageScrolling = (enable: boolean) => {
      if (isScrollingDisabled === !enable) return; // 상태가 같으면 아무것도 하지 않음

      isScrollingDisabled = !enable;
      if (window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(enable);
        window.fullpage_api.setKeyboardScrolling(enable);
      }
    };

    const handleMouseEnter = () => {
      setFullPageScrolling(false);
    };

    const handleMouseLeave = () => {
      setFullPageScrolling(true);
    };

    const handleTouchStart = () => {
      setFullPageScrolling(false);
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        setFullPageScrolling(true);
      }, 100);
    };

    // 스크롤 끝 감지 - 쓰로틀링 적용
    const handleScroll = () => {
      // 이전 타이머 클리어
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const { scrollTop, scrollHeight, clientHeight } = scrollableElement;
        const isAtBottom =
          Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
        const isAtTop = scrollTop < 10;

        if (isAtBottom || isAtTop) {
          setFullPageScrolling(true);
        } else {
          setFullPageScrolling(false);
        }
      }, 50); // 50ms 쓰로틀링
    };

    scrollableElement.addEventListener("mouseenter", handleMouseEnter);
    scrollableElement.addEventListener("mouseleave", handleMouseLeave);
    scrollableElement.addEventListener("touchstart", handleTouchStart);
    scrollableElement.addEventListener("touchend", handleTouchEnd);
    scrollableElement.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(scrollTimeout);
      scrollableElement.removeEventListener("mouseenter", handleMouseEnter);
      scrollableElement.removeEventListener("mouseleave", handleMouseLeave);
      scrollableElement.removeEventListener("touchstart", handleTouchStart);
      scrollableElement.removeEventListener("touchend", handleTouchEnd);
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollableRef}
      className="w-full min-h-full px-4"
      style={{ minHeight: "100vh" }}
    >
      <div ref={containerRef} className="w-full">
        <div className="flex items-center mb-6 sticky bg-black/80 backdrop-blur-sm z-10">
          <h1 className="text-[6vw] md:text-[6vw] font-bold mr-4 text-gray-200 dark:text-dark-text">
            About Me
          </h1>
          <span className="text-[6vw] md:text-[6vw]">🍭</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 pb-10">
          {images.map((src, idx) => {
            const randomTransform = getRandomTransform(idx);
            return (
              <div
                key={idx}
                className={`rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isVisible
                    ? "opacity-100 scale-100 rotate-0 translate-x-0 translate-y-0 blur-0"
                    : "opacity-0 scale-75 blur-sm"
                }`}
                style={{
                  aspectRatio: "4/3",
                  transitionDelay: isVisible ? `${idx * 80}ms` : "0ms",
                  transform: !isVisible
                    ? `translateX(${randomTransform.x}px) translateY(${randomTransform.y}px) rotate(${randomTransform.rotate}deg) scale(0.75)`
                    : "translateX(0) translateY(0) rotate(0deg) scale(1)",
                }}
              >
                <img
                  src={src}
                  alt={`about-${idx}`}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
                />
              </div>
            );
          })}
        </div>

        {/* 구분선 */}
        <motion.div
          className="w-full max-w-6xl mx-auto px-2 py-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={
            isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
          }
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-gray-400/80 to-transparent rounded-full"></div>
        </motion.div>

        {/* About Me 텍스트 섹션 */}
        <motion.div
          className="max-w-4xl mx-auto px-4 py-4 text-left sticky top-0"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h2 className="text-1xl md:text-2xl font-bold mb-8 text-gray-200 dark:text-dark-text">
            작은 시작, 큰 연결
          </h2>

          <div className="space-y-6 text-gray-300 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            <p>
              프론트엔드 개발자로서, 작은 디테일이 사용자 경험을 더욱 풍부하게
              만들고 자연스러운 소통을 이끌어낸다고 믿습니다. 화면의 섬세한
              요소와 직관적인 상호작용을 통해, 더 많은 사람들이 편리하고 즐겁게
              사용할 수 있는 서비스를 만들기 위해 꾸준히 고민하고 있습니다.
            </p>

            <p>
              모든 개인은 자신만의 특별한 추억과 경험을 가지고 있습니다. 각자의
              특별함이 모여 더 나은 세상을 만들어가는 것처럼, 저는 이러한
              특별함을 기술로 연결하고 내일로 이어질 수 있는 서비스를 개발하고자
              합니다.
            </p>

            <p>
              '사용자들이 어떤 서비스를 필요로 할까?', '어떤 경험이 특별하게
              다가올까?'와 같은 질문들을 탐험들과 함께 고민하며, 더 나은 결과를
              만들어내기 위해 노력합니다.
            </p>

            <p>
              사용자 피드백을 기반으로 기술을 개선하고, 테스트를 통해 부족한
              부분을 보완하며, 점진적으로 발전하는 서비스를 만드는 것이 저의
              목표입니다. 이렇게 사용자와 팀 모두가 만족할 수 있는 결과를 함께
              이루어가고 싶습니다.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center py-2">
        <motion.button
          className="text-2xl md:text-3xl text-white/70 dark:text-gray-400 transition-colors drop-shadow-lg block hover:text-white hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            console.log("Button clicked!", window.fullpage_api);
            if (window.fullpage_api) {
              console.log("Moving to next section...");
              window.fullpage_api.moveSectionDown();
            } else {
              console.log("fullpage_api not available");
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↓
        </motion.button>
      </div>
    </div>
  );
};

export default ThirdPage;
