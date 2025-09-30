import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Home, Briefcase, Users, Target, MessageSquare, Star } from "lucide-react";

const NavigationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      return;
    }
    // If not on home page, navigate to hash and let Index handle scroll
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setIsOpen(false);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isMainPage = location.pathname === "/";
  const isCareerPage = location.pathname === "/karriere";

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="relative flex items-center justify-center w-10 h-10 p-0 hover:bg-primary/10 transition-all duration-200 group"
        >
          <div className="relative w-5 h-5">
            <Menu 
              className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`} 
            />
            <X 
              className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`} 
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2 bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
        {/* Main Page Navigation */}
        {isMainPage && (
          <>
            <DropdownMenuItem 
              onClick={() => scrollTo("hero")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Start</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollTo("services")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Leistungen</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollTo("team")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Über uns</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollTo("contact")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Kontakt</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-2 bg-border/50" />
            <DropdownMenuItem 
              onClick={() => navigateToPage("/karriere")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Briefcase className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium text-foreground">Karriere</span>
            </DropdownMenuItem>
          </>
        )}

        {/* Career Page Navigation */}
        {isCareerPage && (
          <>
            <DropdownMenuItem 
              onClick={() => scrollTo("hero")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Start</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollTo("job-openings")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Offene Stellen</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollTo("our-promise")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Star className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Unser Versprechen</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => scrollTo("karriere-cta")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium text-foreground">Jetzt bewerben</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-2 bg-border/50" />
            <DropdownMenuItem 
              onClick={() => navigateToPage("/")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Zur Hauptseite</span>
            </DropdownMenuItem>
          </>
        )}

        {/* Other Pages Navigation */}
        {!isMainPage && !isCareerPage && (
          <>
            <DropdownMenuItem 
              onClick={() => navigateToPage("/")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">Hauptseite</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => navigateToPage("/karriere")} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent/10 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Briefcase className="w-4 h-4 text-accent" />
              </div>
              <span className="font-medium text-foreground">Karriere</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationDropdown;
