"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  type?: "text" | "email" | "password" | "number" | "search";
  name: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rounded?: boolean;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type"> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "type">;

export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  error,
  helperText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rounded = false,
  className,
  ...rest
}: InputProps) {
  const baseStyles =
    "px-3 py-2 text-base bg-white border outline-none transition-all focus:ring-2 focus:ring-[var(--ksw-color-action-primary-default)]";
  const shape = rounded ? "rounded-full" : "rounded-md";
  const errorStyles = error ? "border-red-500" : "border-gray-300";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const inputClass = cn(
    baseStyles,
    shape,
    errorStyles,
    disabledStyles,
    className,
  );

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {LeftIcon && (
          <span className="absolute left-3 text-gray-400">{LeftIcon}</span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={cn(
            inputClass,
            LeftIcon ? "pl-10" : "",
            RightIcon ? "pr-10" : "",
          )}
          {...rest}
        />
        {RightIcon && (
          <span className="absolute right-3 text-gray-400">{RightIcon}</span>
        )}
      </div>
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
