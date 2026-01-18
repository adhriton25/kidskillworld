import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Optional: add custom logic here
});

export const config = {
  matcher: ["/dashboard/:path*", "/grades/:path*"],
};
