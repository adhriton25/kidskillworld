import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SubjectTabsWrapper } from "@/components/layout/SubjectTabsWrapper";

export const metadata = {
  title: "ABC Learning",
  description: "Kid-friendly learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />

        {/* Client component handles pathname logic */}
        <SubjectTabsWrapper />

        <main className="pt-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
