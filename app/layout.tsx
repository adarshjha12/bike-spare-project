import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "माँ कालिका स्पेयर पार्ट्स - प्रीमियम मोटरसाइकिल घटक",
  description:
    "प्रीमियम गुणवत्ता वाले मोटरसाइकिल स्पेयर पार्ट्स और घटक। इंजन पार्ट्स, ब्रेक सिस्टम, सस्पेंशन और सभी मोटरसाइकिल ब्रांड के लिए अन्य।",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
