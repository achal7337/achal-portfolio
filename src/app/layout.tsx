import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Achal Gandhi · Strategic Projects Lead, Scale AI";
const description =
  "Achal Gandhi is Strategic Projects Lead, Coding at Scale AI and the cofounder of AD Tech AI, building autonomous AI employees. Six years shipping LLM evaluation, RLHF, and coding agent systems in production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://achalgandhi.com"),
  title,
  description,
  keywords: [
    "Achal Gandhi",
    "AD Tech AI",
    "AI employees",
    "GenAI",
    "Scale AI",
    "RLHF",
    "LLM evaluation",
    "Cofounder",
    "AI startup",
  ],
  authors: [{ name: "Achal Gandhi" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_CA",
    siteName: "Achal Gandhi",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
