import { ACHIEVEMENTS } from '../../../constants/achievements.constants';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

interface AchievementsProps {
  isVisible: boolean;
}

const Achievements = ({ isVisible }: AchievementsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className='mb-12'
    >
      <div className='flex items-center gap-3 mb-8'>
        <FaTrophy className='text-4xl text-yellow-400' />
        <h2 className='text-4xl font-bold text-gray-200 dark:text-dark-text'>
          자격증 및 수상내역
        </h2>
      </div>
      <div className='grid gap-6'>
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='bg-gradient-to-r from-gray-800/50 to-gray-700/50 dark:from-gray-700/50 dark:to-gray-600/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-yellow-400/30 transition-all duration-300'
          >
            <div className='flex justify-between items-start'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <FaAward className='text-yellow-400 text-xl' />
                  <h3 className='text-xl font-semibold text-gray-200 dark:text-dark-text'>
                    {achievement.title}
                  </h3>
                </div>
                <div className='flex items-center gap-2 text-gray-400 dark:text-gray-300'>
                  <FaBuilding className='text-gray-500' />
                  <p>{achievement.issuer}</p>
                </div>
                {achievement.description && (
                  <p className='text-sm text-gray-400 dark:text-gray-300 mt-2 pl-6 border-l-2 border-yellow-400/30'>
                    {achievement.description}
                  </p>
                )}
              </div>
              <div className='flex items-center gap-2 text-gray-400 dark:text-gray-300 bg-gray-800/50 dark:bg-gray-700/50 px-3 py-1 rounded-full'>
                <FaCalendarAlt className='text-gray-500' />
                <span className='text-sm'>{achievement.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
