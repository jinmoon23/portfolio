import { motion } from "framer-motion";
import HoverImage from "./HoverImage";
import GithubLink from "./GithubLink";
import MailLink from "./MailLink";

const FirstPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-2 sm:px-4 bg-transparent dark:bg-black transition-colors">
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-grow justify-center">
        {/* 첫 번째 줄 - 왼쪽 정렬 */}
        <div className="flex w-full pl-[2rem] sm:pl-[3rem] md:pl-[4rem] lg:pl-[5rem] items-center relative group">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white dark:text-gray-100 leading-tight ml-[-2rem] sm:ml-[-3rem] md:ml-[-4rem] lg:ml-[-5rem] transition-colors"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            INTERACTIVE
          </motion.h1>
          <div className="ml-2 sm:ml-3 md:ml-4">
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white dark:text-gray-100 leading-tight transition-colors text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            USER ENGAGEMENT
          </motion.h1>
        </div>

        {/* 세 번째 줄 - 오른쪽 정렬 */}
        <div className="flex justify-end items-center relative group pr-2 sm:pr-4">
          <div className="mr-2 sm:mr-3 md:mr-4">
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white dark:text-gray-100 leading-tight transition-colors"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PERFORMANCE
          </motion.h1>
        </div>

        {/* 네 번째 줄 - 왼쪽 정렬 */}
        <div className="flex justify-start items-center relative group pl-2 sm:pl-4">
          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white dark:text-gray-100 leading-tight transition-colors"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            IMPROVEMENT
          </motion.h1>
          <div className="ml-2 sm:ml-3 md:ml-4">
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
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white/90 dark:text-gray-200/90 mb-1 transition-colors pl-2 sm:pl-4">
          Creative Developer
        </h2>

        {/* 구분선 */}
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-white/50 dark:bg-gray-200/50 md:mb-4 transition-colors ml-2 sm:ml-4"></div>

        {/* 소셜 링크 */}
        <div className="flex gap-3 sm:gap-4 pl-2 sm:pl-4">
          <GithubLink />
          <MailLink />
        </div>
      </div>

      {/* 하단 화살표 - 컴팩트하게 */}
      <div className="flex justify-center -mt-2 sm:-mt-4">
        <motion.span
          className="text-xl sm:text-2xl md:text-3xl text-white/70 dark:text-gray-400 transition-colors drop-shadow-lg block"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>
      </div>
    </div>
  );
};

export default FirstPage;
