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
    className={`relative min-w-[320px] max-w-[340px] h-[600px] rounded-[2.5rem] overflow-hidden p-0 flex flex-col justify-between shadow-lg ${bg} ${text} flex-shrink-0 cursor-pointer transition-transform duration-200 will-change-transform hover:scale-105 active:scale-105`}
    tabIndex={0}
    onClick={onClick}
    style={{
      transformOrigin: "center",
      marginTop: "16px",
      marginBottom: "16px",
    }}
  >
    {/* 텍스트 영역 */}
    <div className="px-8 pt-10 pb-4 z-10">
      <div className="mb-2 text-2xl font-bold leading-tight">{title}</div>
      <div className="mb-2 text-lg font-medium opacity-80">{subtitle}</div>
      <div className="mb-2 text-base font-semibold opacity-80">
        {serviceName}
      </div>
    </div>
    {/* 이미지 영역 */}
    <div className="flex-1 flex justify-center w-full">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-[360px] rounded-b-[2.5rem] select-none pointer-events-none"
        draggable={false}
      />
    </div>
    {/* + 버튼 */}
    <button
      className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white text-2xl shadow-lg backdrop-blur"
      tabIndex={-1}
      aria-label="더보기"
    >
      +
    </button>
  </div>
);

export default CarouselCard;
