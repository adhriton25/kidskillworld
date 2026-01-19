"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavTab = ({
  label,
  href,
  activeMatch,
}: {
  label: string;
  href: string;
  activeMatch: string;
}) => {
  const pathname = usePathname();

  const isActive =
    activeMatch === "/"
      ? pathname === "/"
      : pathname.startsWith(activeMatch);

  return (
    <div className="relative flex flex-col items-center">
      <Link
        href={href}
        className={`text-lg font-semibold cursor-pointer transition-colors duration-300
          ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}
        `}
      >
        {label}
      </Link>

      {/* Animated underline */}
      <span
        className={`
          absolute -bottom-1 h-1 rounded-full bg-yellow-300 transition-all duration-300
          ${isActive ? "w-8 opacity-100" : "w-0 opacity-0"}
        `}
      />
    </div>
  );
};
