import { useState } from "react";
import CarouselCard from "./CarouselCard";
import Modal from "./Modal";

const cardData = [
  {
    title: "SSAFY 12th, 자율 프로젝트",
    subtitle: "쉽게 사용하고. 쉽게 확인하고",
    serviceName: "달디단",
    img: "/daldidan.png",
    bg: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400",
  },
  {
    title: "SSAFY 12th, 특화 프로젝트",
    subtitle: "더 쉽게, 마음까지 담아",
    serviceName: "또가게",
    img: "/daldidan.png",
    bg: "bg-gradient-to-br from-teal-300 via-blue-300 to-indigo-400",
    text: "text-white",
  },
  {
    title: "SSAFY 12th, 공통 프로젝트",
    subtitle: "태그하고, 보여주고, 대화하고",
    serviceName: "AiTalk",
    img: "/daldidan.png",
    bg: "bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-300",
  },
  {
    title: "내일배움캠프 배포 프로젝트",
    subtitle: "떡볶이 좋아하는사람 여기 모여라!",
    serviceName: "떡볶이4U",
    img: "/daldidan.png",
    bg: "bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-500",
  },
];

interface CarouselProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const VISIBLE_COUNT = 2;

const Carousel = ({ containerRef }: CarouselProps) => {
  const [selected, setSelected] = useState<null | number>(null);
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(0, cardData.length - VISIBLE_COUNT);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex items-center justify-center w-full gap-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="왼쪽으로 이동"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div ref={containerRef} className="flex gap-6 w-[720px] justify-center">
          {cardData.slice(current, current + VISIBLE_COUNT).map((card, idx) => (
            <div key={current + idx} onClick={() => setSelected(current + idx)}>
              <CarouselCard {...card} />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="오른쪽으로 이동"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      {selected !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <Modal card={cardData[selected]} onClose={() => setSelected(null)} />
        </div>
      )}
    </div>
  );
};

export default Carousel;
