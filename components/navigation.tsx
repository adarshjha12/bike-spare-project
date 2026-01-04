"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "होम" },
    { href: "/categories", label: "श्रेणियाँ" },
    { href: "/products", label: "उत्पाद" },
    { href: "/about", label: "हमारे बारे में" },
    { href: "/contact", label: "संपर्क" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <Link href="/" className="text-2xl font-bold neon-orange-glow">
          MAA KALIKA
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <Link href="/" className="text-xl font-bold neon-orange-glow">
          MAA KALIKA
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-card rounded-lg transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          {/* Slide-out Panel */}
          <div className="absolute top-0 left-0 h-full w-64 bg-card border-r border-border shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="pt-20 px-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
