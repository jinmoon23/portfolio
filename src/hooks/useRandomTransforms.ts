import { useMemo } from "react";
import type { RandomTransform } from "../types/thirdPage.types";
import { getRandomTransform } from "../utils/thirdPage.utils";

export const useRandomTransforms = (imageCount: number): RandomTransform[] => {
  return useMemo(
    () =>
      Array.from({ length: imageCount }, (_, index) =>
        getRandomTransform(index)
      ),
    [imageCount]
  );
};
