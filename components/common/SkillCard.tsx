// components/SkillCard.tsx
"use client";

import { SkillType } from "@/types/GradeWithDetails";
import { Button } from "../base/Button";

const SkillCard = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="rounded-xl bg-white p-3 shadow-sm">
      <h3 className="text-lg font-semibold text-violet-500 ">{skill.name}</h3>
      {skill.description && (
        <p className="mt-1 text-xs text-slate-600">{skill.description}</p>
      )}

      <div className="mt-2 flex flex-wrap gap-2">
        <Button size="sm" variant="tertiary">1</Button>
        <Button size="sm" variant="tertiary">2</Button>
        <Button size="sm" variant="tertiary">3</Button>
        <Button size="sm" variant="tertiary">4</Button>
        <Button size="sm" variant="tertiary">5</Button>
      </div>
    </div>
  );
};

export default SkillCard;
