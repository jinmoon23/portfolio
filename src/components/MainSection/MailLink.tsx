import { motion } from "framer-motion";

const MailLink = () => {
  return (
    <motion.a
      href="mailto:rlawjsdlf13@naver.com"
      className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 relative z-20 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span className="text-lg"></span>
    </motion.a>
  );
};

export default MailLink;
