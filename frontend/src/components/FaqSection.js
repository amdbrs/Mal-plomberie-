import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Nous intervenons dans les meilleurs délais selon l'urgence de votre situation. Pour les dépannages urgents (fuites, canalisations bouchées), nous nous déplaçons généralement dans la journée. Pour les travaux planifiés, nous fixons un rendez-vous selon vos disponibilités.",
  },
  {
    question: "Intervenez-vous sur Vichy et alentours ?",
    answer: "Oui, ML Plomberie intervient sur l'ensemble du département de l'Allier (03), y compris Moulins, Vichy, Montluçon et toutes les communes environnantes. N'hésitez pas à nous contacter pour vérifier que nous couvrons votre secteur.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Absolument ! Tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous fournir un devis détaillé avec des tarifs transparents avant toute intervention.",
  },
  {
    question: "Quels types de chauffage installez-vous ?",
    answer: "Nous installons et entretenons tous types de systèmes de chauffage : pompes à chaleur, chaudières gaz et fioul, radiateurs, planchers chauffants, et chauffe-eau. Nous vous conseillons sur la solution la plus adaptée à votre logement et votre budget.",
  },
  {
    question: "Travaillez-vous avec les particuliers et les professionnels ?",
    answer: "Oui, ML Plomberie intervient aussi bien chez les particuliers que pour les professionnels (commerces, copropriétés, bureaux). Chaque client bénéficie du même niveau de qualité et d'attention.",
  },
  {
    question: "Comment puis-je vous contacter en cas d'urgence ?",
    answer: "En cas d'urgence, le moyen le plus rapide est de nous appeler directement au 06 20 51 54 30. Nous sommes joignables 7 jours sur 7 et ferons notre maximum pour intervenir dans les plus brefs délais.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" data-testid="faq-section" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-[#005AE0] uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A]">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#475569]">
            Retrouvez les réponses aux questions les plus courantes sur nos services de plomberie et chauffage.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[#E2E8F0]"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="faq-trigger text-left font-['Outfit'] text-base font-semibold text-[#0F172A] hover:text-[#005AE0] hover:no-underline py-5"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i}`}
                  className="text-[#475569] text-base leading-relaxed pb-5"
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12 pt-8 border-t border-[#E2E8F0]">
            <p className="text-[#475569] mb-5">Vous avez une autre question ? Contactez-nous directement.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+33620515430" data-testid="faq-cta-phone">
                <Button className="bg-[#005AE0] hover:bg-[#2563EB] text-white rounded-full px-6 h-11 font-semibold btn-shine gap-2">
                  <Phone className="w-4 h-4" />
                  06 20 51 54 30
                </Button>
              </a>
              <a href="#contact" data-testid="faq-cta-contact">
                <Button variant="outline" className="rounded-full px-6 h-11 font-semibold border-[#E2E8F0] text-[#0F172A] hover:border-[#005AE0] hover:text-[#005AE0]">
                  Envoyer un message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
