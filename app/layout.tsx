import '../styles/globals.scss';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SubjectTabsWrapper } from "@/components/layout/SubjectTabsWrapper";

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_BRAND_NAME}`,
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
        <SubjectTabsWrapper />
        <main className="pt-4 px-3 md:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
