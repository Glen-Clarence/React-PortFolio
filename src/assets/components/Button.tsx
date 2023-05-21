import { ReactNode } from "react";

interface buttonProps {
  className: string;
  children: ReactNode;
}

const Button: React.FC<buttonProps> = ({ className, children }) => {
  return (
    <button className={"text-4xl px-3 py-3  font-medium " + className}>
      {children}
    </button>
  );
};

export default Button;
