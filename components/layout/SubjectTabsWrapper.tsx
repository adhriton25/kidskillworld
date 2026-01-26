"use client";

import { usePathname } from "next/navigation";
import { HEADER_TABS } from "@/constant/header-tab";
import { SubjectTabs } from "./SubjectTabs";

export const SubjectTabsWrapper = () => {
  const pathname = usePathname();

 const activeTab = HEADER_TABS.find((tab) => pathname === tab.href);


  const show = activeTab?.showSubjectTabs;

  return (
    <div
      className={`
        max-w-7xl mx-auto px-4 transition-all duration-500
        ${show ? "opacity-100 translate-y-0 mt-3" : "opacity-0 -translate-y-4 pointer-events-none h-0"}
      `}
    >
      {show && <SubjectTabs />}
    </div>
  );
};
