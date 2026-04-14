import { useEffect, useRef, useCallback } from "react";
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-up, .line-grow, .counter-animate").forEach((el) => {
      observerRef.current.observe(el);
    });
  }, []);

  useEffect(() => {
    // Make hero elements visible immediately
    document.querySelectorAll(".hero-instant").forEach((el) => {
      el.classList.add("visible");
    });

    // Setup scroll observer for the rest
    setupObserver();
    const timer = setTimeout(setupObserver, 500);

    return () => {
      clearTimeout(timer);
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
