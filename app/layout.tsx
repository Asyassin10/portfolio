import "./globals.css"
import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <title>Yassine Ait Sidi Brahim | Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Yassine Ait Sidi Brahim - Software Developer, Web Developer, and Technical Writer."
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-slate-950 text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
