import { Phone } from "lucide-react";

const FOOTER_SERVICES = [
  "Plomberie generale",
  "Installation",
  "Reparation",
  "Depannage",
  "Renovation",
  "Pompe a chaleur",
  "Chauffage",
];

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Prestations", href: "#prestations" },
  { label: "A propos", href: "#apropos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Logo + desc */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-['Outfit'] font-black text-xl tracking-tighter">
              <span className="text-[#60A5FA]">ML</span> PLOMBERIE
            </div>
            <p className="mt-4 text-sm text-[#94A3B8] leading-relaxed">
              Votre artisan plombier de confiance a Moulins, Vichy et dans tout l'Allier (03).
              Qualite, rapidite et tarifs transparents.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-sm uppercase tracking-wider text-[#94A3B8] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#CBD5E1] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-sm uppercase tracking-wider text-[#94A3B8] mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-sm text-[#CBD5E1]">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-sm uppercase tracking-wider text-[#94A3B8] mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+33620515430"
                className="flex items-center gap-2 text-sm text-[#CBD5E1] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                06 20 51 54 30
              </a>
              <p className="text-sm text-[#CBD5E1]">
                Moulins, Allier (03)
              </p>
              <p className="text-sm text-[#CBD5E1]">
                Lun-Sam: 8h-19h
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-[#64748B]">
          &copy; {new Date().getFullYear()} ML Plomberie. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
};
