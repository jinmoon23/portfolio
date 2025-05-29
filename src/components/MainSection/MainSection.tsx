import { useRef, useState, useEffect } from "react";
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
    <main className="relative flex items-center justify-center bg-black dark:bg-gray-900 rounded-3xl mx-4 md:mx-8 h-screen min-h-[700px] max-h-[700px] overflow-hidden transition-colors">
      {/* 비디오 배경 - currentPage가 1일 때만 표시 */}
      {currentPage === 1 && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      )}

      {/* 컨텐츠 컨테이너 */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-12">
        <div className="w-full overflow-x-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            <FirstPage />
            {/* SecondPage 대신 간단한 페이지 */}
            <div className="w-full h-full flex-shrink-0 relative flex items-center justify-center">
              <div className="relative z-10">
                <span className="animate-bounce text-3xl text-white transition-colors drop-shadow-lg">
                  ↓
                </span>
              </div>
            </div>
            <ThirdPage />
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
