import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Prestations", href: "#prestations" },
  { label: "A propos", href: "#apropos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" data-testid="logo" className="flex items-center gap-0.5 font-['Outfit'] font-black text-xl md:text-2xl tracking-tighter">
          <span className="text-[#005AE0]">ML</span>
          <span className="text-[#0F172A]">&nbsp;PLOMBERIE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.href.slice(1)}`}
              className="text-sm font-medium text-[#475569] hover:text-[#005AE0] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+33620515430" data-testid="nav-phone-cta">
            <Button className="bg-[#005AE0] hover:bg-[#2563EB] text-white rounded-full px-5 h-10 btn-shine pulse-ring gap-2">
              <Phone className="w-4 h-4" />
              06 20 51 54 30
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="mobile-menu-toggle">
                <Menu className="w-6 h-6 text-[#0F172A]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white p-6">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-[#0F172A] hover:text-[#005AE0] transition-colors font-['Outfit']"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="tel:+33620515430" className="mt-4">
                  <Button className="w-full bg-[#005AE0] hover:bg-[#2563EB] text-white rounded-full h-12 gap-2">
                    <Phone className="w-4 h-4" />
                    06 20 51 54 30
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
