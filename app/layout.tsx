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
        <link rel="icon" href="/images/sparta-portrait.png" type="image/x-icon" />

        <meta name="description"
          content="Portfolio of Yassine Ait Sidi Brahim - Software Developer, Web Developer, and Technical Writer." />
        <meta name="description"
          content="Explore the portfolio of Yassine Ait Sidi Brahim, a Full Stack Software Developer specializing in React, Node.js, and Laravel. Discover innovative projects and technical writings." />
        <meta name="keywords"
          content="Yassine Ait Sidi Brahim, Software Developer, Full Stack Developer, React, Node.js, Laravel, Portfolio, Technical Writer" />
        <meta name="author" content="Yassine Ait Sidi Brahim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Yassine Ait Sidi Brahim – Full Stack Software Developer" />
        <meta property="og:description"
          content="Explore the portfolio of Yassine Ait Sidi Brahim, showcasing expertise in React, Node.js, and Laravel development." />
        <meta property="og:image" content="https://www.yassine-aitsidibrahim.space/images/sparta-portrait.png" />
        <meta property="og:url" content="https://www.yassine-aitsidibrahim.space/" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="6f366c81e54e9d72" />

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
