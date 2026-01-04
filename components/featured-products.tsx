"use client"

import { useState } from "react"
import { Star, Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "उच्च-प्रदर्शन पिस्टन किट",
    category: "इंजन पार्ट्स",
    specs: ["फोर्जड एल्युमिनियम", "कम फ्रिक्शन", "OEM गुणवत्ता"],
    rating: 4.9,
    reviews: 128,
    image: "/motorcycle-piston.jpg",
  },
  {
    id: 2,
    name: "सिरेमिक ब्रेक पैड्स सेट",
    category: "ब्रेक सिस्टम",
    specs: ["कम डस्ट", "साइलेंट ऑपरेशन", "लंबे समय तक टिकाऊ"],
    rating: 4.8,
    reviews: 94,
    image: "/motorcycle-brake-pads.jpg",
  },
  {
    id: 3,
    name: "हेवी-ड्यूटी सस्पेंशन शॉक",
    category: "सस्पेंशन",
    specs: ["एडजस्टेबल डैम्पिंग", "गैस प्रेशराइज्ड", "टिकाऊ"],
    rating: 4.9,
    reviews: 156,
    image: "/motorcycle-suspension.jpg",
  },
]

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">फीचर्ड उत्पाद</h2>
          <p className="text-foreground/60 text-lg">हमारे व्यापक कैटलॉग से लोकप्रिय आइटम</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover-lift"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 bg-gradient-to-br from-primary/10 to-background overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Tech Specs Badge */}
                <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Tech Specs</span>
                </div>

                {/* Quick View Button */}
                {hoveredId === product.id && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="glass-effect px-6 py-3 flex items-center gap-2 font-semibold text-primary hover:bg-primary/20 transition-colors">
                      <Eye size={20} />
                      Quick View
                    </div>
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold mt-2 mb-3">{product.name}</h3>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-foreground/20"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold rounded-lg transition-all inline-block"
          >
            सभी उत्पाद देखें
          </a>
        </div>
      </div>
    </section>
  )
}
