import '../styles/globals.scss';
import { Footer } from "@/components/layout/Footer";
import { SubjectTabsWrapper } from "@/components/layout/SubjectTabsWrapper";
import HeaderWrapper from '@/components/layout/HeaderWrapper';

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
        <HeaderWrapper />
        <SubjectTabsWrapper />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
