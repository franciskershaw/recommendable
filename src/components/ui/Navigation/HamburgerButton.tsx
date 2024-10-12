const HamburgerBars = ({
  isExpanded,
  toggleSidebar,
}: {
  isExpanded: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <button
      className={`fixed top-3 right-4 z-50 md:hidden transition-all duration-200`}
      onClick={toggleSidebar}
    >
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-12 h-12 transform transition-all bg-secondary">
        <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={`bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isExpanded ? "translate-x-10" : ""
            }`}
          ></div>
          <div
            className={`bg-primary h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
              isExpanded ? "translate-x-10" : ""
            }`}
          ></div>
          <div
            className={`bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
              isExpanded ? "translate-x-10" : ""
            }`}
          ></div>

          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${
              isExpanded ? "translate-x-0 w-12" : "-translate-x-10 w-0"
            }`}
          >
            <div
              className={`absolute bg-primary h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                isExpanded ? "rotate-45" : "rotate-0"
              }`}
            ></div>
            <div
              className={`absolute bg-primary h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                isExpanded ? "-rotate-45" : "rotate-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default HamburgerBars;
