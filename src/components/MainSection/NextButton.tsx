interface NextButtonProps {
  onClick?: () => void;
  direction?: "prev" | "next";
  disabled?: boolean;
}

const NextButton = ({
  onClick,
  direction = "next",
  disabled = false,
}: NextButtonProps) => {
  return (
    <button
      className={`
        relative w-12 h-12 rounded-full 
        flex items-center justify-center 
        transition-all duration-300 ease-out
        ${
          disabled
            ? "bg-gray-200/60 shadow-sm cursor-not-allowed"
            : "bg-gray-200/90 shadow-md hover:bg-gray-300/90 hover:shadow-lg active:scale-95"
        }
        ${!disabled ? "animate-pulse-gentle" : ""}
      `}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span
        className={`
        text-xl font-black transition-all duration-200
        ${disabled ? "text-gray-400" : "text-gray-700"}
        ${!disabled && direction === "next" ? "translate-x-0.5" : ""}
        ${!disabled && direction === "prev" ? "-translate-x-0.5" : ""}
      `}
      >
        {direction === "next" ? "▶" : "◀"}
      </span>
    </button>
  );
};

export default NextButton;
