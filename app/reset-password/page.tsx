"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, CheckCircle2, Loader2, Mail } from "lucide-react";
import { ResetPasswordSchema } from "@/lib/schema";
import { Button } from "@/components/base/button";
import Input from "@/components/base/Input";

// 1. Move the logic into a separate internal component
function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [showPass, setShowPass] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = async (data: any) => {
    if (!token) return;
    setStatus("loading");

    const res = await fetch("/api/auth/reset-confirm", {
      method: "POST",
      body: JSON.stringify({ token, password: data.password }),
    });

    if (res.ok) setStatus("success");
    else setStatus("error");
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-green-600 w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Password Updated!
        </h1>
        <p className="text-slate-500 mb-8">
          You can now log in with your new password.
        </p>
        <Button onClick={() => router.push("/login")} className="w-full">
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <div className="bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Lock className="text-indigo-600 w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Set New Password</h1>
        <p className="text-slate-500 text-sm mt-2">
          Almost there! Choose a secure password.
        </p>
      </div>

      {!token ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm text-center">
          Invalid or missing token. Please check your email link.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* ... existing form fields (password, confirmPassword) ... */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              New Password
            </label>
            <Input
              type={showPass ? "text" : "password"}
              {...register("password")}
              placeholder="••••••••"
              leftIcon={<Lock />}
              rightIcon={
                <Button
                  type="button"
                  isLinkButton
                  onClick={() => setShowPass(!showPass)}
                  rightIcon={showPass ? <EyeOff /> : <Eye />}
                />
              }
              error={errors.password && (errors.password.message as string)}
            />
          </div>
          <div>
            <Input
              label="Confirm Password"
              type="password"
              leftIcon={<Lock />}
              {...register("confirmPassword")}
              placeholder="••••••••"
              error={
                errors.confirmPassword
                  ? errors.confirmPassword.message
                  : undefined
              }
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full"
            mode={status === "loading" ? "loading" : "button"}
          >
            Update Password
          </Button>
        </form>
      )}
    </>
  );
}

// 2. The Main Page component that wraps everything in Suspense
export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="animate-spin text-indigo-600 mb-4" />
              <p className="text-slate-500">Loading your request...</p>
            </div>
          }
        >
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
