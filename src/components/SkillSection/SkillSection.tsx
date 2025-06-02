import React from 'react';
import SkillCard from './SkillCard';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpo,
  SiJira,
  SiGit,
  SiSwift,
  SiMysql,
  SiPython,
  SiRedux,
  SiStyledcomponents,
  SiFigma,
  SiDocker,
  SiAmazon,
} from 'react-icons/si';
import { motion } from 'framer-motion';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  proficiency: number;
  details: string[];
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools';
}

const skills: Skill[] = [
  {
    icon: <SiReact className='w-8 h-8 text-[#61DAFB]' />,
    title: 'React',
    description: '컴포넌트 기반 UI 라이브러리',
    proficiency: 90,
    details: [
      '커스텀 훅을 활용한 로직 재사용',
      'Context API와 Redux를 활용한 상태 관리',
      'React Query를 통한 서버 상태 관리',
      '성능 최적화와 메모이제이션',
    ],
    category: 'frontend',
  },
  {
    icon: <SiTypescript className='w-8 h-8 text-[#3178C6]' />,
    title: 'TypeScript',
    description: '정적 타입을 지원하는 자바스크립트',
    proficiency: 85,
    details: [
      '인터페이스와 타입 정의',
      '제네릭을 활용한 재사용성 높은 코드',
      '타입 가드와 타입 단언',
      '유틸리티 타입 활용',
    ],
    category: 'frontend',
  },
  {
    icon: <SiNextdotjs className='w-8 h-8 text-black dark:text-white' />,
    title: 'Next.js',
    description: 'React 기반의 SSR/SSG 프레임워크',
    proficiency: 85,
    details: [
      'SSR과 SSG를 활용한 최적화',
      'API 라우트 구현',
      '이미지 최적화',
      '동적 라우팅',
    ],
    category: 'frontend',
  },
  {
    icon: <SiTailwindcss className='w-8 h-8 text-[#06B6D4]' />,
    title: 'Tailwind CSS',
    description: '유틸리티 퍼스트 CSS 프레임워크',
    proficiency: 90,
    details: [
      '반응형 디자인 구현',
      '커스텀 테마 설정',
      '다크 모드 지원',
      '애니메이션과 트랜지션',
    ],
    category: 'frontend',
  },
  {
    icon: <SiRedux className='w-8 h-8 text-[#764ABC]' />,
    title: 'Redux',
    description: '예측 가능한 상태 관리 라이브러리',
    proficiency: 80,
    details: [
      'Redux Toolkit 활용',
      '미들웨어 구현',
      '비동기 상태 관리',
      '상태 정규화',
    ],
    category: 'frontend',
  },
  {
    icon: <SiStyledcomponents className='w-8 h-8 text-[#DB7093]' />,
    title: 'Styled Components',
    description: 'CSS-in-JS 스타일링 솔루션',
    proficiency: 85,
    details: [
      '테마 시스템 구축',
      '동적 스타일링',
      'CSS 애니메이션',
      '재사용 가능한 컴포넌트',
    ],
    category: 'frontend',
  },
  {
    icon: <SiPython className='w-8 h-8 text-[#3776AB]' />,
    title: 'Python',
    description: '고수준 프로그래밍 언어',
    proficiency: 75,
    details: [
      'FastAPI를 활용한 백엔드 개발',
      '데이터 분석 및 처리',
      '자동화 스크립트 작성',
      '머신러닝 기초',
    ],
    category: 'backend',
  },
  {
    icon: <SiMysql className='w-8 h-8 text-[#4479A1]' />,
    title: 'SQL',
    description: '관계형 데이터베이스 관리 시스템',
    proficiency: 80,
    details: [
      '데이터베이스 설계',
      '쿼리 최적화',
      '트랜잭션 관리',
      '인덱싱 전략',
    ],
    category: 'backend',
  },
  {
    icon: <SiExpo className='w-8 h-8 text-[#000020]' />,
    title: 'React Native',
    description: '크로스 플랫폼 모바일 앱 개발',
    proficiency: 75,
    details: [
      '네이티브 모듈 연동',
      '성능 최적화',
      '플랫폼별 UI 구현',
      '상태 관리',
    ],
    category: 'mobile',
  },
  {
    icon: <SiSwift className='w-8 h-8 text-[#F05138]' />,
    title: 'Swift',
    description: 'iOS 앱 개발 언어',
    proficiency: 70,
    details: [
      'UIKit/SwiftUI 활용',
      '앱 아키텍처 설계',
      'Core Data 활용',
      '네트워킹 구현',
    ],
    category: 'mobile',
  },
  {
    icon: <SiDocker className='w-8 h-8 text-[#2496ED]' />,
    title: 'Docker',
    description: '컨테이너화 플랫폼',
    proficiency: 75,
    details: [
      '컨테이너 이미지 빌드',
      'Docker Compose 활용',
      '멀티 스테이지 빌드',
      '컨테이너 최적화',
    ],
    category: 'devops',
  },
  {
    icon: <SiAmazon className='w-8 h-8 text-[#232F3E]' />,
    title: 'AWS',
    description: '클라우드 서비스 플랫폼',
    proficiency: 70,
    details: [
      'EC2 인스턴스 관리',
      'S3 스토리지 활용',
      'Lambda 서버리스',
      'CloudFront CDN',
    ],
    category: 'devops',
  },
  {
    icon: <SiGit className='w-8 h-8 text-[#F05032]' />,
    title: 'Git',
    description: '분산형 버전 관리 시스템',
    proficiency: 85,
    details: [
      '브랜치 전략 수립',
      'Git Flow 활용',
      '리베이스와 머지',
      'Git Hooks 활용',
    ],
    category: 'tools',
  },
  {
    icon: <SiJira className='w-8 h-8 text-[#0052CC]' />,
    title: 'Jira',
    description: '애자일 프로젝트 관리 도구',
    proficiency: 80,
    details: [
      '스크럼 보드 관리',
      '이슈 트래킹',
      '애자일 메트릭스',
      '워크플로우 커스터마이징',
    ],
    category: 'tools',
  },
  {
    icon: <SiFigma className='w-8 h-8 text-[#F24E1E]' />,
    title: 'Figma',
    description: 'UI/UX 디자인 도구',
    proficiency: 75,
    details: [
      '컴포넌트 디자인',
      '프로토타이핑',
      '디자인 시스템 구축',
      '협업 워크플로우',
    ],
    category: 'tools',
  },
];

const categories = {
  frontend: '프론트엔드',
  backend: '백엔드',
  mobile: '모바일',
  devops: 'DevOps',
  tools: '개발 도구',
};

const SkillSection = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 transition-colors'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4'>
          <div>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 transition-colors mb-4'>
              기술 스택
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              다양한 기술을 활용하여 최적의 솔루션을 제공합니다
            </p>
          </div>
        </div>

        {Object.entries(categories).map(([category, title]) => (
          <div key={category} className='mb-16'>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8'>
              {title}
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
