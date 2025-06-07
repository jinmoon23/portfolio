import { memo } from 'react';
import { motion } from 'framer-motion';
import { MILITARY_INFO } from '../../../constants/thirdPage.constants';
import { FaMedal, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';

interface MilitaryServiceProps {
  isVisible: boolean;
}

const MilitaryService = memo(({ isVisible }: MilitaryServiceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className='mb-12'
    >
      <div className='flex items-center gap-3 mb-8'>
        <FaMedal className='text-4xl text-yellow-500' />
        <h2 className='text-4xl font-bold text-gray-200 dark:text-dark-text'>
          {MILITARY_INFO.title}
        </h2>
      </div>
      <div className='grid gap-6'>
        {MILITARY_INFO.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-gradient-to-r from-gray-800/50 to-gray-700/50 dark:from-gray-700/50 dark:to-gray-600/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300'
          >
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <FaStar className='text-2xl text-yellow-500' />
                <h3 className='text-2xl font-semibold text-gray-200 dark:text-dark-text'>
                  {item.rank}
                </h3>
              </div>
              <p className='text-xl text-gray-300 dark:text-gray-300'>
                {item.position}
              </p>
              <div className='flex items-center gap-2 text-gray-400 dark:text-gray-300'>
                <FaMapMarkerAlt className='text-gray-500' />
                <p>{item.location}</p>
              </div>
              <div className='flex items-center gap-2 text-gray-400 dark:text-gray-300'>
                <FaCalendarAlt className='text-gray-500' />
                <p>{item.period}</p>
              </div>
              <p className='text-gray-300 dark:text-gray-300 mt-4 pl-6 border-l-2 border-yellow-500/30'>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

MilitaryService.displayName = 'MilitaryService';

export default MilitaryService;
