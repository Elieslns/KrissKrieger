import { Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="accueil" className="pt-32 lg:pt-40 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Expert en droit immobilier et droit de la famille
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Le Cabinet de Maître Kriss KRIEGER vous accompagne avec expertise et humanité dans toutes vos problématiques juridiques. Une approche personnalisée pour chaque client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="button-contact"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </button>
              <button 
                onClick={() => scrollToSection('competences')}
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                data-testid="button-competences"
              >
                Découvrir nos compétences
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-xl p-8">
              <img 
                src="./images/kriss.jpg" 
                referrerPolicy="no-referrer"
                alt="Maître Kriss KRIEGER" 
                className="w-48 h-48 rounded-xl mx-auto object-cover shadow-lg"
                width={192}
                height={192}
                loading="lazy"
                decoding="async"
                data-testid="img-kriss"
              />
              <div className="mt-6 text-center">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Maître Kriss KRIEGER
                </h3>
                <p className="text-muted-foreground mt-2">Assermentée le 5 janvier 2011</p>
                <p className="text-sm text-muted-foreground mt-1">Cour d'Appel d'Aix-en-Provence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
