interface NextButtonProps {
  onClick?: () => void;
  direction?: "prev" | "next";
}

const NextButton = ({ onClick, direction = "next" }: NextButtonProps) => {
  return (
    <button
      className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
      onClick={onClick}
    >
      <span className="text-2xl">{direction === "next" ? "▶" : "◀"}</span>
    </button>
  );
};

export default NextButton;
