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

  futureSlot?: React.ReactNode;

  onClick?: (e: any) => void;
  onKeyDown?: (e: any) => void;
}

// Centralized variant system
const VARIANTS_TYPE = {
  primary: { bg: "var(--btn-primary)", text: "var(--white)" },
  secondary: { bg: "var(--btn-secondary)", text: "var(--black)" }, // always black
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

// NEW SIZE SYSTEM
const SIZES = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
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
  spinnerSize = 18,
  spinnerColor = "Black",
  onClick,
  onKeyDown,
}) => {
  const variantType = VARIANTS_TYPE[variant];
  const isLoading = mode === "loading";

  // Shared base styles
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    transition-all duration-[var(--duration-normal)]
    focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]
    whitespace-nowrap
    ${SIZES[size]}
  `;

  // Normal button styles
  const buttonStyles = `
    ${SHAPES[shape]}
    shadow-md
  `;

  // Text-link button styles
  const linkStyles = `
    bg-transparent
    underline underline-offset-2
    shadow-none
  `;

  // TEXT COLOR LOGIC
  const textColor = isLinkButton
    ? variantType.bg // link → text = variant color
    : variant === "secondary"
    ? "var(--black)" // secondary always black
    : "var(--white)"; // all other buttons → white

  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={clsx(
        baseStyles,
        isLinkButton ? linkStyles : buttonStyles,
        disabled && "opacity-50 pointer-events-none",
        selected && "ring-2 ring-[var(--color-accent)]",
        showUnderline && "underline underline-offset-2",
        className
      )}
      style={{
        backgroundColor: isLinkButton ? "transparent" : variantType.bg,
        color: textColor,
      }}
    >
      {/* LOADING MODE */}
      {isLoading && (
        <>
          <span
            className="flex items-center justify-center"
            style={{
              width: spinnerSize,
              height: spinnerSize,
              border: `3px solid rgba(255,255,255,0.4)`,
              borderTopColor: spinnerColor,
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <span className="opacity-0">{children}</span>
        </>
      )}

      {/* NORMAL MODE */}
      {!isLoading && (
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
