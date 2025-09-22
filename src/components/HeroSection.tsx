import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center section-spacing bg-gradient-to-br from-background via-secondary/50 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Logo */}
        <div className="text-center mb-8 animate-fade-in-up">
          <img 
            src={logo} 
            alt="DACH Dialog Logo" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 mx-auto hover-float"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <div className="mb-4 sm:mb-6 inline-flex items-center px-3 py-2 sm:px-4 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium animate-bounce-in">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Bis zu 60% Kostenersparnis
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent animate-slide-in-up">
                Ihre Stimme
              </span>
              <br />
              <span className="text-foreground animate-slide-in-up [animation-delay:0.2s]">im DACH-Raum</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-medium animate-fade-in-up [animation-delay:0.4s]">
              Sales & Support auf höchstem Niveau
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up [animation-delay:0.6s]">
              Qualifizierte deutschsprachige Mitarbeiter aus dem Kosovo – bis zu <strong className="text-accent">60% Kostenersparnis</strong> bei gleichbleibender oder besserer Qualität.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start animate-slide-in-up [animation-delay:0.8s]">
              <Button 
                size="lg"
                variant="cta"
                onClick={scrollToContact}
                className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto group w-full sm:w-auto"
              >
                Jetzt unverbindlich anfragen
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto border-2 hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              >
                Mehr erfahren
              </Button>
            </div>

            {/* Stats - Mobile optimized */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center stagger-animation animate-bounce-in">
                <div className="text-2xl sm:text-3xl font-bold text-primary">60%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Kostenersparnis</div>
              </div>
              <div className="text-center stagger-animation animate-bounce-in">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Deutsch</div>
              </div>
              <div className="text-center stagger-animation animate-bounce-in">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Verfügbar</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative mt-8 lg:mt-0 animate-fade-in-right [animation-delay:1s]">
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-elegant hover-lift">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center animate-rotate-in">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="font-semibold text-foreground text-sm sm:text-base">Qualifizierte Teams</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Sofort einsatzbereit</div>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center hover-float">
                    <span className="text-xs sm:text-sm">Deutschkenntnisse</span>
                    <div className="flex items-center">
                      <div className="w-16 sm:w-24 h-2 bg-secondary rounded-full">
                        <div className="w-full h-2 bg-success rounded-full animate-fade-in-right [animation-delay:1.2s]"></div>
                      </div>
                      <span className="ml-2 text-xs sm:text-sm font-medium">100%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center hover-float">
                    <span className="text-xs sm:text-sm">Verfügbarkeit</span>
                    <div className="flex items-center">
                      <div className="w-16 sm:w-24 h-2 bg-secondary rounded-full">
                        <div className="w-full h-2 bg-success rounded-full animate-fade-in-right [animation-delay:1.4s]"></div>
                      </div>
                      <span className="ml-2 text-xs sm:text-sm font-medium">24/7</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center hover-float">
                    <span className="text-xs sm:text-sm">Kosteneffizienz</span>
                    <div className="flex items-center">
                      <div className="w-16 sm:w-24 h-2 bg-secondary rounded-full">
                        <div className="w-4/5 h-2 bg-accent rounded-full animate-fade-in-right [animation-delay:1.6s]"></div>
                      </div>
                      <span className="ml-2 text-xs sm:text-sm font-medium">-60%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-accent/10 rounded-lg animate-bounce-in [animation-delay:1.8s]">
                  <div className="flex items-center text-accent">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base font-medium">Sofort verfügbar</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - Mobile optimized */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-accent rounded-2xl flex items-center justify-center animate-pulse-glow">
                <span className="text-sm sm:text-2xl font-bold text-accent-foreground">DE</span>
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-primary rounded-2xl flex items-center justify-center animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                <span className="text-sm sm:text-2xl font-bold text-primary-foreground">AT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;