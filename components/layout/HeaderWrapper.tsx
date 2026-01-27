// HeaderWrapper.tsx (Server Component)
import { getServerSession } from "next-auth";
import { Header } from "./Header";

export default async function HeaderWrapper() {
  const session = await getServerSession();
  return <Header session={session} />;
}
