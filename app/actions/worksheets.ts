"use server";

import { prisma } from "@/lib/prisma";

export async function getWorksheetsAction(filters: {
  subjectName?: string | null;
  gradeName?: string | null;
  skillName?: string | null;
}) {
  try {
    const worksheets = await prisma.worksheet.findMany({
      where: {
        // Filter by Subject Name
        subject: filters.subjectName ? { name: filters.subjectName } : undefined,
        // Filter by Grade Name
        grade: filters.gradeName ? { name: filters.gradeName } : undefined,
        // Filter by Skill Name (inside the join table)
        worksheetSkills: filters.skillName 
          ? { some: { skill: { name: filters.skillName } } } 
          : undefined,
      },
      include: {
        subject: true,
        grade: true,
        worksheetSkills: {
          include: {
            skill: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Transform Prisma data to match your PdfCard props
    return worksheets.map((ws) => ({
      id: ws.id,
      title: ws.title,
      description: ws.description,
      pdfUrl: ws.pdfUrl,
      grade: ws.grade.name,
      subject: ws.subject.name,
      worksheetSkills: ws.worksheetSkills.map((wsSkill) => ({
        name: wsSkill.skill.name,
      })),
    }));
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

// Action to fetch dynamic skills for the sidebar
export async function getAvailableSkillsAction(subject: string, grade: string) {
  const skills = await prisma.skill.findMany({
    where: {
      subject: { name: subject },
      grade: { name: grade },
    },
    select: { name: true },
  });
  return skills.map(s => s.name);
}