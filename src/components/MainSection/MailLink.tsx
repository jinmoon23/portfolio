import { motion } from "framer-motion";

interface MailLinkProps {
  variant?: "default" | "contact";
}

const MailLink = ({ variant = "default" }: MailLinkProps) => {
  const defaultClassName =
    "flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 relative z-20 cursor-pointer";
  const contactClassName =
    "flex items-center gap-2 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 py-2 rounded-lg transition-colors duration-300 relative z-20 cursor-pointer";

  return (
    <motion.a
      href="mailto:rlawjsdlf13@naver.com"
      className={variant === "contact" ? contactClassName : defaultClassName}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
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
      <span className="text-base sm:text-lg">
        {variant === "contact" ? "Email" : ""}
      </span>
    </motion.a>
  );
};

export default MailLink;
