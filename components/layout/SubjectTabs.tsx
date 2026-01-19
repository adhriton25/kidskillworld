"use client";
import React from "react";
import { SUBJECT_LIST } from "@/Constant/subjects";
import { HEADER_TABS } from "@/Constant/header-tab";
import { usePathname } from "next/navigation";

export const SubjectTabs = () => {
  const pathname = usePathname();
  // Find active tab
  const activeTab = HEADER_TABS.find((tab) => pathname.startsWith(tab.href));
  return (
    <>
      {/* Show SubjectTabs only when Learning tab is active */}
      {activeTab?.showSubjectTabs && (
        <div className="flex gap-4 overflow-x-auto py-3 px-4 bg-white shadow rounded-xl">
          {SUBJECT_LIST.map((sub) => (
            <button
              key={sub.id}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow hover:bg-gray-200"
            >
              {sub.icon}
              <span className="font-semibold text-gray-700">{sub.name}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};


