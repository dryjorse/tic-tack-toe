import { FC } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type?: string;
  id?: string;
  readonly?: boolean;
}

export const Input: FC<InputProps> = ({
  placeholder,
  className,
  type = "text",
  id,
  readonly = false,
}) => {
  return (
    <input
      id={id}
      className={` border border-black rounded-2xl  px-3 py-1 md:w-64 md:h-9 sm:w-56 w-48 lg:w-72 lg:h-10 text-[#66A0FF] ${className} outline-none`}
      placeholder={placeholder}
      type={type}
      readOnly={readonly}
    />
  );
};
