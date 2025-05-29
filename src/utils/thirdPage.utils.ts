import type {
  RandomTransform,
  AnimationStyle,
  ImageStyle,
} from "../types/thirdPage.types";
import { ANIMATION_DIRECTIONS } from "../constants/thirdPage.constants";

// 각 이미지마다 다른 애니메이션 시작점 생성 - 메모이제이션으로 최적화
export const getRandomTransform = (index: number): RandomTransform => {
  return ANIMATION_DIRECTIONS[index % ANIMATION_DIRECTIONS.length];
};

// 애니메이션 스타일 생성
export const createAnimationStyle = (
  isVisible: boolean,
  index: number,
  randomTransform: RandomTransform
): AnimationStyle => ({
  transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
  transform: !isVisible
    ? `translate3d(${randomTransform.x}px, ${randomTransform.y}px, 0) rotate(${randomTransform.rotate}deg) scale3d(0.75, 0.75, 1)`
    : "translate3d(0, 0, 0) rotate(0deg) scale3d(1, 1, 1)",
  willChange: isVisible ? "transform, opacity" : "auto",
});

// 이미지 호버 스타일 생성
export const createImageStyle = (isHovered: boolean): ImageStyle => ({
  transform: isHovered ? "scale3d(1.1, 1.1, 1)" : "scale3d(1, 1, 1)",
  filter: isHovered ? "brightness(1.1)" : "brightness(1)",
  willChange: isHovered ? "transform, filter" : "auto",
});

// 스크롤 위치 확인 유틸리티
export const checkScrollPosition = (element: HTMLDivElement) => {
  const { scrollTop, scrollHeight, clientHeight } = element;
  const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;
  const isAtTop = scrollTop < 10;
  return { isAtBottom, isAtTop };
};

// 이미지 프리로드 유틸리티
export const preloadImages = (
  imagePaths: readonly string[],
  count: number = 4
) => {
  imagePaths.slice(0, count).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// 디바운스 함수
export const createDebounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
