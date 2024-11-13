import { FC } from "react";

interface InputProps {
  placeholder: string;
  className?: string;
  type?:string;
}

export const Input: FC<InputProps> = ({ placeholder, className,type }) => {
  return (
    <input
      className={`${className} border border-black rounded-2xl bg-[#fff] px-3 py-1 md:w-64 md:h-9 sm:w-56 w-48 lg:w-72 lg:h-10 text-[#66A0FF]`}
      placeholder={placeholder}
      type={type}
    />
  );
};
