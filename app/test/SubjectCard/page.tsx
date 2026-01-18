
import { SubjectCard } from '@/components/common/SubjectCard';
import { Atom, Calculator } from 'lucide-react';

const subjects = [
  {
    title: "Physics",
    description: "Mechanics, thermodynamics,...",
    icon: Atom,
    color: "#A855F7", // Purple
  },
  {
    title: "Maths",
    
    description: "Calculus, Algebra, Geometry...",
    icon: Calculator,
    color: "#3B82F6", // Blue
  },
];

export default function SubjectGrid() {
  return (
    <div className="flex gap-6 p-10 bg-slate-50">
      {subjects.map((subject) => (
        <SubjectCard key={subject.title} {...subject} />
      ))}
    </div>
  );
}