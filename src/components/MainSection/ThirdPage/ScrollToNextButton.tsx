import { memo, useCallback } from "react";
import { motion } from "framer-motion";

const ScrollToNextButton = memo(() => {
  const handleClick = useCallback(() => {
    console.log("Button clicked!", window.fullpage_api);
    if (window.fullpage_api) {
      console.log("Moving to next section...");
      window.fullpage_api.moveSectionDown();
    } else {
      console.log("fullpage_api not available");
    }
  }, []);

  return (
    <div className="flex justify-center py-2">
      <motion.button
        className="text-2xl md:text-3xl text-white/70 dark:text-gray-400 transition-colors drop-shadow-lg block hover:text-white hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      >
        ↓
      </motion.button>
    </div>
  );
});

ScrollToNextButton.displayName = "ScrollToNextButton";

export default ScrollToNextButton;
