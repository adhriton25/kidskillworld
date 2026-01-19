import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { SubjectTabs } from "@/components/layout/SubjectTabs";

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
        <div className="max-w-7xl mx-auto mt-3 px-4">
          <SubjectTabs />
        </div>
        <main className="pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
