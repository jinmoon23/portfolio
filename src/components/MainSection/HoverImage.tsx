import { motion } from "framer-motion";
import { useState } from "react";

interface HoverImageProps {
  src: string;
  alt: string;
  tooltipText: string[];
  position?: "left" | "right";
}

const HoverImage = ({
  src,
  alt,
  tooltipText,
  position = "left",
}: HoverImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <motion.img
        src={src}
        alt={alt}
        className="h-12 w-16 sm:h-16 sm:w-24 md:h-24 md:w-36 object-contain rounded-lg"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      {isHovered && (
        <motion.div
          className={`absolute top-full mt-2 ${
            position === "left" ? "left-0" : "right-0"
          } bg-gray-200 text-gray-900 py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm whitespace-normal text-left min-w-[180px] sm:min-w-[220px] z-50 shadow-lg`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {tooltipText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default HoverImage;
