"use client";
import React from "react";
import { SUBJECT_LIST } from "@/Constant/subjects";

export const SubjectTabs = () => {
  return (
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
  );
}
