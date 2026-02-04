// components/ui/radio-list.tsx
"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

export type RadioOption<TValue> = {
  value: TValue;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type BaseValue = string | number;

type RadioListSize = "sm" | "md" | "lg";

type RadioListProps<TValue extends BaseValue> = {
  name: string;
  options: RadioOption<TValue>[];
  value?: TValue;
  defaultValue?: TValue;
  onChange?: (value: TValue) => void;
  className?: string;
  optionClassName?: (
    option: RadioOption<TValue>,
    isSelected: boolean,
  ) => string;
  orientation?: "vertical" | "horizontal";
  showCheckIcon?: boolean;
  size?: RadioListSize; // NEW
};

const SIZE_STYLES: Record<RadioListSize, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-4 text-base",
};

const BULLET_SIZE: Record<RadioListSize, { outer: string; inner: string }> = {
  sm: { outer: "h-4 w-4", inner: "h-2 w-2" },
  md: { outer: "h-5 w-5", inner: "h-2.5 w-2.5" },
  lg: { outer: "h-6 w-6", inner: "h-3 w-3" },
};

const CHECK_ICON_SIZE: Record<RadioListSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function RadioList<TValue extends BaseValue>({
  name,
  options,
  value,
  defaultValue,
  onChange,
  className,
  optionClassName,
  orientation = "vertical",
  showCheckIcon = true,
  size = "md"
}: RadioListProps<TValue>) {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = React.useState<TValue | undefined>(
    defaultValue,
  );

  const selectedValue = isControlled ? value : internalValue;

  const handleChange = (newValue: TValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div
      className={clsx(
        "flex",
        orientation === "vertical"
          ? "flex-col gap-2"
          : "flex-row gap-3 flex-wrap",
        className,
      )}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((option) => {
        const isSelected = selectedValue === option.value;
        const isDisabled = option.disabled;

        const baseClasses = clsx(
          "relative flex items-center gap-3 rounded-xl border cursor-pointer transition-all",
          SIZE_STYLES[size],
        );

        const stateClasses = isSelected
          ? "border-blue-500 bg-blue-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40";
        const disabledClasses = isDisabled
          ? "opacity-50 cursor-not-allowed hover:border-slate-200 hover:bg-white"
          : "";

        const finalOptionClassName =
          optionClassName?.(option, isSelected) ??
          clsx(baseClasses, stateClasses, disabledClasses);

        return (
          <button
            key={String(option.value)}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-disabled={isDisabled}
            disabled={isDisabled}
            onClick={() => !isDisabled && handleChange(option.value)}
            className={finalOptionClassName}
          >
            {/* Left bullet */}
            <div className="flex items-center justify-center">
              <div
                className={clsx(
                  "flex items-center justify-center rounded-full border-2",
                  BULLET_SIZE[size].outer,
                  isSelected ? "border-blue-500" : "border-slate-300",
                )}
              >
                <div
                  className={clsx(
                    "rounded-full",
                    BULLET_SIZE[size].inner,
                    isSelected ? "bg-blue-500" : "bg-transparent",
                  )}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col items-start text-left">
              <span className="font-semibold flex gap-2 text-slate-800">
                {option.label}
                {option.icon}
              </span>
              {option.description && (
                <span className="text-xs text-slate-500">
                  {option.description}
                </span>
              )}
            </div>

            {/* Right check icon */}
            {showCheckIcon && (
              <div className="ml-auto">
                {isSelected && (
                  <CheckCircle2
                    className={clsx(
                      CHECK_ICON_SIZE[size],
                      "text-blue-500",
                    )}
                    aria-hidden="true"
                  />
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
