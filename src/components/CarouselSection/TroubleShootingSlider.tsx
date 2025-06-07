import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface TechnicalDetail {
  title: string;
  items: string[];
}

interface CodeSnippet {
  language: string;
  code: string;
}

interface TroubleshootingItem {
  title: string;
  description: string;
  solution: string | string[];
  codeSnippets?: CodeSnippet[];
  imageUrl?: string;
  technicalDetails?: TechnicalDetail[];
}

interface TroubleShootingSliderProps {
  items: TroubleshootingItem[];
  isVisible: boolean;
}

const TroubleShootingSlider: React.FC<TroubleShootingSliderProps> = ({
  items,
  isVisible,
}) => {
  return (
    <div className='space-y-8'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className='relative p-6 rounded-2xl bg-gradient-to-br from-gray-50/80 to-gray-100/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg'
        >
          {/* 제목 */}
          <div className='flex items-center gap-3 mb-4'>
            <div className='p-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 shadow-lg'>
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
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
              {item.title}
            </h3>
          </div>

          {/* 설명 */}
          <div className='mb-6'>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              {item.description}
            </p>
          </div>

          {/* 기술적 상세 정보 */}
          {item.technicalDetails && (
            <div className='mb-6 space-y-4'>
              {item.technicalDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className='bg-white/50 dark:bg-gray-800/50 rounded-xl p-4'
                >
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
                    {detail.title}
                  </h4>
                  <ul className='space-y-2'>
                    {detail.items.map((item, itemIdx) => (
                      <li key={itemIdx} className='flex items-start gap-2'>
                        <div className='w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 mt-2 flex-shrink-0'></div>
                        <span className='text-gray-700 dark:text-gray-300'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 코드 스니펫 */}
          {item.codeSnippets && (
            <div className='mb-6 space-y-4'>
              {item.codeSnippets.map((snippet, idx) => (
                <div key={idx} className='relative group'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300'></div>
                  <div className='relative'>
                    <SyntaxHighlighter
                      language={snippet.language}
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        borderRadius: '0.75rem',
                        background: 'rgba(0, 0, 0, 0.8)',
                      }}
                    >
                      {snippet.code}
                    </SyntaxHighlighter>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 이미지 */}
          {item.imageUrl && (
            <div className='mb-6'>
              <div className='relative group'>
                <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300'></div>
                <img
                  src={item.imageUrl}
                  alt='Technical diagram'
                  className='relative w-full h-auto rounded-xl object-contain'
                />
              </div>
            </div>
          )}

          {/* 해결책 */}
          <div className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4'>
            <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              해결 방법
            </h4>
            {Array.isArray(item.solution) ? (
              <ul className='space-y-2'>
                {item.solution.map((solution, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                    <div className='w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700 dark:text-gray-300'>
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-700 dark:text-gray-300'>
                {item.solution}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TroubleShootingSlider;
