"use client"

import { useState } from "react"
import { Star, Eye } from "lucide-react"
import Footer from "@/components/footer"

const allProducts = [
  {
    id: 1,
    name: "उच्च-प्रदर्शन पिस्टन किट",
    category: "इंजन पार्ट्स",
    specs: ["फोर्जड एल्युमिनियम", "कम फ्रिक्शन", "OEM गुणवत्ता"],
    rating: 4.9,
    reviews: 128,
    image: "/motorcycle-piston-kit.jpg",
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
    specs: ["एडजस्टेबल डैम्पिंग", "गैस प्रेशराइज्ड", "दीर्घस्थायी"],
    rating: 4.9,
    reviews: 156,
    image: "/motorcycle-suspension-shock.jpg",
  },
  {
    id: 4,
    name: "संपूर्ण गैस्केट सेट",
    category: "इंजन पार्ट्स",
    specs: ["प्रीमियम सामग्री", "परफेक्ट फिट", "हीट प्रतिरोधी"],
    rating: 4.7,
    reviews: 67,
    image: "/motorcycle-gasket-set.jpg",
  },
  {
    id: 5,
    name: "रोटर और कैलिपर असेंबली",
    category: "ब्रेक सिस्टम",
    specs: ["250mm रोटर", "स्टेनलेस स्टील", "स्मूथ ब्रेकिंग"],
    rating: 4.8,
    reviews: 82,
    image: "/motorcycle-brake-rotor.jpg",
  },
  {
    id: 6,
    name: "क्रोम स्पोक व्हील सेट",
    category: "बॉडी पार्ट्स",
    specs: ["17-इंच रिम्स", "क्रोम प्लेटेड", "हल्का वजन"],
    rating: 4.9,
    reviews: 143,
    image: "/motorcycle-wheels.jpg",
  },
]

export default function ProductsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/40 to-background border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">सभी उत्पाद</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            प्रीमियम मोटरसाइकिल स्पेयर पार्ट्स के हमारे पूर्ण कैटलॉग को एक्सप्लोर करें
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover-lift"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-80 bg-gradient-to-br from-primary/10 to-background overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                  <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">तकनीकी विनिर्देश</span>
                  </div>

                  {hoveredId === product.id && (
                    <button className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="glass-effect px-6 py-3 flex items-center gap-2 font-semibold text-primary hover:bg-primary/20 transition-colors">
                        <Eye size={20} />
                        क्विक व्यू
                      </div>
                    </button>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3">{product.name}</h3>

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

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-foreground/20"
                          }
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
        </div>
      </section>

      <Footer />
    </main>
  )
}
