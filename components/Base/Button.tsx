import React from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info";

type ButtonShape = "square" | "rounded";
type ButtonMode = "button" | "loading";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  mode?: ButtonMode;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  disabled?: boolean;
  selected?: boolean;
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
  primary: { bg: "var(--btn-primary)", text: "var(--white)" },
  secondary: { bg: "var(--btn-secondary)", text: "var(--black)" },
  accent: { bg: "var(--btn-accent)", text: "var(--white)" },
  success: { bg: "var(--btn-success)", text: "var(--white)" },
  warning: { bg: "var(--btn-warning)", text: "var(--black)" },
  error: { bg: "var(--btn-error)", text: "var(--white)" },
  info: { bg: "var(--btn-info)", text: "var(--white)" },
} as const;

const SHAPES = {
  square: "rounded-[var(--radius-md)]",
  rounded: "rounded-[var(--radius-pill)]",
} as const;

const SIZES = {
  sm: "px-3 py-1 h-8",
  md: "px-6 py-3 h-12",
  lg: "px-8 py-4 h-16",
} as const;

export const Button: React.FC<ButtonProps> = ({
  mode = "button",
  variant = "primary",
  shape = "square",
  size = "md",
  disabled = false,
  selected = false,
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
  const textColor = variant === "secondary" ? variantType.text : isLinkButton
    ? variantType.bg
    : variantType.text;

  // Base classes
  const classes = clsx(
    "font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]",
    SIZES[size],
    isLinkButton
      ? "bg-transparent underline underline-offset-2 shadow-none"
      : `${SHAPES[shape]} shadow-md`,
    disabled && "opacity-50 pointer-events-none",
    selected && "ring-2 ring-[var(--color-accent)]",
    showUnderline && "underline underline-offset-2",
    className
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
        backgroundColor: isLinkButton ? "transparent" : variantType.bg,
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
