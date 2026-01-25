"use client";

import { Button } from "@/components/Base/Button";
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

      {sent ? (
        <p className="text-green-600 text-center">
          If this email exists, a reset link has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>
      )}
    </div>
  );
}
