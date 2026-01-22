"use client";
import React, { ReactNode } from "react";
import "./chip.scss";

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
  bold?: boolean;
  iconPosition?: ChipIconPosition;
  text: string;
}

const Chip: React.FC<ChipProps> = ({
  className = "",
  variant = "primary",
  size = "md",
  icon,
  bold = true,
  iconPosition = "left",
  text,
  onClick,
  ...rest
}) => {
  const customClass = [
    className,
    `${variant}-banner `,
    "flex items-center",
    `banner-${size}`,
    bold && "font-bold",
    onClick && "cursor-pointer",
  ]
    .filter(Boolean)
    .join(" ");

  const childComponent = (
    <>
      {iconPosition === "left" && icon && (
        <span className="ban-left-icon flex">{icon}</span>
      )}
      <span className="flex-1 text-wrap">{text}</span>
      {iconPosition === "right" && icon && (
        <span className="ban-right-icon flex">{icon}</span>
      )}
    </>
  );

  return (
    <>
      {onClick ? (
        <button {...rest} onClick={onClick} className={customClass}>
          {childComponent}
        </button>
      ) : (
        <div {...rest} className={customClass}>
          {childComponent}
        </div>
      )}
    </>
  );
};

export default Chip;
