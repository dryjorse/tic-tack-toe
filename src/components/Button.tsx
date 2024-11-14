import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={`${className} border border-black rounded-3xl bg-[#ffe6bd] px-3 py-1`}
      onClick={onClick}
      {...props} 
    >
      {children}
    </button>
  );
};

export default Button;
