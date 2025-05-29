import { motion } from "framer-motion";
import HoverImage from "./HoverImage";
import GithubLink from "./GithubLink";
import MailLink from "./MailLink";

const FirstPage = () => {
  return (
    <div className="w-full h-full flex-shrink-0 overflow-hidden flex-col justify-center py-20">
      <div className="flex flex-col gap-4 md:gap-6">
        {/* 첫 번째 줄 - 왼쪽 정렬 */}
        <div className="flex w-full pl-[5rem] items-center relative group mt-1">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-gray-100 leading-tight ml-[-5rem] transition-colors"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            INTERACTIVE
          </motion.h1>
          <div className="ml-4">
            <HoverImage
              src="Shopping online.png"
              alt="Interactive"
              tooltipText={[
                "최상의 유저 경험을 제공하기 위해",
                "상호작용 요소를 늘 고민합니다!",
              ]}
            />
          </div>
        </div>

        {/* 두 번째 줄 - 가운데 정렬 */}
        <div className="flex justify-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-gray-100 leading-tight transition-colors"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            USER ENGAGEMENT
          </motion.h1>
        </div>

        {/* 세 번째 줄 - 오른쪽 정렬 */}
        <div className="flex justify-end items-center relative group">
          <div className="mr-4">
            <HoverImage
              src="plus.png"
              alt="Performance"
              tooltipText={[
                "장시간 고도의 집중력을 유지하기 위해선 체력이 필수적입니다.",
                "매일 운동하며 체력을 키워나가고 있답니다!",
              ]}
              position="right"
            />
          </div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-gray-100 leading-tight transition-colors"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PERFORMANCE
          </motion.h1>
        </div>

        {/* 네 번째 줄 - 왼쪽 정렬 */}
        <div className="flex justify-start items-center relative group">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white dark:text-gray-100 leading-tight transition-colors"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            IMPROVEMENT
          </motion.h1>
          <div className="ml-4">
            <HoverImage
              src="improvement.png"
              alt="Improvement"
              tooltipText={[
                "지속적인 성장을 위해 매일 학습하고,",
                "피드백을 통해 개선해 나가고 있습니다!",
              ]}
            />
          </div>
        </div>

        {/* 부제목 */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 dark:text-gray-200/90 mb-1 transition-colors">
          Creative Developer
        </h2>

        {/* 구분선 */}
        <div className="w-24 h-1 bg-white/50 dark:bg-gray-200/50 mb-4 transition-colors"></div>

        {/* 소셜 링크 */}
        <div className="flex gap-4">
          <GithubLink />
          <MailLink />
        </div>
      </div>

      <div className="flex justify-center z-10 relative">
        <span className="animate-bounce text-3xl text-gray-400 dark:text-gray-500 transition-colors">
          ↓
        </span>
      </div>
    </div>
  );
};

export default FirstPage;
