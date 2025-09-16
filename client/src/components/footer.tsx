import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="./images/entetekrissavocat.png" 
              referrerPolicy="no-referrer"
              alt="Cabinet Krieger" 
              className="h-10 w-auto mb-4 brightness-0 invert"
              height={40}
              loading="lazy"
              decoding="async"
              data-testid="footer-logo"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Cabinet d'avocat spécialisé en droit immobilier, droit de la famille et droit des affaires.
            </p>
            <p className="text-xs text-muted-foreground">
              Assermentée auprès de la Cour d'Appel d'Aix-en-Provence
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Domaines d'expertise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Droit immobilier</li>
              <li>Droit de la famille</li>
              <li>Responsabilité civile</li>
              <li>Droit de la consommation</li>
              <li>Postulations</li>
              <li>Ventes aux enchères</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>CAPA - École des avocats du Sud-Est</li>
              <li>Master 2 Droit des affaires</li>
              <li>Master 2 Droit privé</li>
              <li className="pt-2">
                <a 
                  href="https://consultation.avocat.fr/avocat-grasse/kriss-krieger-43866.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors inline-flex items-center"
                  data-testid="footer-consultation-link"
                >
                  Consultation en ligne
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Cabinet Maître Kriss KRIEGER. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
