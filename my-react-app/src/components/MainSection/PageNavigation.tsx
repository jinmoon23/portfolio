import NextButton from "./NextButton";

interface PageNavigationProps {
  onPageChange: (direction: "prev" | "next") => void;
}

const PageNavigation = ({ onPageChange }: PageNavigationProps) => {
  return (
    <>
      {/* 좌측 하단 화살표 */}
      <div className="absolute bottom-12 right-[10%] z-10">
        <NextButton direction="prev" onClick={() => onPageChange("prev")} />
      </div>

      {/* 우측 하단 화살표 */}
      <div className="absolute bottom-12 right-12 z-10">
        <NextButton direction="next" onClick={() => onPageChange("next")} />
      </div>
    </>
  );
};

export default PageNavigation;
