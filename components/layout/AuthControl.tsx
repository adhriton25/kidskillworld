"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { User, Settings, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "../base/Button";

type UserType = {
  name: string;
  avatar?: string;
  email?: string;
};

type AuthControlProps = {
  user: UserType | null;
};

export default function AuthControl({ user }: AuthControlProps) {
  const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <Button
        href="/login"
        variant="secondary"
        leftIcon={<User />}
        className="px-[0.625rem] md:px-6 !text-[var(--ksw-color-action-primary-default)]"
      >
        <span className="hidden md:block">Login</span>
      </Button>
    );
  }

  return (
    <div className="relative">
       <Button
        onClick={() => setOpen(!open)}
        variant="secondary"
        leftIcon={<User />}
        className="px-[0.625rem] md:px-6 !text-[var(--ksw-color-action-primary-default)]"
      >
        <span className="hidden md:block">{user.name}</span>
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-md border border-gray-200 z-50 overflow-hidden">
          <Link
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            <User size={18} /> Profile
          </Link>

          <Link
            href="/settings"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            <Settings size={18} /> Settings
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex w-full items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
