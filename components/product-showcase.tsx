"use client"

import { useState } from "react"
import { Star, Eye } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Carbon Pro Drivetrain",
    category: "Drivetrain",
    price: "$299.99",
    specs: ["11-speed", "Titanium Coated", "Ultra-Light"],
    rating: 4.9,
    reviews: 128,
    image: "/carbon-pro-drivetrain.jpg",
  },
  {
    id: 2,
    name: "Hydraulic Disc Brakes",
    category: "Braking Systems",
    price: "$189.99",
    specs: ["275mm Rotor", "Modulating Power", "All-Weather"],
    rating: 4.8,
    reviews: 94,
    image: "/hydraulic-disc-brakes.jpg",
  },
  {
    id: 3,
    name: "Elite Suspension Fork",
    category: "Suspension",
    price: "$449.99",
    specs: ["100mm Travel", "Air Spring", "Adjustable Damping"],
    rating: 4.9,
    reviews: 156,
    image: "/elite-suspension-fork.jpg",
  },
  {
    id: 4,
    name: "Carbon Fiber Handlebar",
    category: "Components",
    price: "$129.99",
    specs: ["31.8mm Clamp", "720mm Width", "180g Weight"],
    rating: 4.7,
    reviews: 67,
    image: "/carbon-fiber-handlebar.jpg",
  },
  {
    id: 5,
    name: "Performance Seat Post",
    category: "Components",
    price: "$159.99",
    specs: ["Micro-Adjust", "Light Carbon", "Forged Clamp"],
    rating: 4.8,
    reviews: 82,
    image: "/performance-seat-post.jpg",
  },
  {
    id: 6,
    name: "Pro Cassette Set",
    category: "Drivetrain",
    price: "$249.99",
    specs: ["12-speed", "CNC Cut Teeth", "Lightweight Alloy"],
    rating: 4.9,
    reviews: 143,
    image: "/pro-cassette-set.jpg",
  },
]

export default function ProductShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Products</h2>
          <p className="text-foreground/60 text-lg">Hand-selected components engineered for excellence</p>
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

                {/* Technical Specs Badge */}
                <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Tech Specs</span>
                </div>

                {/* Quick View Button */}
                {hoveredId === product.id && (
                  <button className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover/button:bg-black/60 transition-all duration-300">
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
                <div className="flex items-center gap-2 mb-4">
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

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                  <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
