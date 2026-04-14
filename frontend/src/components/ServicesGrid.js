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
  },
  {
    icon: Hammer,
    title: "Installation",
    description: "Pose de robinetterie, sanitaires, chauffe-eau, cumulus et systèmes de plomberie complets.",
  },
  {
    icon: AlertTriangle,
    title: "Dépannage Urgent",
    description: "Intervention rapide pour fuites, canalisations bouchées et pannes urgentes 7j/7.",
  },
  {
    icon: PenTool,
    title: "Réparation",
    description: "Diagnostic et réparation de tous types de pannes : fuites, joints, mécanismes, tuyauterie.",
  },
  {
    icon: ShowerHead,
    title: "Rénovation",
    description: "Rénovation complète de salle de bain et cuisine. Transformation de vos espaces.",
  },
  {
    icon: Fan,
    title: "Pompe à Chaleur",
    description: "Installation et entretien de pompes à chaleur pour un chauffage économique et écologique.",
  },
  {
    icon: Flame,
    title: "Chauffage",
    description: "Installation, entretien et dépannage de chaudières, radiateurs et planchers chauffants.",
  },
];

export const ServicesGrid = () => {
  return (
    <section id="services" data-testid="services-section" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-[#005AE0] uppercase tracking-wider mb-3">
            Nos Services
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A]">
            Des solutions pour chaque besoin
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#475569] max-w-2xl mx-auto">
            Plomberie, chauffage, rénovation — ML Plomberie vous accompagne dans tous vos projets avec expertise et professionnalisme.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                data-testid={`service-card-${i}`}
                className={`reveal service-card bg-white rounded-2xl p-6 border border-[#E2E8F0] cursor-default ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#005AE0]" />
                </div>
                <h3 className="font-['Outfit'] text-xl font-semibold text-[#0F172A] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
