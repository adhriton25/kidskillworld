import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export async function POST(req: Request) {
  const { email } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ success: true }); // don't reveal existence
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 15); // 15 min

  await prisma.PasswordResetToken.create({
    data: {
      token,
      userId: user.id,
      expires,
    },
  });

  // TODO: send email
  console.log(`Reset link: https://yourapp.com/reset-password?token=${token}`);

  return NextResponse.json({ success: true });
}
