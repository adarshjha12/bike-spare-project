"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/40 to-background border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">हमसे संपर्क करें</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            कोई सवाल है? हम आपकी मदद के लिए यहाँ हैं। कभी भी हमसे संपर्क करें।
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-white/10 rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">फोन</h3>
              <p className="text-foreground/60">+917739794177</p>
              <p className="text-foreground/60">सोमवार से शुक्रवार, 9 AM - 6 PM</p>
            </div>

            <div className="bg-card border border-white/10 rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">ईमेल</h3>
              <p className="text-foreground/60">info@maakalika.com</p>
              <p className="text-foreground/60">support@maakalika.com</p>
            </div>

            <div className="bg-card border border-white/10 rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">पता</h3>
              <p className="text-foreground/60">माँ कालिका स्पेयर पार्ट्स</p> 
              <p className="text-foreground/60">रांटी चौक, मधुबनी, 847211  ( बिहार ) </p>
              <p className="text-foreground/60">भारत</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-white/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-8">हमें एक संदेश भेजें</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary">
                  धन्यवाद! आपका संदेश सफलतापूर्वक भेजा गया है। हम जल्द ही आपसे संपर्क करेंगे।
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">नाम</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="आपका नाम"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">ईमेल</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">फोन</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="+91-XXXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">विषय</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      placeholder="हम आपकी कैसे मदद कर सकते हैं?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">संदेश</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                    placeholder="अपनी पूछताछ के बारे में अधिक बताएं..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
                >
                  संदेश भेजें
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
