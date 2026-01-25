"use client";

import { Button } from "@/components/Base/Button";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setSent(true);
  }

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
              placeholder="Enter your email"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>
      )}
    </div>
  );
}
