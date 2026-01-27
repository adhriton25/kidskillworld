// components/GradeCard.tsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { GradeWithDetails } from "@/types/GradeWithDetails";

import { getSubjectIcon } from "@/constant/subjects";
import { Button } from "../base/Button";

export const GradeCard = ({ grade }: { grade: GradeWithDetails }) => {
  const [collapsedCategories, setCollapsedCategories] = useState<
    Record<string, boolean>
  >({});

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

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className={`bg-[var(--grade-${grade.id})] py-4 text-center`}>
        <h2 className="text-white text-3xl font-bold">{grade.name}</h2>
      </div>

      {/* Global Expand/Collapse */}
      <div className="flex justify-between px-6 pt-4">
        <Button isLinkButton onClick={expandAll}>
          Expand All
        </Button>
        <Button isLinkButton onClick={collapseAll}>
          Collapse All
        </Button>
      </div>

      <div className="p-6 space-y-8">
        {Object.entries(subjectsInGrade).map(([subjectName, skills]) => {
          // Group skills by category
          const categories = skills.reduce(
            (acc, skill) => {
              const categoryName = skill.category.name;
              if (!acc[categoryName]) acc[categoryName] = [];
              acc[categoryName].push(skill);
              return acc;
            },
            {} as Record<string, typeof skills>,
          );

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
                {Object.entries(categories).map(
                  ([categoryName, categorySkills]) => {
                    const categoryKey = `${subjectName}-${categoryName}`;
                    const isCategoryCollapsed =
                      collapsedCategories[categoryKey] ?? true;

                    return (
                      <div key={categoryName} className="pl-6">
                        {/* Category Header with count */}
                        <div className="flex items-center justify-between">
                          <h4 className="text-green-800 font-bold text-lg">
                            {categoryName.split(" - ").slice(2).join(" - ")}{" "}
                            <span className="text-gray-600 text-sm font-medium">
                              ({categorySkills.length} Skills)
                            </span>
                          </h4>
                          <Button
                            isLinkButton
                            variant="secondary"
                            onClick={() => toggleCategory(categoryKey)}
                            leftIcon={
                              isCategoryCollapsed ? (
                                <ChevronRight />
                              ) : (
                                <ChevronDown />
                              )
                            }
                          />
                        </div>
                        {/* Skills */}
                        {!isCategoryCollapsed && (
                          <div className="flex flex-col gap-2 my-3">
                            {categorySkills.map((skill) => (
                              <div
                                key={skill.id}
                                className="flex justify-between items-center group pl-1"
                              >
                                <Button
                                  isLinkButton
                                  href={`/learning?grade=${grade.id}&subject=${skill.subject.id}`}
                                  size="sm"
                                >
                                  {skill.name}
                                </Button>
                                <Button
                                  size="sm"
                                  href={`/learning?grade=${grade.id}&subject=${skill.subject.id}`}
                                >
                                  Practice: {skill._count.topics}
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
