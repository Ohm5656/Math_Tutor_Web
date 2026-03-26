import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Kanit, Prompt, Sarabun } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AppShellEnhancementsLoader } from "@/components/providers/app-shell-enhancements-loader";
import { academyName } from "@/data/site";

import "./globals.css";

const bodyFont = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

const bodyAltFont = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-alt",
  display: "swap"
});

const headingFont = Kanit({
  subsets: ["latin", "thai"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.primemathacademy.co.th"),
  title: {
    default: `${academyName} | สถาบันกวดวิชาคณิตศาสตร์ออนไลน์`,
    template: `%s | ${academyName}`
  },
  description:
    "สถาบันกวดวิชาคณิตศาสตร์ออนไลน์สำหรับนักเรียนไทย เน้นความเข้าใจเชิงลึก การเพิ่มคะแนน และการเตรียมสอบอย่างเป็นระบบ",
  keywords: [
    "กวดวิชาคณิตศาสตร์",
    "คอร์สออนไลน์คณิต",
    "ติวสอบเข้า",
    "คอร์สคณิตศาสตร์",
    "ติว PAT1",
    "ติว A-Level คณิต"
  ],
  openGraph: {
    title: `${academyName} | สถาบันกวดวิชาคณิตศาสตร์ออนไลน์`,
    description:
      "เรียนคณิตศาสตร์ออนไลน์อย่างเป็นระบบ เพิ่มความเข้าใจ สร้างความมั่นใจ และเตรียมสอบได้อย่างมืออาชีพ",
    siteName: academyName,
    locale: "th_TH",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="th" data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${bodyAltFont.variable} ${headingFont.variable}`}>
        <AppShellEnhancementsLoader />
        <Navbar />
        <main className="page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
