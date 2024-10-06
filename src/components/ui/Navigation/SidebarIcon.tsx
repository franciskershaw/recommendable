import { Link } from "react-router-dom";

const SidebarIcon = ({
  icon,
  label,
  isExpanded = true,
  to,
  onClick = () => {},
}: {
  icon: React.ReactNode;
  label: string;
  isExpanded?: boolean;
  to?: string;
  onClick?: () => void;
}) => {
  const Wrapper = to ? Link : "button";
  return (
    <Wrapper
      to={to || ""}
      onClick={onClick}
      className="flex items-center w-full"
    >
      <span className="flex-shrink-0 w-20 flex justify-center text-white text-xl">
        {icon}
      </span>

      <span
        className={`${
          isExpanded ? "opacity-100" : "opacity-0"
        } text-white whitespace-nowrap transition-opacity duration-300`}
        style={{ width: isExpanded ? "auto" : "0px" }}
      >
        {label}
      </span>
    </Wrapper>
  );
};

export default SidebarIcon;
