"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { SignUpInput, SignUpSchema } from "@/lib/schema";
import { Button } from "@/components/base/button";
import Input from "@/components/base/Input";

export default function SignUpForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: SignUpInput) => {
    setServerMsg("");
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        setServerMsg(result.error || "Signup failed.");
        return;
      }
      router.push("/");
    } catch (error) {
      setServerMsg("Something went wrong on the server.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-xl p-8 md:p-12 text-center border border-slate-100">
        {/* Header Icon */}
        <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="text-indigo-600 w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Join the Fun!
        </h1>
        <p className="text-slate-500 mb-8">
          Create your account to start your learning journey.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
          {/* Name Field */}
          <Input
            label="Your Name"
            leftIcon={<User />}
            {...register("name")}
            placeholder="What should we call you?"
            error={errors.name && errors.name.message}
          />
          {/* Email Field */}
          <Input
            label="Email Address"
            {...register("email")}
            leftIcon={<Mail />}
            placeholder="Enter your email"
            error={errors.email && errors.email.message}
          />
          {/* Grade Dropdown (New Mandatory Field) */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Grade
            </label>
            <div className="relative">
              <select
                {...register("grade")}
                className="w-full px-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-700 appearance-none"
              >
                <option value="">Select your grade</option>
                {[1, 2, 3, 4, 5, 6].map((g) => (
                  <option key={g} value={g}>
                    Grade {g}
                  </option>
                ))}
              </select>
            </div>
            {errors.grade && (
              <p className="text-red-500 text-xs mt-1 ml-2">
                {errors.grade.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <Input
            label=" Create Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            leftIcon={<Lock />}
            placeholder="Make it strong!"
            rightIcon={
              <Button
                type="button"
                isLinkButton
                leftIcon={showPassword ? <EyeOff /> : <Eye />}
                onClick={() => setShowPassword(!showPassword)}
              />
            }
            error={errors.password && errors.password.message}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            rightIcon={<ArrowRight />}
            mode={isSubmitting ? "loading" : "button"}
            className="w-full"
          >
            Start Learning
          </Button>
        </form>
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-slate-500 font-medium">
            Already have an account?{" "}
            <Button isLinkButton href="/login">
              Log In
            </Button>
          </p>
          {/* <div className="mt-4 inline-flex items-center gap-1 bg-slate-50 px-4 py-2 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            ✨ 100% Free & Safe for Kids
          </div> */}
          {serverMsg && (
            <p className="mt-4 text-sm font-medium text-indigo-600">
              {serverMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
