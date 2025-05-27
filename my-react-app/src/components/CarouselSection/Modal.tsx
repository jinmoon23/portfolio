import { useEffect, useState } from 'react';

interface ModalProps {
  card: {
    title: string;
    subtitle: string;
    img: string;
    bg?: string;
    text?: string;
  };
  onClose: () => void;
}

const Modal = ({ card, onClose }: ModalProps) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    // 모달이 열릴 때 body 스크롤 막기
    document.body.style.overflow = 'hidden';

    const handlePosition = () => {
      const modalHeight = 600;
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      setTop(scrollY + viewportHeight / 2 - modalHeight / 2);
    };
    handlePosition();
    window.addEventListener('scroll', handlePosition);
    window.addEventListener('resize', handlePosition);

    // cleanup 함수
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handlePosition);
      window.removeEventListener('resize', handlePosition);
    };
  }, []);

  return (
    <>
      {/* 블러 및 회색 오버레이 */}
      <div
        className='fixed inset-0 z-40 bg-gray-800 bg-opacity-40 backdrop-blur-sm'
        onClick={onClose}
      />
      {/* 모달 */}
      <div
        className='fixed inset-0 z-50 flex items-center justify-center'
        style={{ top: `${top}px` }}
      >
        <div
          className='relative bg-white rounded-3xl shadow-2xl p-12 w-[90vw] max-w-[1200px]'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='mb-6 text-2xl font-semibold'>{card.title}</div>
          <div className='mb-8 text-4xl font-bold'>{card.subtitle}</div>
          <div className='h-[500px] flex items-center justify-center bg-gray-200 rounded-2xl mb-8'>
            {card.img}
          </div>
          <button
            className='absolute top-6 right-6 text-gray-500 hover:text-black text-3xl'
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
