import { GraduationCap, Lightbulb, PenTool, Gavel } from "lucide-react";

export default function Presentation() {
  return (
    <section id="presentation" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Présentation</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-accent" />
                Qualifications
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <GraduationCap className="text-accent mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                  <span>Certificat d'Aptitude à la Profession d'Avocat (CAPA) - École des avocats du Sud-Est</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="text-accent mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                  <span>Master 2 en Droit des affaires - Université de Nice Sophia-Antipolis</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="text-accent mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                  <span>Master 2 en Droit privé - Université de Nice Sophia-Antipolis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                Particulièrement investie, elle a fait le choix d'une <strong className="text-foreground">relation humaine</strong> avec l'ensemble de ses clients. Partant de cette considération, elle effectuera sa mission en conseillant son client, en rédigeant à ses intérêts divers actes et en plaidant sa cause devant les juridictions.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-accent h-8 w-8 mr-4" />
                <h4 className="font-serif text-lg font-semibold text-foreground">Le Conseil</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En amont de tout contentieux, le travail de l'avocat consiste à conseiller au mieux son client de manière à anticiper l'évolution du dossier et à prévenir les difficultés.
              </p>
              <p className="text-sm text-muted-foreground">
                Le conseil se poursuit tout au long de la procédure contentieuse pour informer le client sur l'état de la réglementation et les chances de succès.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <PenTool className="text-accent h-8 w-8 mr-4" />
                <h4 className="font-serif text-lg font-semibold text-foreground">La Rédaction</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rédaction des actes de procédure, mise en demeure, protocoles transactionnels, contrats et conventions nécessaires à la défense des intérêts du client.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Gavel className="text-accent h-8 w-8 mr-4" />
                <h4 className="font-serif text-lg font-semibold text-foreground">La Plaidoirie</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Défense devant toutes les juridictions (première instance ou appel) lorsqu'aucune solution amiable n'a pu être trouvée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
