const BottomBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 px-6 py-3 shadow-md flex items-center justify-between">
      {children}
    </div>
  );
};

export default BottomBar;
