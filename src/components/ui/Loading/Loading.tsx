const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex">
        <div className="relative">
          <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-secondary"></div>
          <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
