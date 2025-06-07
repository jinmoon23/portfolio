import React from 'react';

interface ProjectDetailSliderProps {
  images: string[];
  isVisible: boolean;
}

const ProjectDetailSlider: React.FC<ProjectDetailSliderProps> = ({
  images,
  isVisible,
}) => {
  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className='relative p-6 rounded-2xl bg-gradient-to-br from-gray-50/80 to-gray-100/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {images.map((image, index) => (
            <div key={index} className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300'></div>
              <div className='relative bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-2xl'>
                <img
                  src={image}
                  alt={`프로젝트 상세 이미지 ${index + 1}`}
                  className='w-full h-auto rounded-xl object-contain max-h-[400px] group-hover:scale-[1.02] transition-transform duration-300'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSlider;
