import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "sonner";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutSection } from "@/components/AboutSection";
import { Portfolio } from "@/components/Portfolio";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

function App() {
  const observerRef = useRef(null);
  const lenisRef = useRef(null);

  const setupObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-up, .line-grow, .counter-animate").forEach((el) => {
      if (!el.classList.contains("visible")) {
        observerRef.current.observe(el);
      }
    });
  }, []);

  useEffect(() => {
    // Init Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle anchor clicks with Lenis
    const handleAnchorClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -80, duration: 1.6 });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // Hero instant reveal
    requestAnimationFrame(() => {
      document.querySelectorAll(".hero-instant").forEach((el) => {
        el.classList.add("visible");
      });
    });

    // Setup observer
    setupObserver();
    const timer = setTimeout(setupObserver, 600);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [setupObserver]);

  return (
    <div className="App min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <Portfolio />
      <AboutSection />
      <ContactForm />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
