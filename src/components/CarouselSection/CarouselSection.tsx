import { useRef, useState } from "react";
import Carousel from "./Carousel";

const CarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSlideActive, setIsSlideActive] = useState(false);

  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* 상단 장식 라인 */}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-10 text-center relative z-10">
        알면 알수록, 진문.
      </h2>
      <div className="relative z-10">
        <Carousel
          containerRef={containerRef}
          onSelectionChange={setIsSlideActive}
        />
      </div>
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
