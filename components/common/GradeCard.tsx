// components/GradeCard.tsx
import React from "react";
import { Calculator, BookOpen } from "lucide-react";
import { GradeWithDetails } from "@/types/GradeWithDetails";
import { GRADE_COLORS } from "@/lib/constant";

export const GradeCard = ({ grade }: { grade: GradeWithDetails }) => {
  // Group skills by subject name
  const subjectsInGrade = grade.skills.reduce(
    (acc, skill) => {
      const subjectName = skill.subject.name;
      if (!acc[subjectName]) acc[subjectName] = [];
      acc[subjectName].push(skill);
      return acc;
    },
    {} as Record<string, typeof grade.skills>,
  );

  const headerBg = GRADE_COLORS[grade.id] || GRADE_COLORS[0];

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Dynamic Header */}
      <div className={`${headerBg} py-4 text-center`}>
        <h2 className="text-white text-3xl font-bold">{grade.name}</h2>
      </div>

      <div className="p-6 space-y-8">
        {Object.entries(subjectsInGrade).map(([subjectName, skills]) => (
          <div key={subjectName} className="space-y-4">
            {/* Subject Title */}
            <div className="flex items-center gap-3">
              {subjectName.toLowerCase().includes("math") ? (
                <Calculator className="text-green-700 w-6 h-6" />
              ) : (
                <BookOpen className="text-purple-700 w-6 h-6" />
              )}
              <div>
                <h3 className="text-blue-700 text-xl font-bold leading-none">
                  {subjectName}
                </h3>
                <p className="text-green-800 text-sm font-medium mt-1">
                  {skills[0]?.category.name || "Curriculum"}
                </p>
              </div>
            </div>

            {/* Skills List */}
            <ul className="space-y-3 pl-9">
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className="flex justify-between items-center group"
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
          </div>
        ))}
      </div>
    </div>
  );
};
