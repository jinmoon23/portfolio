interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow p-4 sm:p-6 md:p-8 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] flex flex-col justify-between relative transition-colors">
    <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl">{icon}</div>
    <div className="mb-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors">
      {title}
    </div>
    <div className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors">
      {description}
    </div>
  </div>
);

export default SkillCard;
