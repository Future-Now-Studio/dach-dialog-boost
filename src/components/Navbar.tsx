import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
      <nav className="container mx-auto container-padding flex items-center justify-between py-2 md:h-16">
        <div className="flex items-center">
          <img src={logo} alt="DACH Dialog" className="h-10 md:h-12 object-contain" />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-foreground">
          <button className="hover:text-primary transition-colors" onClick={() => scrollTo("services")}>Leistungen</button>
          <button className="hover:text-primary transition-colors" onClick={() => scrollTo("team")}>Team</button>
          <button className="hover:text-primary transition-colors" onClick={() => scrollTo("contact")}>Kontakt</button>
          <Button size="sm" variant="cta" onClick={() => scrollTo("contact")}>Jetzt anfragen</Button>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Menü öffnen" className="p-2 rounded-md border">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:max-w-xs">
              <div className="flex flex-col gap-4 mt-8">
                <button className="text-base text-foreground text-left" onClick={() => scrollTo("services")}>Leistungen</button>
                <button className="text-base text-foreground text-left" onClick={() => scrollTo("team")}>Team</button>
                <button className="text-base text-foreground text-left" onClick={() => scrollTo("contact")}>Kontakt</button>
                <Button size="sm" variant="cta" onClick={() => scrollTo("contact")} className="mt-2">Jetzt anfragen</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


