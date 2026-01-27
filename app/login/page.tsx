"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/base/Button";
import Input from "@/components/base/Input";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  }

  return (
    <div
      className="min-h-[calc(100vh-190px)] p-2 md:p-0 flex items-center 
      justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login-bg.png')" }}
    >
      <div className="w-full md:w-[26.5rem] bg-white/87 p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Log In</h1>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            leftIcon={<Mail />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            leftIcon={<Lock />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full ">
            Log In
          </Button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <Button isLinkButton href="/forgot-password">
            Forgot Password
          </Button>
          <Button isLinkButton href="/signup">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
