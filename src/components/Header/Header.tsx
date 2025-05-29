const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-start p-2 gap-4 sm:gap-0">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-gray-900 dark:text-white transition-colors">
        Portfolio
      </h1>
      <div className="text-left sm:text-right mt-0 sm:mt-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold font-sans text-gray-800 dark:text-gray-200 transition-colors">
          꿈꾸던 그 모든 것,
        </div>
        <div className="flex items-center text-lg sm:text-xl md:text-2xl font-semibold font-sans text-gray-800 dark:text-gray-200 transition-colors">
          <span className="font-bold font-sans text-gray-900 dark:text-white">
            진문
          </span>
          과 함께 현실로.
        </div>
      </div>
    </header>
  );
};

export default Header;
