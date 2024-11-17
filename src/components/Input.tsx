import { forwardRef, ForwardedRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  type?: string;
  id?: string;
  readonly?: boolean;
  required?: boolean;
}

const Input = (
  { placeholder, className, type = "text", id, readonly = false, required = true, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      id={id}
      className={`border border-black rounded-2xl px-3 py-1 md:w-64 md:h-9 sm:w-56 w-48 lg:w-72 lg:h-10 text-[#66A0FF] ${className} outline-none`}
      placeholder={placeholder}
      type={type}
      readOnly={readonly}
      required={required}
      {...props} // Передаем все пропсы для использования с register
    />
  );
};

export default forwardRef(Input);
