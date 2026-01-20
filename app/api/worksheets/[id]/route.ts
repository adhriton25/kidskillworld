import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const numId = Number(id);
  const worksheet = await prisma.worksheet.findUnique({
    where: { id: numId },
    include: {
      grade: true,
      subject: true,
      worksheetSkills: { include: { skill: true } },
    },
  });

  if (!worksheet) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(worksheet);
}

export async function PUT(req: Request, { params }: Params) {
  const { id } = await params;
  const numId = Number(id);
  const body = await req.json();
  const { title, description, pdfUrl, gradeId, subjectId, skillIds } = body;

  const worksheet = await prisma.worksheet.update({
    where: { id: numId },
    data: {
      title,
      description,
      pdfUrl,
      gradeId,
      subjectId,
      worksheetSkills: {
        deleteMany: {}, // remove existing
        create: (skillIds || []).map((skillId: number) => ({ skillId })),
      },
    },
    include: {
      grade: true,
      subject: true,
      worksheetSkills: { include: { skill: true } },
    },
  });

  return NextResponse.json(worksheet);
}

export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const numId = Number(id);

  await prisma.worksheetSkill.deleteMany({ where: { worksheetId: numId } });
  await prisma.worksheet.delete({ where: { id: numId } });

  return NextResponse.json({ success: true });
}
