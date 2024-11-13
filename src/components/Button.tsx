import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={`${className} border border-black rounded-3xl bg-[#ffe6bd] px-3 py-1`}>{children}</button>;
};

export default Button;
