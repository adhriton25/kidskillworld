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
    <Link
      href={href}
      className={`text-lg font-semibold cursor-pointer transition-colors
        ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}
      `}
    >
      {label}
    </Link>
  );
};
