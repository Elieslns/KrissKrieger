import { useEffect, useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Presentation from "@/components/presentation";
import Competences from "@/components/competences";
import Services from "@/components/services";
import Honoraires from "@/components/honoraires";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const updateActiveNavigation = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation();

    return () => window.removeEventListener('scroll', updateActiveNavigation);
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Presentation />
        <Competences />
        <Services />
        <Honoraires />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
