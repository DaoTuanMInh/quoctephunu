import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
});

const dancingScript = Dancing_Script({
  variable: "--font-handwriting",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "700"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thiệp Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 | Romantic Pink Garden",
  description:
    "Trải nghiệm mở thiệp 3D lãng mạn, tinh tế với khu vườn hoa nở rộ và những lời chúc yêu thương nhất dành tặng người phụ nữ tuyệt vời.",
  keywords: [
    "20/10",
    "Ngày Phụ nữ Việt Nam",
    "Thiệp 20/10",
    "Chúc mừng 20/10",
    "Romantic Pink Garden",
    "Thiệp tương tác 3D",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${dancingScript.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}

