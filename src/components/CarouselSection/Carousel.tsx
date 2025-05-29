import CarouselLayout from "./CarouselLayout";
import { cardData } from "./CarouselContent";

interface CarouselProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const Carousel = ({ containerRef }: CarouselProps) => {
  return <CarouselLayout containerRef={containerRef} cardData={cardData} />;
};

export default Carousel;
