import CarouselLayout from "./CarouselLayout";
import { cardData } from "./CarouselContent";

interface CarouselProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onSelectionChange?: (isSelected: boolean) => void;
}

const Carousel = ({ containerRef, onSelectionChange }: CarouselProps) => {
  return (
    <CarouselLayout
      containerRef={containerRef}
      cardData={cardData}
      onSelectionChange={onSelectionChange}
    />
  );
};

export default Carousel;
