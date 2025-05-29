interface Props {
  title: string;
  subtitle: string;
  serviceName: string;
  img: string;
  bg?: string;
  text?: string;
  onClick?: () => void;
}

const CarouselCard = ({
  title,
  subtitle,
  serviceName,
  img,
  bg = "bg-white",
  text = "",
  onClick,
}: Props) => (
  <div
    className={`group relative min-w-[280px] sm:min-w-[320px] max-w-[300px] sm:max-w-[340px] h-[500px] sm:h-[600px] rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl ${bg} ${text} flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-white/20 sm:backdrop-blur-sm`}
    tabIndex={0}
    onClick={onClick}
    style={{
      transformOrigin: "center",
      marginTop: "16px",
      marginBottom: "16px",
    }}
  >
    {/* 글래스모피즘 오버레이 - 모바일에서는 투명도 낮춤 */}
    <div className="absolute inset-0 bg-white/5 sm:bg-white/10 sm:backdrop-blur-[1px] z-0"></div>

    {/* 텍스트 영역 */}
    <div className="relative px-6 sm:px-8 pt-8 sm:pt-10 pb-4 sm:pb-5 z-10">
      <div className="space-y-1 sm:space-y-2">
        <div className="inline-block">
          <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-white/30 sm:bg-white/20 sm:backdrop-blur-sm rounded-full border border-white/30 text-current">
            {title.split(",")[0]}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight">
          {serviceName}
        </h3>
        <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>

    {/* 이미지 영역 */}
    <div className="relative flex-1 flex justify-center items-center w-full p-4 sm:p-6">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="object-contain w-full h-full max-h-[280px] sm:max-h-[320px] select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
          draggable={false}
        />

        {/* 이미지 하단 그라데이션 */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 sm:from-black/20 to-transparent rounded-b-3xl"></div>
      </div>
    </div>

    {/* 더보기 버튼 */}
    <button
      className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 sm:bg-white/20 sm:backdrop-blur-md flex items-center justify-center text-current border border-white/30 shadow-lg transition-all duration-300 group-hover:bg-white/40 sm:group-hover:bg-white/30 group-hover:scale-110"
      tabIndex={-1}
      aria-label="더보기"
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>

    {/* 장식적 요소들 - 모바일에서는 투명도 낮춤 */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 sm:from-white/30 via-white/30 sm:via-white/50 to-white/20 sm:to-white/30"></div>
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 sm:bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/3 sm:bg-white/5 rounded-full blur-2xl"></div>
  </div>
);

export default CarouselCard;
