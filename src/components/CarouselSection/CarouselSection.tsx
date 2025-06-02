import { useRef, useState } from 'react';
import Carousel from './Carousel';

const CarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSlideActive, setIsSlideActive] = useState(false);

  return (
    <section
      className={`relative w-full h-full px-4 sm:px-6 md:px-8 flex flex-col transition-all duration-300 ${
        isSlideActive ? 'py-4 sm:py-6 md:py-8' : 'py-12 sm:py-16 md:py-24'
      }`}
    >
      {/* 상단 제목 - 슬라이드가 비활성화일 때만 표시 */}
      {!isSlideActive && (
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center relative z-10'>
          알면 알수록, 진문.
        </h2>
      )}

      {/* 캐러셀 컨테이너 - 슬라이드 상태에 따라 높이 동적 조절 */}
      <div
        className={`relative w-full flex-1 transition-all duration-300 ${
          isSlideActive
            ? 'min-h-[1000px] sm:min-h-[1100px] md:min-h-[1200px]'
            : 'min-h-[600px] sm:min-h-[650px] md:min-h-[700px]'
        }`}
      >
        <Carousel
          containerRef={containerRef}
          onSelectionChange={setIsSlideActive}
        />
      </div>

      {/* 하단 화살표 */}
      {!isSlideActive && (
        <div className='flex justify-center mt-2 z-10 relative'>
          <span className='animate-bounce text-2xl sm:text-3xl text-gray-400'>
            ↓
          </span>
        </div>
      )}
    </section>
  );
};

export default CarouselSection;
