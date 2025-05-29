import { useState } from "react";
import CarouselCard from "./CarouselCard";
import ProjectContent from "./ProjectContent";
import type { CardData } from "./CarouselContent";

interface CarouselLayoutProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  cardData: CardData[];
}

const CarouselLayout = ({ containerRef, cardData }: CarouselLayoutProps) => {
  const [selected, setSelected] = useState<null | number>(null);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        ref={containerRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1440px] px-4 transition-all duration-300 ${
          selected !== null ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {cardData.map((card, idx) => (
          <CarouselCard key={idx} {...card} onClick={() => setSelected(idx)} />
        ))}
      </div>

      {/* 프로젝트 상세 내용 */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          selected !== null
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        onClick={() => setSelected(null)}
      >
        {selected !== null && (
          <div
            className="bg-white dark:bg-dark-card rounded-3xl shadow-2xl w-[95vw] max-w-[1100px] min-h-[420px] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cardData[selected].title}
                </h2>
                <h3 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white">
                  {cardData[selected].subtitle}
                </h3>
                <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
                  {cardData[selected].serviceName}
                </p>
              </div>
              <button
                className="text-3xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>

            {cardData[selected].projectContent && (
              <ProjectContent {...cardData[selected].projectContent} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselLayout;
