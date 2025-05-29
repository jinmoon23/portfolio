import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import FirstPage from "./FirstPage";
import ThirdPage from "./ThirdPage";
import PageNavigation from "./PageNavigation";

const MainSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const handlePageChange = (direction: "prev" | "next") => {
    const newPage =
      direction === "next"
        ? Math.min(currentPage + 1, totalPages - 1)
        : Math.max(currentPage - 1, 0);
    setCurrentPage(newPage);
  };

  // 비디오 재생 관리
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (currentPage === 1) {
      video.currentTime = 0;
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  }, [currentPage]);

  return (
    <main className="relative flex items-center justify-center bg-black dark:bg-black rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 md:mx-8 h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] max-h-[500px] sm:max-h-[600px] md:max-h-[700px] overflow-hidden transition-colors">
      {/* 비디오 배경 - currentPage가 1일 때만 표시 */}
      {currentPage === 1 && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl z-0"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      )}

      {/* 컨텐츠 컨테이너 */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-12 h-full ">
        <div className="w-full h-full overflow-x-hidden" ref={containerRef}>
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {/* FirstPage - 스크롤 없이 정확한 높이 */}
            <div className="w-full h-full flex-shrink-0 overflow-hidden">
              <FirstPage />
            </div>

            {/* SecondPage - 스크롤 가능한 컨테이너 */}
            <div className="w-full h-full flex-shrink-0 overflow-y-auto overflow-x-hidden relative flex items-end justify-center pb-4">
              <div className="relative z-10">
                <motion.span
                  className="text-2xl sm:text-3xl text-white transition-colors drop-shadow-lg block"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.span>
              </div>
            </div>

            {/* ThirdPage - ReactFullpage와 호환되는 스크롤 구조 */}
            <div
              className="w-full h-full flex-shrink-0 relative"
              style={{
                overflow: currentPage === 2 ? "auto" : "hidden",
                height: "100%",
              }}
            >
              <div className="w-full h-full overflow-y-auto overflow-x-hidden fp-scrollable">
                <ThirdPage />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageNavigation
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default MainSection;
