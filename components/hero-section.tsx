"use client"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop className="w-full h-full object-cover" poster="/motorcycle-parts.jpg">
          <source src="https://res.cloudinary.com/adarsh-ka-cloudinary/video/upload/v1767534501/12999024_1920_1080_120fps_k5x917.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 carbon-texture opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">प्रीमियम इंजीनियरिंग</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          हर पार्ट में परफॉर्मेंस
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto text-balance">
          माँ कालिका - प्रीमियम मोटरसाइकिल स्पेयर पार्ट्स के लिए आपका विश्वस्त स्रोत। गुणवत्ता, विश्वसनीयता और परफॉर्मेंस।
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="/products"
            className="glass-effect px-8 py-3 font-semibold text-primary hover:bg-primary/20 transition-all duration-300 flex items-center gap-2 group"
          >
            कैटलॉग देखें
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
          >
            हमसे संपर्क करें
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/5">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">10K+</div>
            <p className="text-sm text-foreground/50 mt-1">खुश ग्राहक</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">50K+</div>
            <p className="text-sm text-foreground/50 mt-1">स्टॉक में पार्ट्स</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">20+</div>
            <p className="text-sm text-foreground/50 mt-1">वर्षों का अनुभव</p>
          </div>
        </div>
      </div>
    </section>
  )
}
