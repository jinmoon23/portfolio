interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow p-8 min-w-[320px] max-w-[360px] flex flex-col justify-between relative transition-colors">
    <div className="mb-4 text-4xl">{icon}</div>
    <div className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors">
      {title}
    </div>
    <div className="mb-8 text-gray-600 dark:text-gray-400 transition-colors">
      {description}
    </div>
  </div>
);

export default SkillCard;
