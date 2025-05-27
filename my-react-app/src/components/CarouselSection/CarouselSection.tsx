import { useRef } from 'react';
import Carousel from './Carousel';

const CarouselSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = 400;
    containerRef.current.scrollLeft +=
      direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <section className='mt-16 px-8 relative'>
      <h2 className='text-5xl font-bold mb-8 mt-24'>알면 알수록, 진문.</h2>
      <Carousel containerRef={containerRef} />
      <div className='absolute bottom-4 right-8 flex gap-2'>
        <button
          onClick={() => handleScroll('left')}
          className='w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors'
          aria-label='왼쪽으로 이동'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button
          onClick={() => handleScroll('right')}
          className='w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors'
          aria-label='오른쪽으로 이동'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;
