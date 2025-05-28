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
      {/* 좌측 하단 화살표 */}
      {currentPage > 0 && (
        <div className="absolute bottom-12 right-[10%] z-10">
          <NextButton direction="prev" onClick={() => onPageChange("prev")} />
        </div>
      )}

      {/* 우측 하단 화살표 */}
      {currentPage < totalPages - 1 && (
        <div className="absolute bottom-12 right-12 z-10">
          <NextButton direction="next" onClick={() => onPageChange("next")} />
        </div>
      )}
    </>
  );
};

export default PageNavigation;
