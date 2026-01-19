import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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