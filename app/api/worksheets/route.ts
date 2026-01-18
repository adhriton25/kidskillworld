import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const worksheets = await prisma.worksheet.findMany({
    include: {
      grade: true,
      subject: true,
      worksheetSkills: {
        include: { skill: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(worksheets);
}

export async function POST(req: Request) {
  const body = await req.json();

  const {
    title,
    description,
    pdfUrl,
    gradeId,
    subjectId,
    skillIds, // number[]
  } = body;

  if (!title || !pdfUrl || !gradeId || !subjectId) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const worksheet = await prisma.worksheet.create({
    data: {
      title,
      description,
      pdfUrl,
      gradeId,
      subjectId,
      worksheetSkills: {
        create: (skillIds || []).map((skillId: number) => ({
          skillId,
        })),
      },
    },
    include: {
      grade: true,
      subject: true,
      worksheetSkills: { include: { skill: true } },
    },
  });

  return NextResponse.json(worksheet, { status: 201 });
}
