import { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';
import ProjectContent from './ProjectContent';
import type { CardData } from './CarouselContent';

interface CarouselLayoutProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  cardData: CardData[];
  onSelectionChange?: (isSelected: boolean) => void;
}

// fullpage API 타입 정의
interface FullpageApi {
  setAllowScrolling: (flag: boolean) => void;
  setKeyboardScrolling: (flag: boolean) => void;
}

const CarouselLayout = ({
  containerRef,
  cardData,
  onSelectionChange,
}: CarouselLayoutProps) => {
  const [selected, setSelected] = useState<null | number>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    onSelectionChange?.(selected !== null);
  }, [selected, onSelectionChange]);

  // 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // fullpage 스크롤 제어
  useEffect(() => {
    const fullpageApi = (
      window as typeof window & { fullpage_api?: FullpageApi }
    ).fullpage_api;

    if (fullpageApi) {
      if (selected !== null) {
        // 디테일 슬라이드가 열렸을 때 fullpage 스크롤 비활성화
        fullpageApi.setAllowScrolling(false);
        fullpageApi.setKeyboardScrolling(false);
      } else {
        // 디테일 슬라이드가 닫혔을 때 fullpage 스크롤 활성화
        fullpageApi.setAllowScrolling(true);
        fullpageApi.setKeyboardScrolling(true);
      }
    }
  }, [selected]);

  // 모바일에서 카드 위치에 따른 슬라이드 위치 계산
  const getSlidePosition = (cardIndex: number) => {
    if (!isMobile) return {};

    // 모바일에서는 세로 배치이므로 카드의 세로 위치를 계산
    const cardHeight = 500; // 모바일 카드 높이 (h-[500px])
    const cardGap = 24; // gap-6 = 24px
    const topOffset = cardIndex * (cardHeight + cardGap);

    return {
      top: `${topOffset}px`,
    };
  };

  return (
    <div className='relative w-full h-full'>
      {/* 카드 그리드 */}
      <div
        ref={containerRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1440px] mx-auto px-4 transition-all duration-500 ${
          selected !== null ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {cardData.map((card, idx) => (
          <CarouselCard key={idx} {...card} onClick={() => setSelected(idx)} />
        ))}
      </div>

      {/* 프로젝트 상세 내용 - 클릭된 카드 위치에 맞게 배치 */}
      {selected !== null && (
        <div
          className={`absolute left-0 w-full flex justify-center transition-all duration-500 z-50 p-4 ${
            isMobile ? '' : 'inset-0 items-center'
          }`}
          style={getSlidePosition(selected)}
          onClick={() => setSelected(null)}
        >
          <div
            className='bg-white dark:bg-dark-card rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[1100px] max-h-[80vh] overflow-y-auto p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-600'
            onClick={(e) => e.stopPropagation()}
          >
            {/* 오른쪽 위 고정 닫기 버튼 */}
            <button
              className='sticky top-4 right-4 float-right z-10 text-2xl sm:text-3xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-200 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600 hover:scale-110'
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className='clear-both mb-4 sm:mb-6'></div>

            {cardData[selected].projectContent && (
              <ProjectContent
                {...cardData[selected].projectContent}
                techStack={cardData[selected].techStack}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselLayout;
