import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function POST(req: Request) {
  const { token, password } = await req.json();

  // 1. Find the token in DB and check if expired
  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
    include: { user: true }
  });

  if (!resetToken || resetToken.expires < new Date()) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
  }

  // 2. Hash the new password
  const hashedPassword = await bcrypt.hash(password, 12);

  // 3. Update user and delete the token (Transaction)
  await prisma.$transaction([
    prisma.user.update({
      where: { id: resetToken.userId },
      data: { passwordHash: hashedPassword },
    }),
    prisma.passwordResetToken.delete({
      where: { token }
    })
  ]);

  return NextResponse.json({ success: true });
}