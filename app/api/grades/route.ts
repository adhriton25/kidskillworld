import { prisma } from "@/lib/prisma";
import { GradeWithDetails } from "@/types/GradeWithDetails";
import { NextResponse } from "next/server";
 

export async function GET() {
  try {
    const grades: GradeWithDetails[] = await prisma.grade.findMany({
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
      orderBy: { id: "asc" },
    });

    return NextResponse.json(grades);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch grades" },
      { status: 500 },
    );
  }
}
