import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #005AE0 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="reveal visible">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#005AE0] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#005AE0] rounded-full" />
              Moulins &bull; Vichy &bull; Allier (03)
            </div>
            
            <h1 className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#0F172A] leading-[1.05]">
              Votre Expert en{" "}
              <span className="text-gradient">Plomberie</span>{" "}
              et Chauffage
            </h1>
            
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#475569] max-w-xl">
              ML Plomberie, votre artisan plombier de confiance dans l'Allier.
              Installation, reparation, depannage et renovation - nous intervenons
              rapidement pour tous vos besoins.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" data-testid="hero-cta-devis">
                <Button className="bg-[#005AE0] hover:bg-[#2563EB] text-white rounded-full px-8 h-12 text-base font-semibold btn-shine">
                  Demander un devis
                </Button>
              </a>
              <a href="#prestations" data-testid="hero-cta-prestations">
                <Button variant="outline" className="rounded-full px-8 h-12 text-base font-semibold border-[#E2E8F0] text-[#0F172A] hover:border-[#005AE0] hover:text-[#005AE0]">
                  Nos Prestations
                  <ArrowDown className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-[#E2E8F0]">
              <div>
                <div className="font-['Outfit'] text-2xl font-black text-[#0F172A]">7j/7</div>
                <div className="text-sm text-[#475569]">Disponibilite</div>
              </div>
              <div>
                <div className="font-['Outfit'] text-2xl font-black text-[#0F172A]">Devis</div>
                <div className="text-sm text-[#475569]">Gratuit</div>
              </div>
              <div>
                <div className="font-['Outfit'] text-2xl font-black text-[#0F172A]">03</div>
                <div className="text-sm text-[#475569]">Allier</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex justify-center">
            <div className="hero-float relative">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/6abe0164-00fa-45d7-85b8-7ee084899e3d/images/b9a79a05e9c4f420f943aaa20344d5b46a7adcfe340c9e99f4927d915f1ae196.png"
                alt="ML Plomberie - Expert plombier"
                className="w-full max-w-lg rounded-3xl"
                data-testid="hero-image"
              />
              {/* Floating phone badge */}
              <a
                href="tel:+33620515430"
                className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 hover:shadow-2xl transition-shadow"
                data-testid="hero-phone-badge"
              >
                <div className="w-12 h-12 bg-[#005AE0] rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-[#475569]">Appelez-nous</div>
                  <div className="font-['Outfit'] font-bold text-[#0F172A]">06 20 51 54 30</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
