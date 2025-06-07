import { memo } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ME_CONTENT } from '../../../constants/thirdPage.constants';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface AboutMeTextProps {
  isVisible: boolean;
}

const AboutMeText = memo(({ isVisible }: AboutMeTextProps) => {
  return (
    <>
      {/* 구분선 */}
      <motion.div
        className='w-full max-w-6xl mx-auto px-2 py-4'
        initial={{ opacity: 0, scaleX: 0 }}
        animate={
          isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
        }
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          contain: 'layout style',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div className='h-1 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent rounded-full'></div>
      </motion.div>

      {/* About Me 텍스트 섹션 */}
      <motion.div
        className='max-w-4xl mx-auto px-4 py-8 text-left'
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{
          contain: 'layout style',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div className='relative'>
          <FaQuoteLeft className='absolute -top-6 -left-4 text-4xl text-gray-400/30' />
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-gray-200 dark:text-dark-text'>
            {ABOUT_ME_CONTENT.title}
          </h2>
          <FaQuoteRight className='absolute -bottom-6 -right-4 text-4xl text-gray-400/30' />
        </div>

        <div className='space-y-8 text-gray-300 dark:text-gray-300 text-lg md:text-xl leading-relaxed'>
          {ABOUT_ME_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.5, delay: 1.8 + index * 0.2 }}
              className='relative pl-6 border-l-2 border-gray-400/30 hover:border-gray-400/50 transition-colors duration-300'
            >
              {paragraph.split('.').map((sentence, sentenceIndex, array) => {
                if (sentence.trim() === '') return null;

                // 마지막 문장이 아닌 경우에만 마침표 추가
                const isLastSentence = sentenceIndex === array.length - 1;
                const fullSentence = isLastSentence ? sentence : sentence + '.';

                return (
                  <span key={sentenceIndex} className='block mb-2'>
                    {fullSentence}
                  </span>
                );
              })}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </>
  );
});

AboutMeText.displayName = 'AboutMeText';

export default AboutMeText;
