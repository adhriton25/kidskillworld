import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonShape = "square" | "rounded";
type ButtonMode = "button" | "loading";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  // Fixed type to strictly allow button types
  type?: "button" | "submit" | "reset"; 
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

const VARIANTS = {
  primary: {
    bg: "bg-[var(--ksw-color-action-primary-default)]",
    text: "text-[var(--white)]",
    linkText: "text-[var(--ksw-color-action-primary-default)]",
    hover: "hover:bg-[var(--ksw-color-action-primary-active)]",
  },
  secondary: {
    bg: "bg-[var(--ksw-color-action-secondary-base)] ",
    text: "text-[var(--ksw-color-action-secondary-default)]",
    linkText: "text-[var(--ksw-color-action-secondary-default)]",
    hover: "hover:bg-[var(--ksw-color-action-secondary-active)]",
  },
  tertiary: {
    bg: "bg-[var(--ksw-color-action-tertiary-default)]",
    text: "text-[var(--white)]",
    linkText: "text-[var(--ksw-color-action-tertiary-default)]",
    hover: "hover:bg-[var(--ksw-color-action-tertiary-active)]",
  },
} as const;

const SHAPES = {
  square: "rounded-[var(--radius-md)]",
  rounded: "rounded-[var(--radius-pill)]",
} as const;

const SIZES = {
  sm: "px-3 py-1 text-sm",
  md: "px-6 py-2 text-md",
  lg: "px-8 py-3 text-lg",
} as const;

export const Button: React.FC<ButtonProps> = ({
  type = "button",
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

  const classes = clsx(
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap cursor-pointer font-bold transition duration-200 ease-in-out",
    SIZES[size],
   disabled && "opacity-50 pointer-events-none",
    showUnderline && "underline underline-offset-4",
    // Link button mode
        isLinkButton
      ? [
        "bg-transparent hover:underline underline-offset-4 shadow-none border-0 !p-0 w-fit h-fit",
        variantType.linkText,
      ]
      : [
        variantType.bg, 
        variantType.text, 
        variantType.hover, 
        SHAPES[shape], 
        variant === "secondary" ? "border-2 " : "border-0",
        "shadow-sm",
      ],
    className,
  );

  // Content shared by both <a> and <button>
  const content = (
    <>
      {isLoading ? (
        <>
          <span
            className="flex items-center justify-center animate-spin"
            style={{
              width: spinnerSize,
              height: spinnerSize,
              border: "3px solid rgba(255,255,255,0.4)",
              borderTopColor: spinnerColor,
              borderRadius: "50%",
            }}
          />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );

  // If href exists, render as Link/Anchor
  if (href) {
    return (
      <a href={href} target={target} onClick={onClick} onKeyDown={onKeyDown} className={classes}>
        {content}
      </a>
    );
  }

  // Otherwise render as a Button (Form Submit capable)
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={classes}
    >
      {content}
    </button>
  );
};