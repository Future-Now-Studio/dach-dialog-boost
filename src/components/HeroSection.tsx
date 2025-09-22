import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center section-spacing bg-gradient-to-br from-background via-secondary/50 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-left animate-fade-in-left">
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <Trophy className="w-4 h-4 mr-2" />
              Bis zu 60% Kostenersparnis
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                Ihre Stimme
              </span>
              <br />
              <span className="text-foreground">im DACH-Raum</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
              Sales & Support auf höchstem Niveau
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Qualifizierte deutschsprachige Mitarbeiter aus dem Kosovo – bis zu <strong className="text-accent">60% Kostenersparnis</strong> bei gleichbleibender oder besserer Qualität.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                variant="cta"
                onClick={scrollToContact}
                className="text-lg px-8 py-4 h-auto group"
              >
                Jetzt unverbindlich anfragen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 h-auto border-2 hover:bg-primary hover:text-primary-foreground"
              >
                Mehr erfahren
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground">Kostenersparnis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Deutsch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Verfügbar</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-foreground">Qualifizierte Teams</div>
                    <div className="text-sm text-muted-foreground">Sofort einsatzbereit</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Deutschkenntnisse</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-secondary rounded-full">
                        <div className="w-full h-2 bg-success rounded-full"></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">100%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Verfügbarkeit</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-secondary rounded-full">
                        <div className="w-full h-2 bg-success rounded-full"></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">24/7</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Kosteneffizienz</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-secondary rounded-full">
                        <div className="w-4/5 h-2 bg-accent rounded-full"></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">-60%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <div className="flex items-center text-accent">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-medium">Sofort verfügbar</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center animate-pulse-glow">
                <span className="text-2xl font-bold text-accent-foreground">DE</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                <span className="text-2xl font-bold text-primary-foreground">AT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;