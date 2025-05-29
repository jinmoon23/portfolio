import { useRef, useState } from "react";
import Carousel from "./Carousel";

const CarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSlideActive, setIsSlideActive] = useState(false);

  return (
    <section className="relative w-full h-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 flex flex-col">
      {/* 상단 제목 */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center relative z-10">
        알면 알수록, 진문.
      </h2>

      {/* 캐러셀 컨테이너 - 고정 높이로 설정 */}
      <div className="relative w-full flex-1 min-h-[600px] sm:min-h-[650px] md:min-h-[700px]">
        <Carousel
          containerRef={containerRef}
          onSelectionChange={setIsSlideActive}
        />
      </div>

      {/* 하단 화살표 */}
      {!isSlideActive && (
        <div className="flex justify-center mt-2 z-10 relative">
          <span className="animate-bounce text-2xl sm:text-3xl text-gray-400">
            ↓
          </span>
        </div>
      )}
    </section>
  );
};

export default CarouselSection;
