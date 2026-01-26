"use client";
import React from "react";
import { X } from "lucide-react";
import { Button } from "../base/button";
import { HEADER_TABS } from "@/constant/header-tab";

export const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-[7.5rem] left-0 h-full w-64 bg-white shadow-xl p-4 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[var(--ksw-color-action-secondary-default)]">
            Menu
          </h2>
          <Button
            isLinkButton
            variant="secondary"
            onClick={onClose}
            leftIcon={<X />}
          />
        </div>

        <nav className="flex justify-start flex-col gap-3">
          {HEADER_TABS.map((tab) => (
            <Button key={tab.id} size="lg" isLinkButton href={tab.href}>
              {tab.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};
