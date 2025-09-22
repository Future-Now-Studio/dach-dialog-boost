import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Dach-Logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all bg-white ${isScrolled ? "shadow-sm" : "shadow-none"}`}>
      <nav className="container mx-auto container-padding flex flex-col items-center justify-center gap-2 py-2 md:flex-row md:justify-between md:gap-4 md:h-20">
        <div className="flex items-center justify-center w-full md:w-auto">
          <img src={logo} alt="DACH Dialog" className="h-10 md:h-12 object-contain" />
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-foreground w-full md:w-auto">
          <button className="hover:text-primary transition-colors" onClick={() => scrollTo("services")}>Leistungen</button>
          <button className="hover:text-primary transition-colors" onClick={() => scrollTo("team")}>Team</button>
          <button className="hover:text-primary transition-colors" onClick={() => scrollTo("contact")}>Kontakt</button>
        </div>

        <div className="flex items-center justify-center w-full md:w-auto">
          <Button size="sm" variant="cta" onClick={() => scrollTo("contact")} className="inline-flex w-full md:w-auto justify-center">
            Jetzt anfragen
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


