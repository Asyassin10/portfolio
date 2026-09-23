import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "Yassine Ait Sidi Brahim | Full Stack & GenAI Software Engineer",
  description:
    "Portfolio of Yassine Ait Sidi Brahim, a Full Stack and GenAI Software Engineer building AI, LLM and RAG products with AWS Bedrock, React and Laravel.",
  keywords: [
    "Yassine Ait Sidi Brahim",
    "Full Stack Software Engineer",
    "GenAI Engineer",
    "React",
    "Laravel",
    "LLM",
    "RAG",
    "AWS Bedrock",
  ],
  authors: [{ name: "Yassine Ait Sidi Brahim" }],
  icons: { icon: "/images/sparta-portrait.png" },
  openGraph: {
    title: "Yassine Ait Sidi Brahim | Full Stack & GenAI Software Engineer",
    description:
      "Full Stack and GenAI engineering portfolio featuring AI, LLM and RAG products built with AWS Bedrock, React and Laravel.",
    images: ["https://www.yassine-aitsidibrahim.com/images/sparta-portrait.png"],
    url: "https://www.yassine-aitsidibrahim.com/",
    type: "website",
  },
  verification: { google: "6f366c81e54e9d72" },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-slate-950 text-white`}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
