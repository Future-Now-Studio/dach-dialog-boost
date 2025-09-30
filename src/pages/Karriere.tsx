import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Briefcase, Star, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/lib/utils";

export default function Karriere() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('karriere-cta');
    if (ctaSection) {
      const offsetTop = ctaSection.offsetTop - 100; // Account for fixed navbar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center section-spacing bg-gradient-to-br from-background via-secondary/50 to-background overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileInView={{ y: -30 }}
            viewport={{ amount: 0.8 }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            whileInView={{ y: 30 }}
            viewport={{ amount: 0.8 }}
            style={{ willChange: 'transform' }}
          />
        </div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={inViewVariants.fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="mb-4 sm:mb-6 inline-flex items-center px-3 py-2 sm:px-4 bg-primary/20 text-primary-light rounded-full text-xs sm:text-sm font-medium animate-bounce-in">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Jetzt bewerben
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary-light via-primary-light to-primary bg-clip-text text-transparent animate-slide-in-up">
                  Karriere bei
                </span>
                <br />
                <span className="text-foreground animate-slide-in-up [animation-delay:0.2s]">DACH Dialog</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-medium animate-fade-in-up [animation-delay:0.4s]">
                Werden Sie Teil unseres Teams
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up [animation-delay:0.6s]">
                DACH Dialog ist ein wachsendes Unternehmen mit Fokus auf Sales & Customer Service für den gesamten DACH-Raum. 
                Wir suchen hochqualifizierte Mitarbeiter, die Lust haben, Verantwortung zu übernehmen und in einem internationalen 
                Umfeld zu arbeiten – remote, flexibel und mit attraktiver Vergütung.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start animate-slide-in-up [animation-delay:0.8s]">
                <Button 
                  size="lg"
                  variant="cta"
                  onClick={scrollToCTA}
                  className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto group w-full sm:w-auto"
                >
                  Jetzt bewerben
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center stagger-animation animate-bounce-in">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-light">Remote</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Flexibel</div>
                </div>
                <div className="text-center stagger-animation animate-bounce-in">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-light">Top</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Bezahlung</div>
                </div>
                <div className="text-center stagger-animation animate-bounce-in">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-light">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Deutsch</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              className="relative mt-8 lg:mt-0"
              variants={inViewVariants.fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative">
                <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-elegant hover-lift">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center animate-rotate-in">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <div className="font-semibold text-foreground text-sm sm:text-base">Unser Team</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Wächst mit Ihnen</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center hover-float">
                      <span className="text-xs sm:text-sm">Remote-Arbeit</span>
                      <div className="flex items-center">
                        <div className="w-16 sm:w-24 h-2 bg-secondary rounded-full">
                          <div className="w-full h-2 bg-green-500 rounded-full animate-fade-in-right [animation-delay:1.2s]"></div>
                        </div>
                        <span className="ml-2 text-xs sm:text-sm font-medium">100%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center hover-float">
                      <span className="text-xs sm:text-sm">Flexibilität</span>
                      <div className="flex items-center">
                        <div className="w-16 sm:w-24 h-2 bg-secondary rounded-full">
                          <div className="w-full h-2 bg-green-500 rounded-full animate-fade-in-right [animation-delay:1.4s]"></div>
                        </div>
                        <span className="ml-2 text-xs sm:text-sm font-medium">100%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center hover-float">
                      <span className="text-xs sm:text-sm">Bezahlung</span>
                      <div className="flex items-center">
                        <div className="w-16 sm:w-24 h-2 bg-secondary rounded-full">
                          <div className="w-full h-2 bg-accent rounded-full animate-fade-in-right [animation-delay:1.6s]"></div>
                        </div>
                        <span className="ml-2 text-xs sm:text-sm font-medium">Top </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-accent/10 rounded-lg animate-bounce-in [animation-delay:1.8s]">
                    <button 
                      onClick={scrollToCTA}
                      className="flex items-center text-accent hover:text-accent/80 transition-colors cursor-pointer"
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="text-sm sm:text-base font-medium">Jetzt bewerben</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="job-openings" className="section-spacing bg-gradient-subtle">
        <div className="container mx-auto container-padding">
          <motion.div className="text-center mb-16" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Offene <span className="text-primary">Stellen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Werden Sie Teil unseres wachsenden Teams und gestalten Sie die Zukunft von DACH Dialog mit.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Call Center Agent Job */}
            <motion.div
              className="relative overflow-hidden hover-lift group border-0 shadow-card bg-card"
              variants={inViewVariants.scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Card className="border-0 shadow-none bg-transparent">
                <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full animate-rotate-in"></div>
                
                <CardHeader className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform animate-bounce-in">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                        Call Center Agent (m/w/d)
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Deutsch & Englisch (Muttersprachniveau)</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 p-6 sm:p-8 pt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Ihre Aufgaben:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Betreuung von Kundenanfragen (Inbound/Outbound) per Telefon, E-Mail oder Chat</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Professionelle Kommunikation auf Deutsch und Englisch</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Bearbeitung und Dokumentation von Kundenanliegen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Sicherstellung einer hohen Kundenzufriedenheit</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-500" />
                        Ihr Profil:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Kaufmännische Ausbildung oder einschlägige Erfahrung im Kundenservice/Call Center</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Sprachsicherheit auf Muttersprachniveau in Deutsch und Englisch</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Starke Service- und Kundenorientierung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Selbstständige, zuverlässige und strukturierte Arbeitsweise</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Sicherer Umgang mit gängigen PC-Programmen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-green-600" />
                      Wir bieten:
                    </h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Überdurchschnittliche Bezahlung</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Remote-Arbeit – Sie arbeiten flexibel von zu Hause</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Ein motiviertes, internationales Team</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Langfristige Perspektiven und Aufstiegsmöglichkeiten</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="mailto:karriere@dach-dialog.de?subject=Bewerbung Call Center Agent"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors group"
                    >
                      <span>👉</span>
                      Jetzt bewerben und Teil von DACH Dialog werden!
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sales Agent Job */}
            <motion.div
              className="relative overflow-hidden hover-lift group border-0 shadow-card bg-card"
              variants={inViewVariants.scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Card className="border-0 shadow-none bg-transparent">
                <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full animate-rotate-in"></div>
                
                <CardHeader className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform animate-bounce-in">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-green-500 transition-colors">
                        Sales Agent (m/w/d)
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Deutsch & Englisch (Muttersprachniveau)</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 p-6 sm:p-8 pt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Ihre Aufgaben:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Aktive Kundenansprache im B2B- oder B2C-Bereich</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Terminvereinbarung und Lead-Qualifizierung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Aufbau und Pflege von Kundenbeziehungen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Unterstützung bei der Erreichung von Vertriebszielen</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-500" />
                        Ihr Profil:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Kaufmännische Ausbildung oder einschlägige Vertriebserfahrung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Sprachsicherheit auf Muttersprachniveau in Deutsch und Englisch</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Ausgeprägte Kommunikationsstärke und Abschlussorientierung</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Eigenmotivation, Zielstrebigkeit und unternehmerisches Denken</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Freude am Umgang mit Menschen und am Vertrieb</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-green-600" />
                      Wir bieten:
                    </h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Sehr attraktive Vergütung & Boni</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Remote-Arbeit – arbeiten Sie von überall aus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Ein professionelles Umfeld mit viel Gestaltungsspielraum</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Entwicklungsmöglichkeiten im Vertrieb & Management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="mailto:karriere@dach-dialog.de?subject=Bewerbung Sales Agent"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors group"
                    >
                      <span>👉</span>
                      Jetzt bewerben und Ihre Sales-Karriere bei DACH Dialog starten!
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section id="our-promise" className="section-spacing">
        <div className="container mx-auto container-padding">
          <motion.div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elegant" variants={inViewVariants.scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Unser <span className="text-primary">Versprechen</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Wir legen Wert auf Qualität, Verlässlichkeit und eine starke Arbeitsmoral. Wer Teil von DACH Dialog wird, 
                arbeitet in einem Team, das Leistung schätzt und fördert – mit klaren Entwicklungsmöglichkeiten und fairer, 
                überdurchschnittlicher Bezahlung.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <motion.div className="text-center" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-float">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Qualität</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Höchste Standards in allem was wir tun – von der Mitarbeiterauswahl bis zur Kundenbetreuung
                </p>
              </motion.div>

              <motion.div className="text-center" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-float">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Verlässlichkeit</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Stabile Teams, kontinuierliche Betreuung und langfristige Partnerschaften
                </p>
              </motion.div>

              <motion.div className="text-center" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-float">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Arbeitsmoral</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Motivierte Mitarbeiter mit starker Arbeitsethik und Engagement für den Erfolg
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="karriere-cta" className="section-spacing bg-gradient-subtle">
        <div className="container mx-auto container-padding">
          <motion.div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white text-center" variants={inViewVariants.scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Dann senden Sie uns Ihre Bewerbung mit Lebenslauf und relevanten Nachweisen an:
            </p>
            <a 
              href="mailto:karriere@dach-dialog.de"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors group text-lg"
            >
              <Mail className="w-5 h-5" />
              karriere@dach-dialog.de
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
