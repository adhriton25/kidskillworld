import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { Resend } from "resend";
import { ResetPasswordEmail } from "@/components/emailsTemplate/ResetPassword";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  
  // Security Tip: We still generate the token flow to prevent timing attacks
  if (!user) {
    return NextResponse.json({ success: true }); 
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 15); // 15 min 

  await prisma.passwordResetToken.create({
    data: {
      token,
      userId: user.id,
      expires,
    },
  });

  // SEND THE EMAIL
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Replace with your verified domain
      to: [email],
      subject: "Reset your password",
      react: ResetPasswordEmail({ token }),
    });
  } catch (error) {
    console.error("Email failed to send", error);
    // We still return success:true so attackers don't know if the email exists
  }

  return NextResponse.json({ success: true });
}
