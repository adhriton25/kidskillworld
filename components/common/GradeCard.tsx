"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import { GradeType, SubjectType } from "@/types/GradeWithDetails";
import { getSubjectIcon } from "@/constant/subjects";
import { Button } from "../base/Button";

export const GradeCard = ({ grade }: { grade: GradeType }) => {
  const [activeSubjectId, setActiveSubjectId] = useState<number | null>(null);

  const toggleSubject = (subjectId: number) => {
    setActiveSubjectId((prev) => (prev === subjectId ? null : subjectId));
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className={`bg-[var(--grade-${grade.id})] py-2 text-center`}>
        <h2 className="text-white text-2xl font-bold">{grade.name}</h2>
      </div>

      <div className="p-6 ">
        {grade.subjects.map((subject) => {
          const totalSkills = subject.categories.reduce(
            (sum, cat) => sum + cat.skills.length,
            0,
          );

          const isOpen = activeSubjectId === subject.id;

          return (
            <SubjectAccordion
              key={subject.id}
              subject={subject}
              grade={grade}
              isOpen={isOpen}
              totalSkills={totalSkills}
              toggleSubject={toggleSubject}
            />
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------
   SUBJECT ACCORDION COMPONENT
--------------------------------*/
const SubjectAccordion = ({
  subject,
  grade,
  isOpen,
  totalSkills,
  toggleSubject,
}: {
  subject: SubjectType;
  grade: GradeType;
  isOpen: boolean;
  totalSkills: number;
  toggleSubject: (subjectId: number) => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight + "px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="space-y-1">
      {/* SUBJECT BUTTON */}
      <button
        onClick={() => toggleSubject(subject.id)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all border border-blue-200"
      >
        <div className="flex items-center gap-3">
          {getSubjectIcon(subject.id)}
          <span className="text-blue-700 text-lg font-bold">
            {subject.name}
            <span className="text-gray-600 text-sm font-medium ml-2">
              ({totalSkills} Skills)
            </span>
          </span>
        </div>

        {isOpen ? (
          <ChevronDown className="text-blue-700 transition-transform duration-300" />
        ) : (
          <ChevronUp className="text-blue-700 transition-transform duration-300" />
        )}
      </button>

      {/* SMOOTH AUTO-HEIGHT CONTENT */}
      <div
        ref={contentRef}
        style={{
          height,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pl-6 pt-3 pb-4 space-y-6">
          {subject.categories.map((category) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className="flex items-center justify-start">
                <div>
                  <Button
                    isLinkButton
                    href={`/learning?grade=${grade.id}&subject=${subject.id}&category=${category.id}`}
                    size="sm"
                  >
                    <h4 className="text-green-800 font-bold text-lg">
                      {category.name}
                    </h4>
                  </Button>
                  <span className="text-gray-600 text-sm font-medium ml-1">
                    ({category.skills.length} Skills)
                  </span>
                </div>

                <Button
                  isLinkButton
                  className="ml-3"
                  leftIcon={
                    <FileText className="text-[var(--golden-yellow)]" />
                  }
                  size="sm"
                  href={`/worksheets?grade=${grade.id}&subject=${subject.id}&category=${category.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
