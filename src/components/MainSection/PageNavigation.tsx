import NextButton from "./NextButton";

interface PageNavigationProps {
  onPageChange: (direction: "prev" | "next") => void;
  currentPage: number;
  totalPages: number;
}

const PageNavigation = ({
  onPageChange,
  currentPage,
  totalPages,
}: PageNavigationProps) => {
  return (
    <>
      {/* 좌측 하단 화살표 - 항상 표시 */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-[25%] sm:right-[20%] md:right-[15%] lg:right-[10%] z-10">
        <NextButton
          direction="prev"
          onClick={() => onPageChange("prev")}
          disabled={currentPage <= 0}
        />
      </div>

      {/* 우측 하단 화살표 - 항상 표시 */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-4 sm:right-6 md:right-8 lg:right-12 z-10">
        <NextButton
          direction="next"
          onClick={() => onPageChange("next")}
          disabled={currentPage >= totalPages - 1}
        />
      </div>
    </>
  );
};

export default PageNavigation;
