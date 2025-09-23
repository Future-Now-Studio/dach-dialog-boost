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
    <header className={`sticky top-0 z-50 transition-all bg-white ${isScrolled ? "shadow-sm" : "shadow-none"}`} style={{ position: "fixed", width: "100%", padding: "0.75em"}}>
      <nav className="container mx-auto container-padding flex items-center justify-between py-2 md:h-16">
        <div className="flex items-center">
          <a href="/"><img src={logo} alt="DACH Dialog" className="h-10 md:h-12 object-contain" /></a>
        </div>
        <div className="flex items-center">
          <Button size="sm" variant="cta" onClick={() => scrollTo("contact")}>Jetzt unverbindlich anfragen</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


