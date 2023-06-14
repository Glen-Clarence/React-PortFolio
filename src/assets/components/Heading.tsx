import { ReactNode } from "react";

interface Headerprops {
  children: ReactNode;
  bold: boolean;
  size: string;
  className: string | null;
}
const Heading: React.FC<Headerprops> = ({
  children,
  bold,
  size,
  className,
}) => {
  return (
    <h1
      className={size + className + `${bold ? " font-bold" : " "}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
