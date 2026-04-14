const PORTFOLIO_ITEMS = [
  {
    url: "https://static.prod-images.emergentagent.com/jobs/6abe0164-00fa-45d7-85b8-7ee084899e3d/images/3d6a7439f5dfcb8dd604bdc4d01677abe9976c059a6ad19cb53c44cd05fd540d.png",
    label: "Rénovation Salle de Bain",
  },
  {
    url: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "Installation Tuyauterie",
  },
  {
    url: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiYXRocm9vbXxlbnwwfHx8fDE3NzYxNzQyMTh8MA&ixlib=rb-4.1.0&q=85",
    label: "Salle de Bain Moderne",
  },
  {
    url: "https://images.unsplash.com/photo-1732395805034-e0bf859665e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxodmFjJTIwdGVjaG5pY2lhbnxlbnwwfHx8fDE3NzYxNzQyMTh8MA&ixlib=rb-4.1.0&q=85",
    label: "Installation Chauffage",
  },
];

export const Portfolio = () => {
  return (
    <section id="prestations" data-testid="portfolio-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-[#005AE0] uppercase tracking-wider mb-3">
            Nos Prestations
          </span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A]">
            Découvrez nos réalisations
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#475569] max-w-2xl mx-auto">
            Quelques exemples de nos interventions en plomberie, rénovation et chauffage dans l'Allier.
          </p>
        </div>

        {/* Tetris grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              key={i}
              data-testid={`portfolio-item-${i}`}
              className={`reveal portfolio-item rounded-2xl relative group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={item.url}
                alt={item.label}
                className={`w-full object-cover rounded-2xl ${
                  i === 0 ? "h-full min-h-[300px] lg:min-h-[440px]" : "h-[210px] lg:h-[210px]"
                }`}
              />
              {/* Overlay */}
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 flex items-end p-5">
                <span className="text-white font-['Outfit'] font-semibold text-lg">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
