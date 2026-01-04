"use client"

import { PenLine as Engine, Wind, Disc3, Wrench } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "इंजन पार्ट्स",
    description: "पिस्टन, रिंग्स, गैस्केट और इंजन के आंतरिक घटक",
    icon: Engine,
    color: "from-primary/20 to-transparent",
    items: "45 उत्पाद",
  },
  {
    title: "ब्रेक सिस्टम",
    description: "ब्रेक पैड, रोटर्स और हाइड्रोलिक घटक",
    icon: Disc3,
    color: "from-primary/20 to-transparent",
    items: "38 उत्पाद",
  },
  {
    title: "सस्पेंशन",
    description: "शॉक्स, स्प्रिंग्स और सस्पेंशन लिंकेज",
    icon: Wind,
    color: "from-primary/20 to-transparent",
    items: "32 उत्पाद",
  },
  {
    title: "बॉडी पार्ट्स",
    description: "फेयरिंग्स, पैनल और बॉडी घटक",
    icon: Wrench,
    color: "from-primary/20 to-transparent",
    items: "56 उत्पाद",
  },
]

export default function CategoriesGrid() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">उत्पाद श्रेणियाँ</h2>
          <p className="text-foreground/60 text-lg">सभी प्रमुख ब्रांड के लिए प्रीमियम मोटरसाइकिल घटक</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href="/categories"
                className="group relative bg-gradient-to-br from-card to-background border border-white/10 rounded-xl p-6 hover-lift cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 carbon-texture opacity-20" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-semibold">{category.items}</span>
                    <div className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary text-xs">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
