import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  Wrench,
  Hammer,
  AlertTriangle,
  ShowerHead,
  Flame,
  Fan,
  PenTool,
} from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    title: "Plomberie Générale",
    description: "Entretien, réparation et installation de tous vos équipements sanitaires et canalisations.",
    accent: "#005AE0",
  },
  {
    icon: Hammer,
    title: "Installation",
    description: "Pose de robinetterie, sanitaires, chauffe-eau, cumulus et systèmes de plomberie complets.",
    accent: "#2563EB",
  },
  {
    icon: AlertTriangle,
    title: "Dépannage Urgent",
    description: "Intervention rapide pour fuites, canalisations bouchées et pannes urgentes 7j/7.",
    accent: "#0EA5E9",
    featured: true,
  },
  {
    icon: PenTool,
    title: "Réparation",
    description: "Diagnostic et réparation de tous types de pannes : fuites, joints, mécanismes, tuyauterie.",
    accent: "#005AE0",
  },
  {
    icon: ShowerHead,
    title: "Rénovation",
    description: "Rénovation complète de salle de bain et cuisine. Transformation de vos espaces.",
    accent: "#2563EB",
  },
  {
    icon: Fan,
    title: "Pompe à Chaleur",
    description: "Installation et entretien de pompes à chaleur pour un chauffage économique et écologique.",
    accent: "#0EA5E9",
  },
  {
    icon: Flame,
    title: "Chauffage",
    description: "Installation, entretien et dépannage de chaudières, radiateurs et planchers chauffants.",
    accent: "#005AE0",
  },
];

export const ServicesGrid = () => {
  return (
    <section id="services" data-testid="services-section" className="services-section py-24 md:py-36 bg-[#0F172A] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="services-bg-orb absolute -top-32 -right-32 w-96 h-96 bg-[#005AE0]/10 rounded-full blur-3xl" />
        <div className="services-bg-orb-2 absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-[#2563EB]/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #60A5FA 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 reveal-scale">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#60A5FA] px-5 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full animate-pulse" />
            Nos Services
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Des solutions pour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]">chaque besoin</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Plomberie, chauffage, rénovation — ML Plomberie vous accompagne dans tous vos projets avec expertise et professionnalisme.
          </p>
        </div>

        {/* Modern grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 services-stagger">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                data-testid={`service-card-${i}`}
                className={`reveal-up service-card-modern group relative rounded-2xl p-[1px] cursor-default ${
                  service.featured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#005AE0]/0 via-transparent to-[#60A5FA]/0 group-hover:from-[#005AE0]/60 group-hover:to-[#60A5FA]/60 transition-all duration-500" />

                <div className="relative bg-[#1E293B]/80 backdrop-blur-sm rounded-2xl p-7 h-full border border-white/5 group-hover:border-transparent transition-all duration-500 group-hover:bg-[#1E293B]">
                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="service-icon-wrap w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#005AE0]/20 to-[#60A5FA]/10 group-hover:from-[#005AE0]/40 group-hover:to-[#60A5FA]/30 transition-all duration-500">
                      <Icon className="w-6 h-6 text-[#60A5FA] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-['Outfit'] text-4xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] text-lg font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed group-hover:text-[#CBD5E1] transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator on hover */}
                  <div className="mt-5 flex items-center gap-2 text-[#60A5FA] opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-400">
                    <span className="text-xs font-semibold uppercase tracking-wider">En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal-scale">
          <a href="#contact" data-testid="services-cta">
            <Button className="bg-white text-[#0F172A] hover:bg-[#F1F5F9] rounded-full px-8 h-12 text-base font-semibold btn-shine gap-2 group">
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
