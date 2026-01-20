import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      isSubscribed: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    isSubscribed: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    email: string;
    isSubscribed: boolean;
  }
}
