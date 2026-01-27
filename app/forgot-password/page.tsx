"use client";

import { Button } from "@/components/base/button";
import Input from "@/components/base/Input";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ResetEmailSchema } from "@/lib/schema";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  async function onSubmit(data: any) {
    await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email: data.email }),
    });
    setSent(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ResetEmailSchema),
  });

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded-xl shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
      <p className="text-slate-500 mb-10">
        No worries! Just enter your email address below and hit Send Reset Link.
        We'll send you a secure link to get back into your account.
      </p>

      {sent ? (
        <p className="text-green-600 text-center">
          If this email exists, a reset link has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            type="email"
            label="Email Address"
            {...register("email")}
            leftIcon={<Mail />}
            placeholder="Enter your email"
            error={errors.email && errors.email.message}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            mode={isSubmitting ? "loading" : "button"}
          >
            Send Reset Link
          </Button>
        </form>
      )}
    </div>
  );
}
