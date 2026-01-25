"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params.get("token");
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, password }),
    });

    setDone(true);
    setTimeout(() => router.push("/login"), 1500);
  }

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded-xl shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>

      {done ? (
        <p className="text-green-600 text-center">Password updated</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-green-600 text-white p-3 rounded-lg">
            Update Password
          </button>
        </form>
      )}
    </div>
  );
}
