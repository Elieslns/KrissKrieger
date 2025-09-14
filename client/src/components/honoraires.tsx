import { Shield, Scale, ExternalLink, Clock, Settings, Weight, Zap, ListTodo, Wallet, Check } from "lucide-react";

export default function Honoraires() {
  return (
    <section id="honoraires" className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Honoraires</h2>
          <p className="text-xl text-muted-foreground">Le cabinet a fait le choix de la transparence</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Principes */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Les Principes</h3>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Les honoraires sont librement fixés par l'avocat, en accord avec le client, en fonction de la prestation envisagée car chaque dossier est spécifique et doit être traité en tant que tel.
                </p>
                
                <div>
                  <h4 className="font-medium text-foreground mb-4">Critères de fixation (Loi n°71-1130 du 31 décembre 1971) :</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Settings className="text-accent mr-2 h-4 w-4" />
                      Nature et complexité du dossier
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="text-accent mr-2 h-4 w-4" />
                      Temps passé à l'étude
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Weight className="text-accent mr-2 h-4 w-4" />
                      Importance du travail
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="text-accent mr-2 h-4 w-4" />
                      Rapidité de l'intervention
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <ListTodo className="text-accent mr-2 h-4 w-4" />
                      Multiplicité des démarches
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Wallet className="text-accent mr-2 h-4 w-4" />
                      Situation de fortune du client
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Honoraires forfaitaires</h5>
                    <p className="text-sm text-muted-foreground">Prix fixe déterminé à l'avance</p>
                  </div>
                  <div className="bg-accent/5 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Honoraires au temps passé</h5>
                    <p className="text-sm text-muted-foreground">Facturation selon le temps consacré</p>
                  </div>
                </div>

                <div className="bg-muted/40 rounded-lg p-6">
                  <h4 className="font-medium text-foreground mb-3">Engagement de transparence</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                      Convention d'honoraires remise avant intervention
                    </li>
                    <li className="flex items-start">
                      <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                      Modalités de facturation fixées dès le premier entretien
                    </li>
                    <li className="flex items-start">
                      <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                      Provision d'honoraires demandée pour l'étude du dossier
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Prise en charge */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="text-primary h-8 w-8 mr-3" />
                <h4 className="font-medium text-foreground">Assurance Protection Juridique</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Les honoraires peuvent être pris en charge dans le cadre d'une assurance protection juridique.
              </p>
              <p className="text-xs text-muted-foreground">
                Renseignez-vous auprès de votre compagnie d'assurance ou de votre banque.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Scale className="text-accent h-8 w-8 mr-3" />
                <h4 className="font-medium text-foreground">Article 700 CPC</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La juridiction peut condamner la partie adverse à vous rembourser partiellement ou intégralement les honoraires et frais engagés.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
              <h4 className="font-medium text-foreground mb-3">Premier contact</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Pour une prise de rendez-vous ou une consultation en ligne
              </p>
              <a 
                href="https://consultation.avocat.fr/avocat-grasse/kriss-krieger-43866.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                data-testid="link-consultation"
              >
                Consultation en ligne <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
