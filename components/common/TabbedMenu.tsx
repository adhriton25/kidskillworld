"use client";

import { useState } from "react";

type TabOption = {
  label: string;
  link: string;
};

type TabData = {
  id: string;
  title: string;
  options: TabOption[];
};

type TabbedMenuProps = {
  tabs: TabData[];
};

export default function TabbedMenu({ tabs }: TabbedMenuProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex overflow-x-auto border-b border-gray-300 bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <ul
              key={tab.id}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {tab.options.map((opt) => (
                <li key={opt.label}>
                  <a
                    href={opt.link}
                    className="block rounded-md border border-gray-200 p-4 hover:bg-blue-50 transition"
                  >
                    <span className="text-sm font-semibold text-gray-800">
                      {opt.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null,
        )}
      </div>
    </div>
  );
}
