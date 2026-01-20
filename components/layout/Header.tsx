"use client";

import React, { useState } from "react";
import { Menu, Search, User } from "lucide-react";
import { AppIcon } from "./AppIcon";
import { MobileMenu } from "./MobileMenu";
import { HEADER_TABS } from "@/Constant/header-tab";
import { NavTab } from "./NavTab";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Slide-Out Menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="w-full bg-blue-600 py-3 px-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Menu (mobile) + Logo + Mascot */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 sm:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="text-blue-600 w-6 h-6" />
            </button>

            {/* Mascot + Logo */}
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <AppIcon />
              <h1 className="text-white text-2xl font-bold tracking-wide">
                KidSkillWorld
              </h1>
            </Link>
          </div>

          {/* Center: Tab Menu (desktop only) */}
          <nav className="hidden sm:flex gap-6">
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
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search lessons..."
                className="w-56 py-2 pl-10 pr-4 rounded-full text-lg shadow focus:outline-none bg-white"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>

            {/* Login Button */}
            <button className="bg-white px-4 py-2 rounded-full shadow flex items-center gap-2 hover:bg-gray-100">
              <User className="text-blue-600 w-5 h-5" />
              <span className="text-blue-700 font-semibold text-lg">Login</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="sm:hidden mt-3 px-2">
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
