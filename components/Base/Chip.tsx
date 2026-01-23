"use client";
import React, { ReactNode } from "react";
import clsx from "clsx";

type ChipIconPosition = "left" | "right";
type ChipVariant =
  | "primary"
  | "primary-light"
  | "secondary"
  | "secondary-light"
  | "tertiary"
  | "tertiary-light";
type ChipSize = "sm" | "md" | "lg";

export interface ChipProps {
  onClick?: () => void;
  className?: string;
  variant?: ChipVariant;
  size?: ChipSize;
  icon?: ReactNode;
  iconPosition?: ChipIconPosition;
  text: string;
}

const CHIP_VARIANTS = {
  primary: {
    bg: "var(--ksw-color-action-primary-base)",
    text: "var(--ksw-color-action-primary-default)",
    border: "none",
  },
  "primary-light": {
    bg: "var(--white)",
    text: "var(--ksw-color-action-primary-default)",
    border: "0.0825rem solid var(--ksw-color-action-primary-default)",
  },
  secondary: {
    bg: "var(--ksw-color-action-secondary-base)",
    text: "var(--ksw-color-action-secondary-default)",
    border: "none",
  },
  "secondary-light": {
    bg: "var(--white)",
    text: "var(--ksw-color-action-secondary-default)",
    border: "0.0825rem solid var(--ksw-color-action-secondary-default)",
  },
  tertiary: {
    bg: "var(--ksw-color-action-tertiary-base)",
    text: "var(--ksw-color-action-tertiary-default)",
    border: "none",
  },
  "tertiary-light": {
    bg: "var(--white)",
    text: "var(--ksw-color-action-tertiary-default)",
    border: "0.0825rem solid var(--ksw-color-action-tertiary-default)",
  },
} as const;

const CHIP_SIZES = {
  sm: "text-xs px-4 py-1",
  md: "text-md px-4 py-2",
  lg: "text-lg px-4 py-3",
} as const;

const Chip: React.FC<ChipProps> = ({
  className = "",
  variant = "primary",
  size = "sm",
  icon,
  iconPosition = "left",
  text,
  onClick,
  ...rest
}) => {
  const variantStyles = CHIP_VARIANTS[variant];
  const classes = clsx(
    "inline-flex items-center font-semibold w-fit rounded-lg",
    CHIP_SIZES[size],
    onClick && "cursor-pointer",
    className,
  );

  const childComponent = (
    <>
      {iconPosition === "left" && icon && (
        <span className="flex items-center mr-2">{icon}</span>
      )}
      <span className="flex-1 text-wrap">{text}</span>
      {iconPosition === "right" && icon && (
        <span className="flex items-center ml-2">{icon}</span>
      )}
    </>
  );

  return (
    <>
      {onClick ? (
        <button
          {...rest}
          onClick={onClick}
          className={classes}
          style={{
            backgroundColor: variantStyles.bg,
            color: variantStyles.text,
            border: variantStyles.border,
          }}
        >
          {childComponent}
        </button>
      ) : (
        <div
          {...rest}
          className={classes}
          style={{
            backgroundColor: variantStyles.bg,
            color: variantStyles.text,
            border: variantStyles.border,
          }}
        >
          {childComponent}
        </div>
      )}
    </>
  );
};

export default Chip;
