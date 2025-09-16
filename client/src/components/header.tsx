import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "presentation", label: "Présentation" },
    { id: "competences", label: "Compétences" },
    { id: "services", label: "Services" },
    { id: "honoraires", label: "Honoraires" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerEl = document.querySelector('header');
      const headerHeight = (headerEl instanceof HTMLElement ? headerEl.offsetHeight : 80) + 8; // small extra spacing
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-card shadow-sm border-b border-border fixed w-full top-0 z-50" data-testid="header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/images/entetekrissavocat.png" 
              referrerPolicy="no-referrer"
              alt="Cabinet Krieger" 
              className="h-20 sm:h-24 lg:h-28 w-auto"
              height={96}
              decoding="async"
              fetchPriority="high"
              data-testid="logo"
            />

          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2" data-testid="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 nav-link ${activeSection === item.id ? 'active' : ''}`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
