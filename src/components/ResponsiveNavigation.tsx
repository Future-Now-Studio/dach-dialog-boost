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

const ResponsiveNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    // Always navigate to main page first if not already there
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setIsOpen(false);
      return;
    }
    
    // If on main page, scroll to section
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isMainPage = location.pathname === "/";
  const isCareerPage = location.pathname === "/karriere";

  // Desktop Navigation Items
  const getDesktopNavItems = () => {
    return [
      { id: "hero", label: "Start", icon: Home },
      { id: "services", label: "Leistungen", icon: Target },
      { id: "team", label: "Über uns", icon: Users },
      { id: "contact", label: "Kontakt", icon: MessageSquare },
      { path: "/karriere", label: "Karriere", icon: Briefcase },
    ];
  };

  const navItems = getDesktopNavItems();

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isLast = index === navItems.length - 1;
          
          return (
            <div key={item.id || item.path} className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => item.id ? scrollTo(item.id) : navigateToPage(item.path!)}
                className="flex items-center gap-2 px-3 py-2 h-9 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10"
              >
                <IconComponent className="w-4 h-4" />
                {item.label}
              </Button>
              {!isLast && <div className="w-px h-4 bg-border mx-1" />}
            </div>
          );
        })}
      </nav>

      {/* Mobile Navigation - Burger Menu */}
      <div className="md:hidden">
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
          <DropdownMenuContent align="end" className="w-56 p-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <DropdownMenuItem 
                  key={item.id || item.path}
                  onClick={() => item.id ? scrollTo(item.id) : navigateToPage(item.path!)}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ResponsiveNavigation;
