import { useEffect, useRef } from "react";
import type { ScrollControlOptions } from "../types/thirdPage.types";
import { SCROLL_CONFIG } from "../constants/thirdPage.constants";
import { checkScrollPosition } from "../utils/thirdPage.utils";

export const useScrollControl = (options: ScrollControlOptions = {}) => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  const {
    debounceDelay = SCROLL_CONFIG.DEBOUNCE_DELAY,
    touchEndDelay = SCROLL_CONFIG.TOUCH_END_DELAY,
    scrollThreshold = SCROLL_CONFIG.SCROLL_THRESHOLD,
  } = options;

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (!scrollableElement) return;

    let isScrollingDisabled = false;
    let scrollTimeout: NodeJS.Timeout;
    let ticking = false;

    const setFullPageScrolling = (enable: boolean) => {
      if (isScrollingDisabled === !enable) return;

      isScrollingDisabled = !enable;
      if (window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(enable);
        window.fullpage_api.setKeyboardScrolling(enable);
      }
    };

    const handleMouseEnter = () => {
      setFullPageScrolling(false);
    };

    const handleMouseLeave = () => {
      setFullPageScrolling(true);
    };

    const handleTouchStart = () => {
      setFullPageScrolling(false);
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        setFullPageScrolling(true);
      }, touchEndDelay);
    };

    // RAF를 사용한 최적화된 스크롤 핸들러
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          clearTimeout(scrollTimeout);

          scrollTimeout = setTimeout(() => {
            const { isAtBottom, isAtTop } =
              checkScrollPosition(scrollableElement);

            if (isAtBottom || isAtTop) {
              setFullPageScrolling(true);
            } else {
              setFullPageScrolling(false);
            }
          }, debounceDelay);

          ticking = false;
        });

        ticking = true;
      }
    };

    scrollableElement.addEventListener("mouseenter", handleMouseEnter);
    scrollableElement.addEventListener("mouseleave", handleMouseLeave);
    scrollableElement.addEventListener("touchstart", handleTouchStart);
    scrollableElement.addEventListener("touchend", handleTouchEnd);
    scrollableElement.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(scrollTimeout);
      scrollableElement.removeEventListener("mouseenter", handleMouseEnter);
      scrollableElement.removeEventListener("mouseleave", handleMouseLeave);
      scrollableElement.removeEventListener("touchstart", handleTouchStart);
      scrollableElement.removeEventListener("touchend", handleTouchEnd);
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, [debounceDelay, touchEndDelay, scrollThreshold]);

  return { scrollableRef };
};
