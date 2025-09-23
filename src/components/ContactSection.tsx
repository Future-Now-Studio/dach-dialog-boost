import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, Clock, ArrowRight, CheckCircle, Euro } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { inViewVariants } from "@/lib/utils";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot.trim() !== '') {
      return; // simple spam protection
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/timo@future-now.studio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          _subject: 'Neue Anfrage über die DACH Dialog Website',
          _template: 'box',
          _captcha: 'false',
          reply_to: formData.email
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      await response.json();

      toast({
        title: "Anfrage gesendet!",
        description: "Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        honeypot: ''
      });
    } catch (error) {
      toast({
        title: "Senden fehlgeschlagen",
        description: "Bitte versuchen Sie es später erneut oder schreiben Sie an info@dach-dialog.de.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const savings = [
    {
      title: "Externe Anbieter in Deutschland",
      subtitle: "Bis zu 60% teurer als wir",
      icon: Euro,
      color: "text-primary"
    },
    {
      title: "Interne Lösungen",
      subtitle: "19-30% mehr Kosten als mit uns",
      icon: Euro,
      color: "text-primary"
    },
    {
      title: "Fazit",
      subtitle: "Sparen Sie bares Geld mit zuverlässigen Mitarbeitern",
      icon: Euro,
      color: "text-primary"
    }
  ];

  return (
    <section className="section-spacing bg-gradient-subtle scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto container-padding">
        <motion.div className="text-center mb-16" variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Lassen Sie uns <span className="text-primary">sprechen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gemeinsam finden wir die richtige Lösung für Ihre Sales- und Support-Herausforderungen.
            <strong className="text-accent"> Mit DACH Dialog sparen Sie bares Geld</strong> – und gewinnen gleichzeitig zuverlässige Mitarbeiter.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Savings Cards */}
          {savings.map((saving, index) => {
            const IconComponent = saving.icon;
            return (
              <motion.div key={index} variants={inViewVariants.scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -6, scale: 1.01 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Card className="text-center hover-lift border-0 shadow-card">
                  <CardHeader className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce-in">
                    <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${saving.color}`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                    {saving.title}
                  </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className={`text-sm sm:text-lg font-semibold ${saving.color}`}>
                      {saving.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

         
        </div>

        <motion.div variants={inViewVariants.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} id="contact" className="scroll-mt-24 md:scroll-mt-32">
          <Card className="shadow-elegant border-0">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary animate-bounce-in" />
                Jetzt unverbindlich anfragen
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-8 pt-0">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Honeypot field for spam protection */}
                  <input
                    type="text"
                    name="honeypot"
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2 animate-fade-in-up stagger-animation">
                      <Label htmlFor="name" className="text-foreground font-medium text-sm sm:text-base">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-2 focus:border-primary h-10 sm:h-12 text-sm sm:text-base hover-float"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div className="space-y-2 animate-fade-in-up stagger-animation">
                      <Label htmlFor="company" className="text-foreground font-medium text-sm sm:text-base">Unternehmen</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-2 focus:border-primary h-10 sm:h-12 text-sm sm:text-base hover-float"
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 animate-fade-in-up stagger-animation">
                    <Label htmlFor="email" className="text-foreground font-medium text-sm sm:text-base">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 focus:border-primary h-10 sm:h-12 text-sm sm:text-base hover-float"
                      placeholder="ihre.email@unternehmen.de"
                    />
                  </div>

                  <div className="space-y-2 animate-fade-in-up stagger-animation">
                    <Label htmlFor="phone" className="text-foreground font-medium text-sm sm:text-base">Telefon (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 focus:border-primary h-10 sm:h-12 text-sm sm:text-base hover-float"
                      placeholder="z. B. +49 170 1234567"
                    />
                  </div>
                  
                  <div className="space-y-2 animate-fade-in-up stagger-animation">
                    <Label htmlFor="message" className="text-foreground font-medium text-sm sm:text-base">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-2 focus:border-primary min-h-[100px] sm:min-h-[120px] text-sm sm:text-base hover-float"
                      placeholder="Beschreiben Sie Ihre Anforderungen und wie wir Ihnen helfen können..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    variant="cta"
                    disabled={isSubmitting}
                    className="w-full text-base sm:text-lg py-3 sm:py-4 h-auto group animate-bounce-in"
                  >
                    {isSubmitting ? 'Wird gesendet…' : 'Anfrage senden'}
                    {!isSubmitting && (
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground text-center animate-fade-in-up">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>

                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-card rounded-xl shadow-card p-6 sm:p-8">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-base sm:text-lg">Schnelle Antwort garantiert</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">Antwort innerhalb von 24 Stunden</p>
                      </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center hover-float">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm sm:text-base">Telefon: <a href="tel:+491781202439">+49 178 1202439</a></span>
                      </div>
                      <div className="flex items-center hover-float">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm sm:text-base">E-Mail: <a href="mailto:info@dach-dialog.de">info@dach-dialog.de</a></span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary text-primary-foreground rounded-xl shadow-elegant p-6 sm:p-8">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Was Sie erwarten können:</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start hover-float">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Kostenlose Erstberatung und Bedarfsanalyse</span>
                      </div>
                      <div className="flex items-start hover-float">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Individuelle Lösungsvorschläge für Ihre Anforderungen</span>
                      </div>
                      <div className="flex items-start hover-float">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Transparente Kostenaufstellung und Einsparpotentiale</span>
                      </div>
                      <div className="flex items-start hover-float">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">Schnelles Onboarding in wenigen Tagen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;