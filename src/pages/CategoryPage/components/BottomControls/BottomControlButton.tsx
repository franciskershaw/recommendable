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
      className="rounded-full bg-secondary p-4 text-primary flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default BottomControlButton;
