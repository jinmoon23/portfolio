const Header = () => {
  return (
    <header className="flex justify-between items-start p-2">
      <h1 className="text-7xl font-bold text-gray-900 dark:text-white transition-colors">
        Portfolio
      </h1>
      <div className="text-right mt-4">
        <div className="text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-colors">
          꿈꾸던 그 모든 것,
        </div>
        <div className="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-colors">
          <span className="font-bold text-gray-900 dark:text-white">진문</span>
          과 함께 현실로.
        </div>
      </div>
    </header>
  );
};

export default Header;
