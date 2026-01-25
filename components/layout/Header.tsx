"use client";

import React, { useState } from "react";
import { Menu, Search, User } from "lucide-react";
import { AppIcon } from "./AppIcon";
import { MobileMenu } from "./MobileMenu";
import { HEADER_TABS } from "@/Constant/header-tab";
import { NavTab } from "./NavTab";
import Link from "next/link";
import { Button } from "../Base/Button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Slide-Out Menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="w-full bg-blue-600 py-3 px-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Left: Menu (mobile) + Logo + Mascot */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <AppIcon />
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">
               {process.env.NEXT_PUBLIC_BRAND_NAME}
              </h1>
            </Link>
          </div>

          {/* Center: Tab Menu (desktop only) */}
          <nav className="hidden md:flex gap-6">
            {HEADER_TABS.map((tab) => (
              <NavTab
                key={tab.id}
                label={tab.label}
                href={tab.href}
                activeMatch={tab.activeMatch}
              />
            ))}
          </nav>

          {/* Right: Search + Login */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search lessons..."
                className="w-56 py-2 pl-10 pr-4 rounded-full text-lg shadow focus:outline-none bg-white"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>
            <Button
              href="/login"
              variant="secondary"
              leftIcon={<User />}
              className="px-[0.625rem] md:px-6 !text-[var(--ksw-color-action-primary-default)]"
            >
              <span className="hidden md:block">Login</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu Search Bar */}
        <div className="flex justify-between pt-2 md:hidden">
          <Button
            isLinkButton
            shape="rounded"
            variant="secondary"
            leftIcon={<Menu size={30} />}
            className="  !text-[var(--white)]"
            onClick={() => setMenuOpen(true)}
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Search lessons..."
              className="w-full py-2 pl-10 pr-4 rounded-full text-lg shadow focus:outline-none bg-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          </div>
        </div>
      </header>
    </>
  );
};
