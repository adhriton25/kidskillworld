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

type ButtonMode = "button" | "loading" | "fab";

interface ButtonProps {
  mode?: ButtonMode;

  // Shared props
  variant?: ButtonVariant;
  shape?: ButtonShape;
  disabled?: boolean;
  selected?: boolean;
  showUnderline?: boolean;
  className?: string;
  children?: React.ReactNode;

  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Link behavior
  href?: string;
  target?: "_self" | "_blank";
  isLinkButton?: boolean;

  // Events
  onClick?: (e: any) => void;
  onKeyDown?: (e: any) => void;

  // Loading mode
  loadingText?: string;
  spinnerSize?: number;
  spinnerColor?: string;

  // FAB mode
  fabSize?: "sm" | "md" | "lg";

  // Future extensibility
  futureSlot?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  mode = "button",
  variant = "primary",
  shape = "square",
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
  onClick,
  onKeyDown,
  spinnerSize = 18,
  spinnerColor = "Black",
  fabSize = "md",
  futureSlot,
}) => {
  // Determine if this should render as <button> or <a>
  const isButton = onClick || !href || isLinkButton;
  const ComponentTag: any = isButton ? "button" : "a";

  // Variant → CSS variable mapping
  const variantMap: Record<ButtonVariant, string> = {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    accent: "var(--color-accent)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    info: "var(--color-info)",
  };

  const bgColor = variantMap[variant];

  // Shape mapping
  const shapeMap: Record<ButtonShape, string> = {
    square: "rounded-[var(--radius-md)]",
    rounded: "rounded-[var(--radius-pill)]",
  };

  // FAB sizes
  const fabSizeMap = {
    sm: "w-12 h-12 text-lg",
    md: "w-14 h-14 text-xl",
    lg: "w-16 h-16 text-2xl",
  };

  // Shared base styles
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-[var(--button-padding)] py-[var(--button-padding)]
    ${variant === "secondary" ? "text-[var(--soft-charcoal)]" : "text-[var(--cloud-white)]"}
    ${shapeMap[shape]}
    shadow-md
    transition-all duration-[var(--duration-normal)]
    focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]
  `;

  // FAB styles override everything
  const fabStyles = `
    fixed bottom-6 right-6
    flex items-center justify-center
    rounded-full
    shadow-lg
    text-white
    hover:scale-110 active:scale-95
    ${fabSizeMap[fabSize]}
  `;

  const isLoading = mode === "loading";
  const isFab = mode === "fab";

  return (
    <ComponentTag
      href={!isButton && href ? href : undefined}
      target={!isButton ? target : undefined}
      disabled={isButton ? disabled : undefined}
      onClick={isButton ? onClick : undefined}
      onKeyDown={onKeyDown}
      className={clsx(
        isFab ? fabStyles : baseStyles,
        disabled && "opacity-50 pointer-events-none",
        selected && "ring-2 ring-[var(--color-accent)]",
        showUnderline && "underline underline-offset-2",
        className,
      )}
      style={{
        backgroundColor: bgColor,
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

      {/* NORMAL BUTTON */}
      {!isLoading && !isFab && (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          <span className="whitespace-nowrap">{children}</span>
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}

      {/* FAB MODE */}
      {isFab && <span>{children}</span>}

      {/* Future extensibility */}
      {futureSlot}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </ComponentTag>
  );
};
