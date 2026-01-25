import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const grades = await prisma.grade.findMany({
      include: {
        skills: {
          include: {
            subject: true,
            category: true,
            _count: {
              select: { topics: true },
            },
          },
        },
      },
      orderBy: { id: "asc" },
    });

    return NextResponse.json(grades);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch grades" }, { status: 500 });
  }
}