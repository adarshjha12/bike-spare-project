"use client"

import HeroSection from "@/components/hero-section"
import CategoriesGrid from "@/components/categories-grid"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection />
      <div className="pt-20">
        <CategoriesGrid />
        <FeaturedProducts />
      </div>
      <Footer />
    </main>
  )
}
