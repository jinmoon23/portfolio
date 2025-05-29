import { useEffect } from "react";
import { preloadImages } from "../utils/thirdPage.utils";
import { SCROLL_CONFIG } from "../constants/thirdPage.constants";

export const useImagePreloader = (
  imagePaths: readonly string[],
  count: number = SCROLL_CONFIG.EAGER_LOAD_COUNT
) => {
  useEffect(() => {
    preloadImages(imagePaths, count);
  }, [imagePaths, count]);
};
