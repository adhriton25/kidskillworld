import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) return <div>Not logged in</div>;

  const isSubscribed = (session.user as any).isSubscribed;

  if (!isSubscribed) {
    return (
      <div>
        <h1>Subscription required</h1>
        <form action="/api/stripe/checkout" method="POST">
          <button type="submit">Subscribe Monthly</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to your learning dashboard</h1>
      <a href="/grades">Browse Grades</a>
    </div>
  );
}
