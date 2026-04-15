import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_BG = "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBiYXRocm9vbSUyMGludGVyaW9yJTIwd2hpdGV8ZW58MHx8fHwxNzc2MTc1OTMzfDA&ixlib=rb-4.1.0&q=85";

export const HeroSection = () => {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-zoom"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/75 to-[#0F172A]/40" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="reveal-left hero-instant">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse" />
              Moulins &bull; Vichy &bull; Allier (03)
            </div>

            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.05]">
              Votre Expert en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]">Plomberie</span>{" "}
              et Chauffage
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#CBD5E1] max-w-xl">
              ML Plomberie, votre artisan plombier de confiance dans l'Allier.
              Installation, réparation, dépannage et rénovation — nous intervenons
              rapidement pour tous vos besoins.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" data-testid="hero-cta-devis">
                <Button className="bg-[#005AE0] hover:bg-[#2563EB] text-white rounded-full px-8 h-12 text-base font-semibold btn-shine">
                  Demander un devis
                </Button>
              </a>
              <a href="#prestations" data-testid="hero-cta-prestations">
                <Button variant="outline" className="rounded-full px-8 h-12 text-base font-semibold border-white/25 text-white hover:bg-white/10 hover:border-white/40">
                  Nos Prestations
                  <ArrowDown className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/15">
              <div className="counter-animate">
                <div className="font-['Outfit'] text-2xl font-black text-white">7j/7</div>
                <div className="text-sm text-[#94A3B8]">Disponibilité</div>
              </div>
              <div className="counter-animate">
                <div className="font-['Outfit'] text-2xl font-black text-white">Devis</div>
                <div className="text-sm text-[#94A3B8]">Gratuit</div>
              </div>
              <div className="counter-animate">
                <div className="font-['Outfit'] text-2xl font-black text-white">03</div>
                <div className="text-sm text-[#94A3B8]">Allier</div>
              </div>
            </div>
          </div>

          {/* Floating phone badge */}
          <a
            href="tel:+33620515430"
            className="reveal-right hero-instant inline-flex mt-8 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 items-center gap-3 hover:bg-white/15 transition-all"
            data-testid="hero-phone-badge"
          >
            <div className="w-12 h-12 bg-[#005AE0] rounded-xl flex items-center justify-center pulse-ring">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-[#94A3B8]">Appelez-nous</div>
              <div className="font-['Outfit'] font-bold text-white">06 20 51 54 30</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
