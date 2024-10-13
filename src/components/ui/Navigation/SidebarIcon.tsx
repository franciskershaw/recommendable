import { Link, useLocation } from "react-router-dom";

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
  const active = useLocation().pathname === to;

  return (
    <Wrapper
      to={to || ""}
      onClick={onClick}
      className="flex items-center w-full"
    >
      <span
        className={`flex-shrink-0 w-20 flex justify-center text-xl transition-colors duration-300 ${
          active ? "text-primary-bright" : "text-primary-foreground"
        }`}
      >
        {icon}
      </span>

      <span
        className={`${
          isExpanded ? "opacity-100" : "opacity-0"
        } whitespace-nowrap transition-all duration-300 ${
          active ? "text-white font-bold" : "text-white"
        }`}
        style={{ width: isExpanded ? "auto" : "0px" }}
      >
        {label}
      </span>
    </Wrapper>
  );
};

export default SidebarIcon;
