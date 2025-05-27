import NextButton from './NextButton';

const MainSection = () => {
  return (
    <main className='relative flex justify-center items-center bg-[#faf7f4] rounded-3xl mx-8 h-[600px]'>
      {/* Mac mini 이미지 자리 */}
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='w-[95%] h-[90%] bg-gray-300 rounded-3xl flex items-end justify-center overflow-hidden shadow-xl'>
          <video
            src='/portfolio.mp4'
            className='w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <div className='absolute bottom-8 right-8'>
        <NextButton />
      </div>
    </main>
  );
};

export default MainSection;
