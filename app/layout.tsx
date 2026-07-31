import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://astra-dijital-studyo.moonplayman.chatgpt.site"),
  title: "ASTRA — Beyond Ordinary",
  description: "An independent digital studio creating impossible-to-forget experiences.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "ASTRA — Beyond Ordinary",
    description: "An independent digital studio creating impossible-to-forget experiences.",
    images: [{ url: "/og.png", width: 1792, height: 936, alt: "ASTRA — Beyond Ordinary" }],
  },
  twitter: { card: "summary_large_image", title: "ASTRA — Beyond Ordinary", description: "An independent digital studio creating impossible-to-forget experiences.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
