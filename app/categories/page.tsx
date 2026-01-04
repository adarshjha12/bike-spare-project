"use client"

import { PenLine as Engine, Wind, Disc3, Wrench, Fuel, Battery, Lightbulb, Gauge } from "lucide-react"
import Footer from "@/components/footer"

const allCategories = [
  {
    title: "इंजन पार्ट्स",
    description: "पिस्टन, रिंग्स, गैस्केट, बियरिंग और सभी आंतरिक इंजन घटक",
    icon: Engine,
    products: 45,
  },
  {
    title: "ब्रेक सिस्टम",
    description: "ब्रेक पैड, रोटर्स, कैलिपर और हाइड्रोलिक घटक",
    icon: Disc3,
    products: 38,
  },
  {
    title: "सस्पेंशन",
    description: "शॉक्स, स्प्रिंग्स, सस्पेंशन लिंक्स और फोर्क घटक",
    icon: Wind,
    products: 32,
  },
  {
    title: "बॉडी पार्ट्स",
    description: "फेयरिंग्स, पैनल, मडगार्ड और बॉडी एक्सेसरीज",
    icon: Wrench,
    products: 56,
  },
  {
    title: "ईंधन सिस्टम",
    description: "ईंधन पंप, इंजेक्टर, कार्बोरेटर और फिल्टर",
    icon: Fuel,
    products: 28,
  },
  {
    title: "विद्युत",
    description: "बैटरी, आल्टरनेटर, स्टार्टर और वायरिंग हार्नेस",
    icon: Battery,
    products: 35,
  },
  {
    title: "लाइटिंग",
    description: "हेडलाइट्स, टेललाइट्स, इंडिकेटर्स और लाइट असेंबलीज",
    icon: Lightbulb,
    products: 22,
  },
  {
    title: "एक्सेसरीज",
    description: "मिरर्स, ग्रिप्स, लीवर्स, चेन्स और विविध पार्ट्स",
    icon: Gauge,
    products: 89,
  },
]

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/40 to-background border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">उत्पाद श्रेणियाँ</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            सभी श्रेणियों में प्रीमियम मोटरसाइकिल स्पेयर पार्ट्स का हमारा पूर्ण चयन ब्राउज़ करें
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-white/10 rounded-xl p-8 hover-lift cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 carbon-texture opacity-20" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                    <p className="text-foreground/60 mb-6">{category.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm text-primary font-semibold">{category.products} उत्पाद</span>
                      <button className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-semibold transition-colors text-sm">
                        एक्सप्लोर करें
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
