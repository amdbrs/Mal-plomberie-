import { MapPin, Award, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="apropos" data-testid="about-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="offset-box relative z-10">
              <img
                src="https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxwbHVtYmVyJTIwd29ya2luZ3xlbnwwfHx8fDE3NzYxNzQyMTh8MA&ixlib=rb-4.1.0&q=85"
                alt="Plombier professionnel ML Plomberie"
                className="rounded-2xl w-full h-[400px] object-cover"
                data-testid="about-image"
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <span className="inline-block text-sm font-semibold text-[#005AE0] uppercase tracking-wider mb-3">
              À propos
            </span>
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A]">
              ML Plomberie, votre artisan de confiance dans l'Allier
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#475569]">
              Basée à Moulins dans le département de l'Allier (03), ML Plomberie met son savoir-faire
              au service des particuliers et professionnels. Notre engagement : un travail soigné,
              des tarifs transparents et une intervention rapide.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#475569]">
              Nous intervenons sur Moulins, Vichy et l'ensemble du département de l'Allier
              pour tous vos travaux de plomberie, chauffage et rénovation.
            </p>

            {/* Key points */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#005AE0]" />
                </div>
                <div>
                  <div className="font-['Outfit'] font-bold text-[#0F172A]">Zone 03</div>
                  <div className="text-sm text-[#475569]">Moulins, Vichy et alentours</div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#005AE0]" />
                </div>
                <div>
                  <div className="font-['Outfit'] font-bold text-[#0F172A]">Qualité</div>
                  <div className="text-sm text-[#475569]">Travail soigné garanti</div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#005AE0]" />
                </div>
                <div>
                  <div className="font-['Outfit'] font-bold text-[#0F172A]">Réactif</div>
                  <div className="text-sm text-[#475569]">Intervention rapide 7j/7</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="tel:+33620515430" data-testid="about-cta-phone">
                <Button className="bg-[#005AE0] hover:bg-[#2563EB] text-white rounded-full px-6 h-11 font-semibold btn-shine gap-2">
                  <Phone className="w-4 h-4" />
                  Appelez-nous
                </Button>
              </a>
              <a href="#contact" data-testid="about-cta-devis">
                <Button variant="outline" className="rounded-full px-6 h-11 font-semibold border-[#E2E8F0] text-[#0F172A] hover:border-[#005AE0] hover:text-[#005AE0]">
                  Demander un devis
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
