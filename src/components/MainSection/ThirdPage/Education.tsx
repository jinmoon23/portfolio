import { memo } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_INFO } from '../../../constants/thirdPage.constants';
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBook,
} from 'react-icons/fa';

interface EducationProps {
  isVisible: boolean;
}

const Education = memo(({ isVisible }: EducationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className='mb-12'
    >
      <div className='flex items-center gap-3 mb-8'>
        <FaGraduationCap className='text-4xl text-blue-400' />
        <h2 className='text-4xl font-bold text-gray-200 dark:text-dark-text'>
          {EDUCATION_INFO.title}
        </h2>
      </div>
      <div className='grid gap-6'>
        {EDUCATION_INFO.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-gradient-to-r from-gray-800/50 to-gray-700/50 dark:from-gray-700/50 dark:to-gray-600/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/30 transition-all duration-300'
          >
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <FaBook className='text-2xl text-blue-400' />
                <h3 className='text-2xl font-semibold text-gray-200 dark:text-dark-text'>
                  {item.school}
                </h3>
              </div>
              <p className='text-xl text-gray-300 dark:text-gray-300 pl-8'>
                {item.degree}
              </p>
              <div className='flex items-center gap-2 text-gray-400 dark:text-gray-300 pl-8'>
                <FaMapMarkerAlt className='text-gray-500' />
                <p>{item.location}</p>
              </div>
              <div className='flex items-center gap-2 text-gray-400 dark:text-gray-300 pl-8'>
                <FaCalendarAlt className='text-gray-500' />
                <p>{item.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

Education.displayName = 'Education';

export default Education;
