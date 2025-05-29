import { memo } from "react";
import { motion } from "framer-motion";
import { ABOUT_ME_CONTENT } from "../../../constants/thirdPage.constants";

interface AboutMeTextProps {
  isVisible: boolean;
}

const AboutMeText = memo(({ isVisible }: AboutMeTextProps) => {
  return (
    <>
      {/* 구분선 */}
      <motion.div
        className="w-full max-w-6xl mx-auto px-2 py-4"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={
          isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
        }
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          contain: "layout style",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <div className="h-1 bg-gradient-to-r from-transparent via-gray-400/80 to-transparent rounded-full"></div>
      </motion.div>

      {/* About Me 텍스트 섹션 */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-4 text-left sticky top-0"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{
          contain: "layout style",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <h2 className="text-1xl md:text-2xl font-bold mb-8 text-gray-200 dark:text-dark-text">
          {ABOUT_ME_CONTENT.title}
        </h2>

        <div className="space-y-6 text-gray-300 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
          {ABOUT_ME_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </>
  );
});

AboutMeText.displayName = "AboutMeText";

export default AboutMeText;
