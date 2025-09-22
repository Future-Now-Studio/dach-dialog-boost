import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, Clock, ArrowRight, CheckCircle, Euro, TrendingDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet!",
      description: "Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const savings = [
    {
      title: "Externe Anbieter in Deutschland",
      subtitle: "Bis zu 60% teurer als wir",
      icon: TrendingDown,
      color: "text-destructive"
    },
    {
      title: "Interne Lösungen",
      subtitle: "19-30% mehr Kosten als mit uns",
      icon: Euro,
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-subtle">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Lassen Sie uns <span className="text-primary">sprechen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gemeinsam finden wir die richtige Lösung für Ihre Sales- und Support-Herausforderungen.
            <strong className="text-accent"> Mit DACH Dialog sparen Sie bares Geld</strong> – und gewinnen gleichzeitig zuverlässige Mitarbeiter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Savings Cards */}
          {savings.map((saving, index) => {
            const IconComponent = saving.icon;
            return (
              <Card key={index} className="text-center hover-lift animate-scale-in border-0 shadow-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`w-8 h-8 ${saving.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {saving.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-lg font-semibold ${saving.color}`}>
                    {saving.subtitle}
                  </p>
                </CardContent>
              </Card>
            );
          })}

          {/* Quick Stats */}
          <Card className="text-center hover-lift animate-scale-in border-0 shadow-card" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Fazit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-success">
                Sparen Sie bares Geld mit zuverlässigen Mitarbeitern
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0 animate-fade-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                Jetzt unverbindlich anfragen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 focus:border-primary"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium">Unternehmen</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-2 focus:border-primary"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-2 focus:border-primary"
                    placeholder="ihre.email@unternehmen.de"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 focus:border-primary min-h-[120px]"
                    placeholder="Beschreiben Sie Ihre Anforderungen und wie wir Ihnen helfen können..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  variant="cta"
                  className="w-full text-lg py-4 h-auto group"
                >
                  Anfrage senden
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            <Card className="shadow-card border-0 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Schnelle Antwort garantiert</h3>
                    <p className="text-muted-foreground">Antwort innerhalb von 24 Stunden</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent mr-3" />
                    <span className="text-muted-foreground">Telefon: [Wird bei Kontakt bereitgestellt]</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-accent mr-3" />
                    <span className="text-muted-foreground">E-Mail: [Wird bei Kontakt bereitgestellt]</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground shadow-elegant border-0">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4">Was Sie erwarten können:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span>Kostenlose Erstberatung und Bedarfsanalyse</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span>Individuelle Lösungsvorschläge für Ihre Anforderungen</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span>Transparente Kostenaufstellung und Einsparpotentiale</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span>Schnelles Onboarding in wenigen Tagen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;