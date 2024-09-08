import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?:
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-black";
}

const Heading = ({
  children,
  type = "h1",
  fontWeight = "font-normal",
}: HeadingProps) => {
  const headingStyles = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  };

  const Tag = type;
  const styles = `${headingStyles[type]} ${fontWeight}`;

  return <Tag className={styles}>{children}</Tag>;
};

export default Heading;
