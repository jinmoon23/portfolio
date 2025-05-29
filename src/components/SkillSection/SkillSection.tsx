import SkillCard from "./SkillCard";
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
  SiVuedotjs,
  SiJavascript,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  {
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    title: "React",
    description: "컴포넌트 기반 UI 라이브러리",
  },
  {
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    title: "TypeScript",
    description: "정적 타입을 지원하는 자바스크립트",
  },
  {
    icon: <SiNextdotjs className="w-8 h-8 text-black" />,
    title: "Next.js",
    description: "React 기반의 SSR/SSG 프레임워크",
  },
  {
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    title: "Tailwind CSS",
    description: "유틸리티 퍼스트 CSS 프레임워크",
  },
  {
    icon: <SiExpo className="w-8 h-8 text-[#000020]" />,
    title: "React Native / Expo",
    description: "크로스 플랫폼 모바일 앱 개발 프레임워크",
  },
  {
    icon: <SiJira className="w-8 h-8 text-[#0052CC]" />,
    title: "Jira",
    description: "애자일 프로젝트 관리 도구",
  },
  {
    icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
    title: "Git",
    description: "분산형 버전 관리 시스템",
  },
  {
    icon: <SiSwift className="w-8 h-8 text-[#F05138]" />,
    title: "Swift",
    description: "iOS/macOS 앱 개발 언어",
  },
  {
    icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
    title: "SQL",
    description: "관계형 데이터베이스 관리 시스템",
  },
  {
    icon: <SiPython className="w-8 h-8 text-[#3776AB]" />,
    title: "Python",
    description: "고수준 프로그래밍 언어",
  },
  {
    icon: <SiVuedotjs className="w-8 h-8 text-[#4FC08D]" />,
    title: "Vue.js",
    description: "프로그레시브 자바스크립트 프레임워크",
  },
  {
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    title: "JavaScript",
    description: "웹 프로그래밍 언어",
  },
  {
    icon: <SiTensorflow className="w-8 h-8 text-[#FF6F00]" />,
    title: "TensorFlow",
    description: "머신러닝/딥러닝 프레임워크",
  },
];

const SkillSection = () => (
  <section className="bg-gray-50 dark:bg-gray-900 py-10 px-4 transition-colors">
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 transition-colors">
        이 기술들을 사용해요!
      </h2>
    </div>
    <div className="flex gap-6 flex-wrap justify-center">
      {skills.map((skill, idx) => (
        <SkillCard key={idx} {...skill} />
      ))}
    </div>
  </section>
);

export default SkillSection;
