interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <div className='bg-white rounded-3xl shadow p-8 min-w-[320px] max-w-[360px] flex flex-col justify-between relative'>
    <div className='mb-4 text-4xl'>{icon}</div>
    <div className='mb-2 text-xl font-bold'>{title}</div>
    <div className='mb-8 text-gray-600'>{description}</div>
    <button className='absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-2xl shadow hover:bg-gray-200 transition'>
      +
    </button>
  </div>
);

export default SkillCard;
