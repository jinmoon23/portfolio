import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  proficiency: number;
  details: string[];
}

const SkillCard = ({
  icon,
  title,
  description,
  proficiency,
  details,
}: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300'
    >
      <div className='flex items-center gap-4 mb-4'>
        {icon}
        <div>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
            {title}
          </h3>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            {description}
          </p>
        </div>
      </div>

      {/* 숙련도 표시 */}
      <div className='mb-4'>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-sm text-gray-600 dark:text-gray-400'>
            숙련도
          </span>
          <span className='text-sm font-medium text-gray-900 dark:text-white'>
            {proficiency}%
          </span>
        </div>
        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${proficiency}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full'
          />
        </div>
      </div>

      {/* 상세 정보 */}
      <div className='space-y-2'>
        {details.map((detail, index) => (
          <div key={index} className='flex items-start gap-2'>
            <span className='text-blue-500 mt-1'>•</span>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{detail}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
