"use client";

import { GradeType } from "@/types/GradeWithDetails";
import { FC } from "react";
import { Button } from "../base/Button";

interface SkillCategoryFilterProps {
  grades: GradeType[];
  gradeId: number | null;
  subjectId: number | null;
  categoryId: number | null;
  onCategoryChange: (id: number | null) => void;
}
const SkillCategoryFilter: FC<SkillCategoryFilterProps> = ({
  grades,
  gradeId,
  subjectId,
  categoryId,
  onCategoryChange,
}) => {
  return (
    <section className="space-y-6">
      {/* Category */}
      <div>
        <h2 className="mb-2 text-sm font-semibold text-slate-700">
          Skill Category
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            shape="rounded"
            variant={categoryId === null ? "amber" : "amberLight"}
            onClick={() => onCategoryChange(null)}
          >
            All
          </Button>
          {grades
            .find((grd) => grd.id === gradeId)
            ?.subjects.find((sub) => sub.id === subjectId)
            ?.categories.map((c) => (
              <Button
                key={c.id}
                size="sm"
                shape="rounded"
                variant={categoryId === c.id ? "amber" : "amberLight"}
                onClick={() => onCategoryChange(c.id)}
              >
                {c.name}
              </Button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCategoryFilter;
