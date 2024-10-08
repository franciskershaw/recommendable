const BottomControlButton = ({
  children,
  onClick = () => {},
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-slate-700 p-4 text-white flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default BottomControlButton;
