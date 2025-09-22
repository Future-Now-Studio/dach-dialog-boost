import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Users, Code, ArrowRight, CheckCircle, Target, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/lib/utils";

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
    <section id="services" className="section-spacing bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        <motion.div className="text-center mb-16" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-primary">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Maßgeschneiderte Lösungen für Sales, Support und IT – mit deutschsprachigen Fachkräften, 
            die Ihre Erwartungen übertreffen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index} 
                className="relative overflow-hidden hover-lift group border-0 shadow-card bg-card"
                variants={inViewVariants.scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <Card 
                  className="border-0 shadow-none bg-transparent"
                >
                <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full animate-rotate-in"></div>
                
                <CardHeader className="relative z-10 p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform animate-bounce-in">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <div className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start hover-float">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-accent/10 rounded-lg mt-4 sm:mt-6 animate-fade-in-up">
                    <p className="text-xs sm:text-sm text-foreground font-medium">
                      {service.highlight}
                    </p>
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elegant" variants={inViewVariants.scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Warum <span className="text-accent">DACH Dialog</span>?
            </h3>
            <p className="text-lg text-muted-foreground">
              Die Vorteile, die den Unterschied machen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div className="text-center" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover-float">
                <span className="text-xl sm:text-2xl font-bold text-accent">60%</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Kostenersparnis</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Bis zu 60% günstiger als deutsche externe Anbieter – mit mindestens gleichbleibender, oft besserer Qualität
              </p>
            </motion.div>

            <motion.div className="text-center" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover-float">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Keine Jobhopper</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Unsere Mitarbeiter sind loyal und motiviert – Stabilität und Kontinuität für Ihr Unternehmen
              </p>
            </motion.div>

            <motion.div className="text-center" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover-float">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Muttersprachlich</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Perfekte deutsche Sprachkenntnisse und kulturelles Verständnis für den DACH-Raum
              </p>
            </motion.div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;