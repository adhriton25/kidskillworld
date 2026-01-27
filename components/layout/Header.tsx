"use client";

import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import { AppIcon } from "./AppIcon";
import { MobileMenu } from "./MobileMenu";
import { HEADER_TABS } from "@/constant/header-tab";
import { NavTab } from "./NavTab";
import Link from "next/link";
import { Button } from "../base/Button";
import Input from "../base/Input";
import AuthControl from "./AuthControl";
import type { Session } from "next-auth"; 

interface HeaderProps { session: Session | null; }

export const Header = ({ session }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="w-full bg-[var(--ksw-color-action-primary-default)] py-3 px-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <AppIcon />
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                {process.env.NEXT_PUBLIC_BRAND_NAME}
              </h1>
            </Link>
          </div>

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

          <div className="flex justify-between items-center gap-4">
            <div className="hidden md:block">
              <Input
                type="text"
                bottomMargin={false}
                rounded
                placeholder="Search lessons..."
                leftIcon={<Search />}
              />
            </div>
            <AuthControl user={session?.user || null} />
          </div>
        </div>

        <div className="flex justify-between pt-2 md:hidden">
          <Button
            isLinkButton
            shape="rounded"
            variant="secondary"
            leftIcon={<Menu size={30} />}
            className="!text-[var(--white)]"
            onClick={() => setMenuOpen(true)}
          />
          <div className="relative">
            <Input
              type="text"
              rounded
              bottomMargin={false}
              placeholder="Search lessons..."
              leftIcon={<Search />}
            />
          </div>
        </div>
      </header>
    </>
  );
};
