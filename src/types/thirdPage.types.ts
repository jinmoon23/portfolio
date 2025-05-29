// ThirdPage 컴포넌트와 관련된 타입 정의들

// fullPage API 타입 확장
declare global {
  interface Window {
    fullpage_api?: {
      setAllowScrolling: (allow: boolean) => void;
      setKeyboardScrolling: (allow: boolean) => void;
      moveSectionDown: () => void;
      moveSectionUp: () => void;
      moveTo: (section: number) => void;
    };
  }
}

export interface RandomTransform {
  x: number;
  y: number;
  rotate: number;
}

export interface OptimizedImageProps {
  src: string;
  index: number;
  isVisible: boolean;
  randomTransform: RandomTransform;
}

export interface AnimationStyle {
  transitionDelay: string;
  transform: string;
  willChange: string;
}

export interface ImageStyle {
  transform: string;
  filter: string;
  willChange: string;
}

export interface ThirdPageAnimations {
  isVisible: boolean;
  randomTransforms: RandomTransform[];
}

export interface ScrollControlOptions {
  debounceDelay?: number;
  touchEndDelay?: number;
  scrollThreshold?: number;
}
