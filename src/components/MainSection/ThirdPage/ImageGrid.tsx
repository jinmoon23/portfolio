import { memo } from "react";
import type { RandomTransform } from "../../../types/thirdPage.types";
import OptimizedImage from "./OptimizedImage";

interface ImageGridProps {
  images: readonly string[];
  isVisible: boolean;
  randomTransforms: RandomTransform[];
}

const ImageGrid = memo(
  ({ images, isVisible, randomTransforms }: ImageGridProps) => {
    return (
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 pb-10"
        style={{
          contain: "layout style",
          transform: "translate3d(0, 0, 0)", // GPU 레이어 강제 생성
        }}
      >
        {images.map((src, idx) => (
          <OptimizedImage
            key={idx}
            src={src}
            index={idx}
            isVisible={isVisible}
            randomTransform={randomTransforms[idx]}
          />
        ))}
      </div>
    );
  }
);

ImageGrid.displayName = "ImageGrid";

export default ImageGrid;
