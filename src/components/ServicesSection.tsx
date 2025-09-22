import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Users, Code, ArrowRight, CheckCircle, Target, Headphones } from "lucide-react";

const ServicesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Target,
      title: "Premium Sales Solutions",
      description: "Professioneller Vertrieb für nachhaltigen Geschäftserfolg",
      features: [
        "Outbound-Vertrieb (B2B / B2C)",
        "Terminvereinbarung & Lead-Qualifizierung", 
        "Vertriebsmitarbeiter auf Muttersprach-Niveau Deutsch",
        "Pipeline-Aufbau und Kundenakquise"
      ],
      highlight: "Ideal für Unternehmen, die ihre Sales-Pipeline zuverlässig ausbauen wollen"
    },
    {
      icon: Headphones,
      title: "Call Center Services",
      description: "Erstklassiger Kundenservice rund um die Uhr",
      features: [
        "Inbound (Kundenservice, First-Level-Support)",
        "Outbound (Nachfassaktionen, Zufriedenheitsbefragungen)",
        "Multichannel: Telefon, E-Mail, Chat",
        "Flexibel: Teilzeit, Vollzeit oder projektbasiert"
      ],
      highlight: "Professionelle Kundenbetreuung in deutscher Sprache"
    },
    {
      icon: Code,
      title: "IT & Consulting",
      description: "Technische Expertise für digitale Herausforderungen",
      features: [
        "IT-Entwickler & Support-Spezialisten",
        "Projektbasierte Lösungen oder laufender Support",
        "Deutsch- und englischsprachige Experten",
        "Moderne Technologien und Best Practices"
      ],
      highlight: "Hochqualifizierte IT-Fachkräfte für Ihre digitalen Projekte"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-primary">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Maßgeschneiderte Lösungen für Sales, Support und IT – mit deutschsprachigen Fachkräften, 
            die Ihre Erwartungen übertreffen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden hover-lift group border-0 shadow-card bg-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-lg mt-6">
                    <p className="text-sm text-foreground font-medium">
                      {service.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elegant animate-scale-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Warum <span className="text-accent">DACH Dialog</span>?
            </h3>
            <p className="text-lg text-muted-foreground">
              Die Vorteile, die den Unterschied machen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">60%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Kostenersparnis</h4>
              <p className="text-sm text-muted-foreground">
                Bis zu 60% günstiger als deutsche externe Anbieter – mit mindestens gleichbleibender, oft besserer Qualität
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Keine Jobhopper</h4>
              <p className="text-sm text-muted-foreground">
                Unsere Mitarbeiter sind loyal und motiviert – Stabilität und Kontinuität für Ihr Unternehmen
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Muttersprachlich</h4>
              <p className="text-sm text-muted-foreground">
                Perfekte deutsche Sprachkenntnisse und kulturelles Verständnis für den DACH-Raum
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="cta"
              onClick={scrollToContact}
              className="text-lg px-8 py-4 h-auto group"
            >
              Kostenlose Beratung anfragen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;