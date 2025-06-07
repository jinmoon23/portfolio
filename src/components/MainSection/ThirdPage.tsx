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
  const { isVisible, containerRef } = useIntersectionObserver();
  const { scrollableRef } = useScrollControl();
  const randomTransforms = useRandomTransforms(THIRD_PAGE_IMAGES.length);

  // 이미지 프리로딩
  useImagePreloader(THIRD_PAGE_IMAGES);

  return (
    <div
      ref={scrollableRef}
      className='w-full min-h-full px-4'
      style={{
        minHeight: '100vh',
        contain: 'layout style',
        transform: 'translate3d(0, 0, 0)', // GPU 레이어 강제 생성
      }}
    >
      <div ref={containerRef} className='w-full'>
        {/* 헤더 */}
        <div className='flex items-center mb-6 sticky bg-black/80 dark:bg-gray-900/80 backdrop-blur-sm z-10'>
          <h1 className='text-[6vw] md:text-[6vw] font-bold mr-4 text-gray-200 dark:text-dark-text'>
            About Me
          </h1>
          <span className='text-[6vw] md:text-[6vw]'>🍭</span>
        </div>

        {/* 이미지 그리드 */}
        <ImageGrid
          images={THIRD_PAGE_IMAGES}
          isVisible={isVisible}
          randomTransforms={randomTransforms}
        />

        {/* 군 복무 섹션 */}
        <MilitaryService isVisible={isVisible} />

        {/* 자격증 및 수상내역 섹션 */}
        <Achievements isVisible={isVisible} />

        {/* 교육 정보 섹션 */}
        <Education isVisible={isVisible} />

        {/* About Me 텍스트 섹션 */}
        <AboutMeText isVisible={isVisible} />
      </div>

      {/* 다음 섹션으로 이동 버튼 */}
      <ScrollToNextButton />
    </div>
  );
};

export default ThirdPage;
