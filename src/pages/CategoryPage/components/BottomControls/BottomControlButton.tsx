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
      className="rounded-full bg-secondary p-4 text-secondary-foreground flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default BottomControlButton;
