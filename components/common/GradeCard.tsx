// components/GradeCard.tsx
"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { GradeWithDetails } from "@/types/GradeWithDetails";
import { getGradeColor } from "@/lib/utils";
import { getSubjectIcon } from "@/Constant/subjects";

export const GradeCard = ({ grade }: { grade: GradeWithDetails }) => {
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryKey: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  const expandAll = () => {
    const newCategories: Record<string, boolean> = {};
    grade.skills.forEach((skill) => {
      newCategories[`${skill.subject.name}-${skill.category.name}`] = false;
    });
    setCollapsedCategories(newCategories);
  };

  const collapseAll = () => {
    const newCategories: Record<string, boolean> = {};
    grade.skills.forEach((skill) => {
      newCategories[`${skill.subject.name}-${skill.category.name}`] = true;
    });
    setCollapsedCategories(newCategories);
  };

  // Group skills by subject
  const subjectsInGrade = grade.skills.reduce(
    (acc, skill) => {
      const subjectName = skill.subject.name;
      if (!acc[subjectName]) acc[subjectName] = [];
      acc[subjectName].push(skill);
      return acc;
    },
    {} as Record<string, typeof grade.skills>,
  );

  const headerBg = getGradeColor(grade.id);

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className={`${headerBg} py-4 text-center`}>
        <h2 className="text-white text-3xl font-bold">{grade.name}</h2>
      </div>

      {/* Global Expand/Collapse */}
      <div className="flex justify-between px-6 pt-4">
        <button
          onClick={expandAll}
          className="text-blue-700 font-semibold hover:underline"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="text-blue-700 font-semibold hover:underline"
        >
          Collapse All
        </button>
      </div>

      <div className="p-6 space-y-8">
        {Object.entries(subjectsInGrade).map(([subjectName, skills]) => {
          // Group skills by category
          const categories = skills.reduce((acc, skill) => {
            const categoryName = skill.category.name;
            if (!acc[categoryName]) acc[categoryName] = [];
            acc[categoryName].push(skill);
            return acc;
          }, {} as Record<string, typeof skills>);

          return (
            <div key={subjectName} className="space-y-6">
              {/* Subject Title */}
              <div className="flex items-center gap-3">
                {getSubjectIcon(skills[0].subject.id)}
                <h3 className="text-blue-700 text-xl font-bold leading-none">
                  {subjectName}
                </h3>
              </div>

              {/* Categories */}
              <div className="transition-all duration-300 ease-in-out">
                {Object.entries(categories).map(([categoryName, categorySkills]) => {
                  const categoryKey = `${subjectName}-${categoryName}`;
                  const isCategoryCollapsed = collapsedCategories[categoryKey] ?? true;

                  return (
                    <div key={categoryName} className="pl-6 space-y-3">
                      {/* Category Header with count */}
                      <div className="flex items-center justify-between">
                        <h4 className="text-green-800 font-bold text-lg">
                          {categoryName.split(" - ").slice(2).join(" - ")}{" "}
                          <span className="text-gray-600 text-sm font-medium">
                            ({categorySkills.length} Skills)
                          </span>
                        </h4>

                        <button
                          onClick={() => toggleCategory(categoryKey)}
                          className="p-1 rounded hover:bg-gray-200"
                        >
                          {isCategoryCollapsed ? (
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-700" />
                          )}
                        </button>
                      </div>

                      {/* Skills */}
                      {!isCategoryCollapsed && (
                        <ul className=" transition-all ease-in-out my-6">
                          {categorySkills.map((skill) => (
                            <li
                              key={skill.id}
                              className="flex justify-between items-center group pl-6"
                            >
                              <span className="text-gray-800 text-lg font-medium group-hover:text-blue-600 cursor-pointer">
                                {skill.name}
                              </span>
                              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md font-bold">
                                Topics: {skill._count.topics}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
