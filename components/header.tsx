"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 carbon-texture border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">⚡</span>
            </div>
            <span className="text-lg font-bold hidden sm:inline">Velocity</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#categories" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="#products" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
            >
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/5">
            <div className="flex flex-col gap-3 pt-4">
              <Link href="#categories" className="text-sm text-foreground/70 hover:text-primary transition-colors py-2">
                Categories
              </Link>
              <Link href="#products" className="text-sm text-foreground/70 hover:text-primary transition-colors py-2">
                Products
              </Link>
              <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors py-2">
                About
              </Link>
              <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors py-2">
                Contact
              </Link>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 border-primary/30 text-primary bg-transparent">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1 bg-primary text-primary-foreground">
                  Shop
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
