"use client"

import { CheckCircle, Award, Users, Zap } from "lucide-react"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "गुणवत्ता आश्वासन",
      description: "प्रीमियम गुणवत्ता सुनिश्चित करने के लिए प्रत्येक उत्पाद कठोर परीक्षण से गुजरता है",
    },
    {
      icon: Users,
      title: "ग्राहक केंद्रित",
      description: "आपकी संतुष्टि हमारी प्राथमिकता है। 24/7 समर्पित सहायता टीम उपलब्ध है",
    },
    {
      icon: Zap,
      title: "तेजी से डिलीवरी",
      description: "तेजी से प्रसंस्करण और पूरे देश में विश्वसनीय शिपिंग",
    },
    {
      icon: CheckCircle,
      title: "प्रामाणिक पार्ट्स",
      description: "100% जेनुइन पार्ट्स सीधे निर्माताओं से प्राप्त",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/40 to-background border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">माँ कालिका के बारे में</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            2006 से प्रीमियम मोटरसाइकिल स्पेयर पार्ट्स के लिए आपका विश्वस्त साथी
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-white/10 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">हमारी कहानी</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              माँ कालिका की स्थापना एक सरल मिशन के साथ की गई थी: उचित कीमतों पर उच्च गुणवत्ता वाली मोटरसाइकिल स्पेयर पार्ट्स प्रदान
              करना। पिछले 20 वर्षों में, हमने उद्योग में सबसे विश्वस्त आपूर्तिकर्ताओं में से एक के रूप में एक प्रतिष्ठा बनाई है।
            </p>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              हम प्रामाणिकता और गुणवत्ता सुनिश्चित करने के लिए सीधे निर्माताओं से अपने उत्पाद प्राप्त करते हैं। हमारी विशेषज्ञ टीम हमेशा आपको
              सही पार्ट खोजने में मदद करने के लिए तैयार है, चाहे वह एक सामान्य स्पेयर हो या एक कठिन-से-खोजने वाला घटक।
            </p>
            <p className="text-foreground/70 leading-relaxed">
              50,000 से अधिक पार्ट्स स्टॉक में और 10,000 से अधिक खुश ग्राहकों की सेवा करने के साथ, हम हर दिन बढ़ते और सुधार करते रहते हैं।
              उत्कृष्टता के प्रति हमारी प्रतिबद्धता ने माँ कालिका को मोटरसाइकिल उत्साही और मैकेनिक के लिए जाने वाले स्रोत बना दिया है।
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">हमें क्यों चुनें</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-card border border-white/10 rounded-xl p-6 hover-lift">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-foreground/60">{value.description}</p>
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
