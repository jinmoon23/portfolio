import { useState, useCallback, useMemo, memo } from "react";
import type { OptimizedImageProps } from "../../../types/thirdPage.types";
import {
  createAnimationStyle,
  createImageStyle,
} from "../../../utils/thirdPage.utils";
import {
  ANIMATION_CONFIG,
  SCROLL_CONFIG,
} from "../../../constants/thirdPage.constants";

const OptimizedImage = memo(
  ({ src, index, isVisible, randomTransform }: OptimizedImageProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageLoad = useCallback(() => {
      setImageLoaded(true);
    }, []);

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    // 애니메이션 스타일 메모이제이션
    const animationStyle = useMemo(
      () => createAnimationStyle(isVisible, index, randomTransform),
      [isVisible, index, randomTransform]
    );

    const imageStyle = useMemo(() => createImageStyle(isHovered), [isHovered]);

    return (
      <div
        className={`rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-[${
          ANIMATION_CONFIG.ANIMATION_DURATION
        }ms] ease-[${ANIMATION_CONFIG.ANIMATION_EASING}] ${
          isVisible && imageLoaded
            ? "opacity-100 scale-100 rotate-0 translate-x-0 translate-y-0 blur-0"
            : "opacity-0 scale-75 blur-sm"
        }`}
        style={{
          aspectRatio: "4/3",
          contain: "layout style paint",
          ...animationStyle,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={src}
          alt={`about-${index}`}
          className={`w-full h-full object-cover transition-all duration-[${ANIMATION_CONFIG.HOVER_TRANSITION_DURATION}ms]`}
          style={imageStyle}
          onLoad={handleImageLoad}
          loading={index < SCROLL_CONFIG.EAGER_LOAD_COUNT ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
