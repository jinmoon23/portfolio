import { useState } from 'react';
import CarouselCard from './CarouselCard';
import Modal from './Modal';

const cardData = [
  {
    title: 'Apple Intelligence 및 macOS',
    subtitle: '쉽게 사용하고. 쉽게 빠져들고.',
    img: '이미지1',
    bg: 'bg-[#f7f7f7]',
  },
  {
    title: '성능 및 배터리 사용 시간',
    subtitle: '더 빠르게. 더 오래.',
    img: '이미지2',
    bg: 'bg-[#181c24]',
    text: 'text-white',
  },
  {
    title: 'Mac 및 iPhone',
    subtitle: '환상의 드림팀.',
    img: '이미지3',
    bg: 'bg-[#eaf4ef]',
  },
  {
    title: '호환성',
    subtitle: '즐겨 쓰는 앱이라면 Mac에서도.',
    img: '이미지4',
    bg: 'bg-[#b3e0fc]',
  },
  {
    title: '개인정보 보호 및 보안',
    subtitle: '당신의 정보는 오롯이 당신만의 것.',
    img: '이미지5',
    bg: 'bg-gradient-to-r from-pink-400 to-red-400',
    text: 'text-white',
  },
];

interface CarouselProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Carousel = ({ containerRef }: CarouselProps) => {
  const [selected, setSelected] = useState<null | number>(null);

  return (
    <div className='relative'>
      <div
        ref={containerRef}
        className='flex gap-6 overflow-x-auto pb-4 scrollbar-none'
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {cardData.map((card, idx) => (
          <div key={idx} onClick={() => setSelected(idx)}>
            <CarouselCard {...card} />
          </div>
        ))}
      </div>
      {selected !== null && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
          <Modal card={cardData[selected]} onClose={() => setSelected(null)} />
        </div>
      )}
    </div>
  );
};

export default Carousel;
