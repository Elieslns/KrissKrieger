import { Gavel, Hammer, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Services Spécialisés</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Postulations */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-border">
            <div className="flex items-center mb-6">
              <Gavel className="text-primary h-8 w-8 mr-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">Postulations</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Le cabinet assure à ses confrères un service de postulation rigoureux et personnalisé devant le Tribunal Judiciaire de Grasse.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Gestion complète de procédure</h4>
                  <p className="text-sm text-muted-foreground">De la prise de date à l'audience de plaidoirie</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Substitutions devant tous tribunaux</h4>
                  <p className="text-sm text-muted-foreground">Tribunal Judiciaire, Commercial, Juge des contentieux de la Protection</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Proximité géographique</h4>
                  <p className="text-sm text-muted-foreground">À quelques pas du Palais de Justice de Grasse</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ventes aux Enchères */}
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-8 border border-border">
            <div className="flex items-center mb-6">
              <Hammer className="text-accent h-8 w-8 mr-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">Ventes aux Enchères Immobilières</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Si vous êtes intéressé par l'achat d'un bien immobilier aux enchères immobilières, le Cabinet peut porter les enchères en votre nom.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Mandat de représentation</h4>
                  <p className="text-sm text-muted-foreground">Portage d'enchères en votre nom</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground">Expertise procédurale</h4>
                  <p className="text-sm text-muted-foreground">Connaissance des étapes d'adjudication judiciaire</p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-4 mt-6">
                <h4 className="font-medium text-foreground mb-2">Ventes à venir</h4>
                <p className="text-sm text-muted-foreground">Consultez régulièrement les ventes aux enchères disponibles</p>
                <button className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-2">
                  Voir les ventes <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
