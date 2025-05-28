import { useEffect } from "react";
import ProjectContent from "./ProjectContent";

interface ModalProps {
  card: {
    title: string;
    subtitle: string;
    serviceName?: string;
    img: string;
    bg?: string;
    text?: string;
    projectContent?: {
      period: string;
      projectName: string;
      roles: string[];
      description: string[];
    };
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
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-3xl shadow-2xl w-[95vw] max-w-[1100px] min-h-[420px] flex flex-col p-0 overflow-hidden">
        <button
          className="absolute top-6 right-6 text-3xl text-black hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          ×
        </button>
        <div className="px-12 pt-16 pb-8">
          <div className="mb-2 text-2xl font-bold leading-tight flex items-center gap-2">
            {card.title}
          </div>
          <div className="mb-2 text-3xl font-extrabold leading-tight flex items-center gap-2">
            {card.subtitle}
          </div>
          <div className="mb-6 text-base font-semibold opacity-80 flex items-center gap-2">
            <span>{card.serviceName}</span>
          </div>

          {card.projectContent && (
            <div className="mt-8">
              <ProjectContent {...card.projectContent} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
