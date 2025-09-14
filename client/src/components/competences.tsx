import { Home, Users, Handshake, Shield, Check } from "lucide-react";

export default function Competences() {
  return (
    <section id="competences" className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Compétences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le cabinet intervient efficacement pour conseiller et défendre les particuliers ainsi que les entreprises
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Droit Immobilier */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Home className="text-primary h-8 w-8 mr-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">Droit Immobilier</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Droit des baux</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Baux d'habitation et commerciaux
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Recouvrement de loyers impayés
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Procédures d'expulsion
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Troubles de jouissance
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Droit de la propriété</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Acquisition et vente immobilière
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Troubles de voisinage
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Actions en bornage
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Servitudes
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Droit de la copropriété</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Recouvrement des charges
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Responsabilité du syndic
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Contestation d'assemblées
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Droit de la Famille */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Users className="text-primary h-8 w-8 mr-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">Droit de la Famille</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Procédures de divorce</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Divorce par consentement mutuel
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Divorce contentieux
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Liquidation et partage
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Prestation compensatoire
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Droit des enfants</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Autorité parentale
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Garde alternée
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Pension alimentaire
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Adoption
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Protection des majeurs</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Tutelles et curatelles
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    Habilitation familiale
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Droit de la Responsabilité */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Handshake className="text-primary h-8 w-8 mr-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">Responsabilité Civile</h3>
            </div>
            
            <div className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Contentieux entrepreneurs et sociétés
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Rupture de relation commerciale
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Rédaction de contrats commerciaux
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Différends livraison et vices cachés
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Recouvrement de créances
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Procédure injonction de payer
                </li>
              </ul>
            </div>
          </div>

          {/* Droit de la Consommation */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Shield className="text-primary h-8 w-8 mr-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">Droit de la Consommation</h3>
            </div>
            
            <div className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Achats correspondance et internet
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Différends bancaires
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Surendettement
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Assurance vie
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Retards et annulations de vols
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Télécommunications
                </li>
                <li className="flex items-start">
                  <Check className="text-accent mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  Panneaux photovoltaïques
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
