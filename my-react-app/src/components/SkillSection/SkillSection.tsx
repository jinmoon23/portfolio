import SkillCard from './SkillCard';

const skills = [
  {
    icon: <div>💻</div>,
    title: 'React',
    description: '컴포넌트 기반 UI 라이브러리',
  },
  {
    icon: <div>⚡</div>,
    title: 'TypeScript',
    description: '정적 타입을 지원하는 자바스크립트',
  },
  {
    icon: <div>🌐</div>,
    title: 'Next.js',
    description: 'React 기반의 SSR/SSG 프레임워크',
  },
  {
    icon: <div>🎨</div>,
    title: 'Tailwind CSS',
    description: '유틸리티 퍼스트 CSS 프레임워크',
  },
];

const SkillSection = () => (
  <section className='bg-gray-50 py-20 px-4'>
    <div className='flex justify-between items-center mb-12'>
      <h2 className='text-5xl font-bold'>진문의 기술스택</h2>
      <a href='#' className='text-blue-600 font-semibold hover:underline'>
        더 알아보기 &gt;
      </a>
    </div>
    <div className='flex gap-6 flex-wrap justify-center'>
      {skills.map((skill, idx) => (
        <SkillCard key={idx} {...skill} />
      ))}
    </div>
  </section>
);

export default SkillSection;
