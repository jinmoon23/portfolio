import { useEffect, useRef, useState } from "react";
import { ANIMATION_CONFIG } from "../constants/thirdPage.constants";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    threshold = ANIMATION_CONFIG.INTERSECTION_THRESHOLD,
    rootMargin = ANIMATION_CONFIG.INTERSECTION_ROOT_MARGIN,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [threshold, rootMargin]);

  return { isVisible, containerRef };
};
