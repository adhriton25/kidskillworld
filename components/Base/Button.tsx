import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonShape = "square" | "rounded";
type ButtonMode = "button" | "loading";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  mode?: ButtonMode;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  disabled?: boolean;
  showUnderline?: boolean;
  className?: string;
  children?: React.ReactNode;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  href?: string;
  target?: "_self" | "_blank";
  isLinkButton?: boolean;

  loadingText?: string;
  spinnerSize?: number;
  spinnerColor?: string;

  onClick?: (e: any) => void;
  onKeyDown?: (e: any) => void;
}

// Variant tokens
const VARIANTS = {
  primary: {
    bg: "var(--ksw-color-action-primary-default)",
    text: "var(--white)",
    hover: "var(--ksw-color-action-primary-active)",
  },
  secondary: {
    bg: "var(--ksw-color-action-secondary-default)",
    text: "var(--black)",
    hover: "var(--ksw-color-action-secondary-active)",
  },
  tertiary: {
    bg: "var(--ksw-color-action-tertiary-default)",
    text: "var(--white)",
    hover: "var(--ksw-color-action-tertiary-active)",
  },
} as const;

const SHAPES = {
  square: "rounded-[var(--radius-md)]",
  rounded: "rounded-[var(--radius-pill)]",
} as const;

const SIZES = {
  sm: "px-3 py-1 h-8 text-[1rem] ",
  md: "px-6 py-3 h-12 text-[1.2rem] ",
  lg: "px-8 py-4 h-16 text-[2rem]",
} as const;

export const Button: React.FC<ButtonProps> = ({
  mode = "button",
  variant = "primary",
  shape = "square",
  size = "md",
  disabled = false,
  showUnderline = false,
  className,
  children,
  leftIcon,
  rightIcon,
  href,
  target = "_self",
  isLinkButton = false,
  loadingText = "...loading",
  spinnerSize = 18,
  spinnerColor = "Black",
  onClick,
  onKeyDown,
}) => {
  const isLoading = mode === "loading";
  const variantType = VARIANTS[variant];

  // Text color logic
  const textColor =
    variant === "secondary"
      ? variantType?.text
      : isLinkButton
        ? variantType?.bg
        : variantType?.text;

  // Base classes
  const classes = clsx(
    "font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer",
    "font-bold transition duration-200 ease-in-out ",
    isLinkButton ? "" : "border-2",
    SIZES[size],
    isLinkButton
      ? "bg-transparent underline underline-offset-4 shadow-none"
      : `${SHAPES[shape]} shadow-md`,
    disabled && "opacity-50 pointer-events-none",
    showUnderline && "underline underline-offset-4",
    className,
  );

  return (
    <a
      tabIndex={0}
      href={href}
      target={target}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={classes}
      style={{
        backgroundColor: isLinkButton ? "transparent" : variantType?.bg,
        color: textColor,
      }}
    >
      {isLoading ? (
        <>
          <span
            className="flex items-center justify-center"
            style={{
              width: spinnerSize,
              height: spinnerSize,
              border: "3px solid rgba(255,255,255,0.4)",
              borderTopColor: spinnerColor,
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </a>
  );
};
