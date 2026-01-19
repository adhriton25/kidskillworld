"use client";

import { usePathname } from "next/navigation";
import { HEADER_TABS } from "@/Constant/header-tab";
import { SubjectTabs } from "./SubjectTabs";

export const SubjectTabsWrapper = () => {
  const pathname = usePathname();

  const activeTab = HEADER_TABS.find((tab) =>
    pathname.startsWith(tab.href)
  );

  if (!activeTab?.showSubjectTabs) return null;

  return (
    <div className="max-w-7xl mx-auto mt-3 px-4">
      <SubjectTabs />
    </div>
  );
};
