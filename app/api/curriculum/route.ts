import { prisma } from "@/lib/prisma";
import { GradeType, SubjectType } from "@/types/GradeWithDetails";
import { NextResponse } from "next/server";


// -----------------------------
// API Route
// -----------------------------
export async function GET() {
  try {
    const grades = await prisma.grade.findMany({
      orderBy: { id: "asc" },
      include: {
        skills: {
          include: {
            category: {
              include: {
                subject: true,
              },
            },
          },
        },
      },
    });

    const formatted: GradeType[] = grades.map((grade) => {
      const subjectMap: Record<number, SubjectType> = {};

      for (const skill of grade.skills) {
        const subject = skill.category.subject;
        const category = skill.category;

        // Initialize subject
        if (!subjectMap[subject.id]) {
          subjectMap[subject.id] = {
            id: subject.id,
            name: subject.name,
            categories: [],
          };
        }

        // Find or create category inside subject
        let categoryEntry = subjectMap[subject.id].categories.find(
          (c) => c.id === category.id
        );

        if (!categoryEntry) {
          categoryEntry = {
            id: category.id,
            name: category.name,
            skills: [],
          };
          subjectMap[subject.id].categories.push(categoryEntry);
        }

        // Add skill
        categoryEntry.skills.push({
          id: skill.id,
          name: skill.name,
          description: skill.description,
        });
      }

      return {
        id: grade.id,
        name: grade.name,
        subjects: Object.values(subjectMap),
      };
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch curriculum" },
      { status: 500 }
    );
  }
}
