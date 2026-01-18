
import { TabbedMenu } from "@/components";
import { prisma } from "@/lib/prisma";

export default async function GradesPage() {
  const grades = await prisma.grade.findMany();
  const tabs = [
    {
      id: "reading",
      title: "Reading Strategies",
      options: [
        { label: "Identify the main idea", link: "/worksheets/main-idea" },
        { label: "Use context clues", link: "/worksheets/context-clues" },
      ],
    },
    {
      id: "grammar",
      title: "Grammar",
      options: [
        { label: "Identify nouns", link: "/worksheets/nouns" },
        { label: "Use verbs correctly", link: "/worksheets/verbs" },
      ],
    },
  ];
  return (
    <div>
      <h1>Grades</h1>
      <ul>
        {grades.map((g) => (
          <li key={g.id}>
            <a href={`/grades/${g.id}`}>{g.name}</a>
          </li>
        ))}
      </ul>

      <div className="p-6">
        <TabbedMenu tabs={tabs} />
      </div>
    </div>
  );
}
