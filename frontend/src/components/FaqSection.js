import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Quels sont vos delais d'intervention ?",
    answer: "Nous intervenons dans les meilleurs delais selon l'urgence de votre situation. Pour les depannages urgents (fuites, canalisations bouchees), nous nous deplacons generalement dans la journee. Pour les travaux planifies, nous fixons un rendez-vous selon vos disponibilites.",
  },
  {
    question: "Intervenez-vous sur Vichy et alentours ?",
    answer: "Oui, ML Plomberie intervient sur l'ensemble du departement de l'Allier (03), y compris Moulins, Vichy, Montlucon et toutes les communes environnantes. N'hesitez pas a nous contacter pour verifier que nous couvrons votre secteur.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Absolument ! Tous nos devis sont gratuits et sans engagement. Nous nous deplacons pour evaluer vos besoins et vous fournir un devis detaille avec des tarifs transparents avant toute intervention.",
  },
  {
    question: "Quels types de chauffage installez-vous ?",
    answer: "Nous installons et entretenons tous types de systemes de chauffage : pompes a chaleur, chaudieres gaz et fioul, radiateurs, planchers chauffants, et chauffe-eau. Nous vous conseillons sur la solution la plus adaptee a votre logement et votre budget.",
  },
  {
    question: "Travaillez-vous avec les particuliers et les professionnels ?",
    answer: "Oui, ML Plomberie intervient aussi bien chez les particuliers que pour les professionnels (commerces, coproprietes, bureaux). Chaque client beneficie du meme niveau de qualite et d'attention.",
  },
  {
    question: "Comment puis-je vous contacter en cas d'urgence ?",
    answer: "En cas d'urgence, le moyen le plus rapide est de nous appeler directement au 06 20 51 54 30. Nous sommes joignables 7 jours sur 7 et ferons notre maximum pour intervenir dans les plus brefs delais.",
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
            Questions frequentes
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#475569]">
            Retrouvez les reponses aux questions les plus courantes sur nos services de plomberie et chauffage.
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
        </div>
      </div>
    </section>
  );
};
