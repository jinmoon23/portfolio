import '../../types/thirdPage.types';
import { THIRD_PAGE_IMAGES } from '../../constants/thirdPage.constants';
import {
  useIntersectionObserver,
  useScrollControl,
  useImagePreloader,
  useRandomTransforms,
} from '../../hooks';
import { ImageGrid, AboutMeText, ScrollToNextButton } from './ThirdPage/index';
import Achievements from './ThirdPage/Achievements';
import Education from './ThirdPage/Education';
import MilitaryService from './ThirdPage/MilitaryService';

const ThirdPage = () => {
  // 커스텀 훅들을 사용하여 로직 분리
  const { containerRef } = useIntersectionObserver();
  const { scrollableRef } = useScrollControl();
  const randomTransforms = useRandomTransforms(THIRD_PAGE_IMAGES.length);

  // 이미지 프리로딩
  useImagePreloader(THIRD_PAGE_IMAGES);

  const alwaysVisible = true;

  return (
    <div
      ref={scrollableRef}
      className='w-full min-h-screen px-4'
      style={{
        position: 'relative',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: '#000',
      }}
    >
      <div
        ref={containerRef}
        className='w-full max-w-7xl mx-auto py-8'
        style={{
          minHeight: '100%',
          position: 'relative',
        }}
      >
        {/* 헤더 */}
        <div className='flex items-center mb-6 sticky top-0 bg-black/80 backdrop-blur-sm z-10'>
          <h1 className='text-[6vw] md:text-[6vw] font-bold mr-4 text-gray-200 dark:text-dark-text'>
            About Me
          </h1>
          <span className='text-[6vw] md:text-[6vw]'>🍭</span>
        </div>

        {/* 이미지 그리드 */}
        <div className='mb-12'>
          <ImageGrid
            images={THIRD_PAGE_IMAGES}
            isVisible={alwaysVisible}
            randomTransforms={randomTransforms}
          />
        </div>

        {/* 군 복무 섹션 */}
        <div className='mb-12'>
          <MilitaryService isVisible={alwaysVisible} />
        </div>

        {/* 자격증 및 수상내역 섹션 */}
        <div className='mb-12'>
          <Achievements isVisible={alwaysVisible} />
        </div>

        {/* 교육 정보 섹션 */}
        <div className='mb-12'>
          <Education isVisible={alwaysVisible} />
        </div>

        {/* About Me 텍스트 섹션 */}
        <div className='mb-12'>
          <AboutMeText isVisible={alwaysVisible} />
        </div>
      </div>

      {/* 다음 섹션으로 이동 버튼 */}
      <ScrollToNextButton />
    </div>
  );
};

export default ThirdPage;
