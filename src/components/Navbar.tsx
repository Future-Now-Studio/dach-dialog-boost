import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/Dach-Logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // If not on home page, navigate to hash and let Index handle scroll
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all bg-white ${isScrolled ? "shadow-sm" : "shadow-none"}`} style={{ position: "fixed", width: "100%", padding: "0.75em"}}>
      <nav className="container mx-auto container-padding flex items-center justify-between py-2 md:h-16">
        <div className="flex items-center">
          <a href="/"><img src={logo} alt="DACH Dialog" className="block h-12 md:h-12 object-contain logo-crisp" width={225} height={112} decoding="sync" /></a>
        </div>
        <div className="flex items-center">
          <Button size="sm" variant="cta" onClick={() => scrollTo("contact")}>Jetzt unverbindlich anfragen</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


