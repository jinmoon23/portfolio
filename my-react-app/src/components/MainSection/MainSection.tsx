import { useRef, useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import PageNavigation from "./PageNavigation";

const MainSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 2;

  const handlePageChange = (direction: "prev" | "next") => {
    if (containerRef.current) {
      const newPage =
        direction === "next"
          ? Math.min(currentPage + 1, totalPages - 1)
          : Math.max(currentPage - 1, 0);

      const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: containerWidth * newPage,
        behavior: "smooth",
      });
      setCurrentPage(newPage);
    }
  };

  return (
    <main className="relative flex items-center justify-center bg-black rounded-3xl mx-4 md:mx-8 h-screen min-h-[700px] max-h-[700px] overflow-hidden">
      {/* 컨텐츠 컨테이너 */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-12">
        <div className="w-full overflow-x-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            <FirstPage />
            <SecondPage currentPage={currentPage} />
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
