"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card/60 border-t border-white/5 carbon-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg  flex items-center font-bold"><img className="w-8 h-8 mx-2 rounded-sm" src="https://m.media-amazon.com/images/I/71ndDeYu1sL._AC_UF894,1000_QL80_.jpg" alt="" /> Maa Kalika Auto Spares</span>
            </div>
            <p className="text-sm text-foreground/50">प्रदर्शन के लिए इंजीनियर प्रीमियम मोटरसाइकिल स्पेयर पार्ट्स।</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">श्रेणियाँ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  इंजन पार्ट्स
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  ब्रेक सिस्टम
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  सस्पेंशन
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  बॉडी पार्ट्स
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">कंपनी</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  हमारे बारे में
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  संपर्क
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  होम
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">सहायता</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-foreground/60">ईमेल: info@maakalika.com</span>
              </li>
              <li>
                <span className="text-sm text-foreground/60">फोन: +91-XXXX-XXXX</span>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  हमसे संपर्क करें
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-foreground/50 flex items-center gap-1">
              द्वारा बनाया गया <Heart size={14} className="fill-primary text-primary" /> माँ कालिका
            </p>
            <p className="text-sm text-foreground/50">© 2026 माँ कालिका स्पेयर पार्ट्स। सर्वाधिकार सुरक्षित।</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
