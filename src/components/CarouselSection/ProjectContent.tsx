import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { projectImages } from './projectData';

// 동적 임포트 적용
const ProjectDetailSlider = React.lazy(() => import('./ProjectDetailSlider'));
const TroubleShootingSlider = React.lazy(
  () => import('./TroubleShootingSlider')
);

interface ProjectContentProps {
  period: string;
  projectName: string;
  projectDescription: string;
  roles: string[];
  description: string[];
  videoUrl?: string;
  imageUrl?: string;
  isVerticalVideo?: boolean;
  techStack: string[];
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  period,
  projectDescription,
  projectName,
  roles,
  description,
  videoUrl,
  imageUrl,
  isVerticalVideo,
  techStack,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlider, setCurrentSlider] = useState<
    'detail' | 'troubleshooting' | 'default'
  >('default');

  // 프로젝트 이름에 따른 이미지와 트러블슈팅 데이터 가져오기
  const getProjectData = () => {
    return (
      projectImages[projectName] || {
        detailImages: [],
        troubleshootingItems: [],
      }
    );
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleSliderChange = (type: 'detail' | 'troubleshooting') => {
    setCurrentSlider(currentSlider === type ? 'default' : type);
  };

  const hasMedia = videoUrl || imageUrl;
  const {
    detailImages,
    troubleshootingItems: projectTroubleshootingItems = [],
  } = getProjectData();

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* 헤더 섹션 */}
      <div
        className={`transform transition-all duration-700 delay-200 mb-6 lg:mb-8 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}
      >
        <div className='relative p-6 rounded-2xl bg-gradient-to-br from-gray-50/80 to-gray-100/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg'>
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl'></div>

          {/* 왕관 아이콘 - 상을 받은 프로젝트에만 표시 */}
          {(projectName === '또가게' || projectName === 'AiTalk') && (
            <div className='absolute top-4 right-4 transform rotate-12'>
              <div className='relative'>
                <div className='absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-75'></div>
                <svg
                  className='w-8 h-8 text-yellow-400 relative'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M2 7l5 5 5-9 5 9 5-5-2 12H4L2 7zm4.5 11a1.5 1.5 0 003 0h3a1.5 1.5 0 003 0' />
                </svg>
              </div>
            </div>
          )}

          <div className='flex items-center gap-3 mb-3'>
            <div className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse'></div>
            <span className='px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700'>
              {period}
            </span>
          </div>
          <h3 className='text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400 mb-2'>
            {projectDescription}
          </h3>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight mb-4'>
            {projectName}
          </h2>

          {/* 슬라이더 전환 버튼 */}
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
            {detailImages.length > 0 && (
              <button
                onClick={() => handleSliderChange('detail')}
                className={`group relative w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-500 ${
                  currentSlider === 'detail'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white/80 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 dark:hover:from-blue-500/20 dark:hover:to-purple-500/20'
                } border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm`}
              >
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    currentSlider === 'detail' ? 'opacity-20' : ''
                  }`}
                ></div>
                <div className='relative flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2'>
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 ${
                      currentSlider === 'detail'
                        ? 'text-white'
                        : 'text-blue-500 dark:text-blue-400'
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                  <span className='whitespace-nowrap'>
                    프로젝트 상세 이미지
                  </span>
                </div>
              </button>
            )}
            {projectTroubleshootingItems.length > 0 && (
              <button
                onClick={() => handleSliderChange('troubleshooting')}
                className={`group relative w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-500 ${
                  currentSlider === 'troubleshooting'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white/80 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 dark:hover:from-blue-500/20 dark:hover:to-purple-500/20'
                } border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm`}
              >
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    currentSlider === 'troubleshooting' ? 'opacity-20' : ''
                  }`}
                ></div>
                <div className='relative flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2'>
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 ${
                      currentSlider === 'troubleshooting'
                        ? 'text-white'
                        : 'text-blue-500 dark:text-blue-400'
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                    />
                  </svg>
                  <span className='whitespace-nowrap'>TroubleShooting</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 슬라이더 컨텐츠 */}
      <div className='relative min-h-[800px] sm:min-h-[800px]'>
        {currentSlider === 'default' ? (
          <div className='lg:grid grid-cols-2 gap-8 lg:gap-12'>
            {/* 왼쪽: 기술 스택과 프로젝트 내용 */}
            <div className='space-y-6 lg:space-y-8'>
              {/* 기술 스택 섹션 */}
              <div
                className={`transform transition-all duration-700 delay-300 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
                }`}
              >
                <div className='relative p-6 rounded-2xl bg-gradient-to-br from-cyan-50/80 to-blue-100/60 dark:from-cyan-900/20 dark:to-blue-900/20 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/30 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg'>
                      <svg
                        className='w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                        />
                      </svg>
                    </div>
                    <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100'>
                      Tech Stack
                    </h3>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {techStack.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 text-sm font-medium bg-white/60 dark:bg-gray-800/30 border border-cyan-100 dark:border-cyan-800/30 rounded-lg text-gray-700 dark:text-gray-300 transform transition-all duration-500 hover:scale-105 hover:shadow-md ${
                          isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${400 + index * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 프로젝트 내용 섹션 */}
              <div
                className={`transform transition-all duration-700 delay-400 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
                }`}
              >
                <div className='relative p-6 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-100/60 dark:from-indigo-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/30 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg'>
                      <svg
                        className='w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100'>
                      Project Summary
                    </h3>
                  </div>

                  <div className='space-y-3'>
                    {description.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/30 border border-indigo-100 dark:border-indigo-800/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-md ${
                          isVisible
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${500 + index * 100}ms` }}
                      >
                        <div className='w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2 flex-shrink-0'></div>
                        <span className='text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed'>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 미디어 콘텐츠와 역할 */}
            <div className='space-y-6 lg:space-y-8'>
              {/* 미디어 콘텐츠 */}
              {hasMedia && (
                <div
                  className={`transform transition-all duration-700 delay-500 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                >
                  <div className='relative group'>
                    <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300'></div>

                    <div className='relative bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-2xl'>
                      {/* 영상 렌더링 */}
                      {videoUrl && (
                        <video
                          className={`w-full h-auto rounded-xl ${
                            isVerticalVideo ? 'aspect-[9/16] max-h-[500px]' : ''
                          } group-hover:scale-[1.02] transition-transform duration-300`}
                          controls
                          autoPlay={!isMobile}
                          loop
                          muted
                          preload='metadata'
                          poster='/video-thumbnail.jpg'
                        >
                          <source src={videoUrl} type='video/mp4' />
                          <p className='text-gray-600 dark:text-gray-400 text-center p-4'>
                            브라우저에서 이 비디오 형식을 지원하지 않습니다.
                          </p>
                        </video>
                      )}

                      {/* 이미지 렌더링 */}
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt='프로젝트 스크린샷'
                          className='w-full h-auto rounded-xl object-contain max-h-[400px] group-hover:scale-[1.02] transition-transform duration-300'
                        />
                      )}
                    </div>

                    {/* 미디어 하단 라벨 */}
                    <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
                      <div className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white text-xs font-medium rounded-full shadow-lg backdrop-blur-sm border border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {videoUrl ? '프로젝트 데모' : '프로젝트 스크린샷'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 역할 섹션 */}
              <div
                className={`transform transition-all duration-700 delay-600 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
              >
                <div className='relative p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-100/60 dark:from-emerald-900/20 dark:to-teal-900/20 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg'>
                      <svg
                        className='w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100'>
                      본인의 역할
                    </h3>
                  </div>

                  <div className='space-y-3'>
                    {roles.map((role, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/30 border border-emerald-100 dark:border-emerald-800/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-md ${
                          isVisible
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${700 + index * 100}ms` }}
                      >
                        <div className='w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 flex-shrink-0'></div>
                        <span className='text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed'>
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : currentSlider === 'detail' ? (
          <Suspense
            fallback={
              <div className='flex items-center justify-center min-h-[400px]'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
              </div>
            }
          >
            <ProjectDetailSlider images={detailImages} isVisible={true} />
          </Suspense>
        ) : (
          <Suspense
            fallback={
              <div className='flex items-center justify-center min-h-[400px]'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
              </div>
            }
          >
            <TroubleShootingSlider
              items={projectTroubleshootingItems}
              isVisible={true}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;
