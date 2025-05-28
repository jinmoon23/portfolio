import { useEffect } from "react";

interface ModalProps {
  card: {
    title: string;
    subtitle: string;
    serviceName?: string;
    img: string;
    bg?: string;
    text?: string;
  };
  onClose: () => void;
}

const Modal = ({ card, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      {/* 모달 */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-[95vw] max-w-[1100px] min-h-[420px] flex flex-col p-0 overflow-hidden">
        {/* 닫기 버튼 */}
        <button
          className="absolute top-6 right-6 text-3xl text-black"
          onClick={onClose}
        >
          ×
        </button>
        {/* 텍스트 영역 */}
        <div className="px-12 pt-16 pb-4">
          <div className="mb-2 text-base font-semibold opacity-80 flex items-center gap-2">
            <span>{card.serviceName}</span>
          </div>
          <div className="mb-2 text-2xl font-bold leading-tight flex items-center gap-2">
            {card.title}
          </div>
          <div className="mb-2 text-3xl font-extrabold leading-tight flex items-center gap-2">
            {card.subtitle}
          </div>
        </div>
        {/* 이미지 영역 */}
        <div className="flex-1 flex items-center justify-center w-full px-12 pb-8">
          <img
            src={card.img}
            alt={card.title}
            className="object-contain w-full h-[320px] rounded-2xl bg-gray-100 shadow border-4 border-white"
            draggable={false}
          />
        </div>
        {/* 자세히 보기 버튼 */}
        <button
          className="absolute bottom-8 right-12 px-6 py-2 rounded-full bg-black/80 text-white text-base font-semibold shadow-lg hover:bg-black/90 transition-colors"
          onClick={() => window.open("https://github.com", "_blank")}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default Modal;
