import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkedinIcon, Mail, Users, Award, Target, CheckCircle } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Pascal Zielosko",
      role: "Sales & Business Development",
      description: "Mit langjähriger Erfahrung im Sales (IT & Finanzdienstleistungen), Headhunting und Marketing ist Pascal Ihr Ansprechpartner für den Aufbau starker deutschsprachiger Vertriebsteams.",
      expertise: ["Sales Excellence", "Team Building", "B2B Marketing", "Lead Generation"],
      icon: Target
    },
    {
      name: "Jeton Gela", 
      role: "Projekt- & Qualitätsmanagement",
      description: "Spezialist für Projekt- und Qualitätsmanagement. Er sorgt dafür, dass unsere Mitarbeiter mit den richtigen Skills, Sprachkenntnissen und perfektem Onboarding ausgestattet werden, bevor sie für unsere Kunden starten.",
      expertise: ["Quality Assurance", "Process Optimization", "Team Training", "Project Management"],
      icon: Award
    }
  ];

  const values = [
    {
      title: "Qualität statt Quantität",
      description: "Wir setzen auf sorgfältig ausgewählte, hochqualifizierte Mitarbeiter",
      icon: CheckCircle
    },
    {
      title: "Deutsche Arbeitsmoral – neu belebt",
      description: "Verlässlichkeit und Pflichtbewusstsein, die früher selbstverständlich waren",
      icon: Award
    },
    {
      title: "Transparenz & Vertrauen",
      description: "Offene Kommunikation und ehrliche Partnerschaften",
      icon: Users
    },
    {
      title: "Langfristige Zusammenarbeit",
      description: "Nachhaltige Beziehungen statt kurzfristige Lösungen",
      icon: Target
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto container-padding">
        {/* About Us Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Über <span className="text-primary">DACH Dialog</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              DACH Dialog wurde gegründet, um Unternehmen im gesamten DACH-Raum endlich den 
              Zugang zu qualifizierten und engagierten Mitarbeitern zu ermöglichen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unser Standort im Kosovo bietet uns die Möglichkeit, Fachkräfte einzusetzen, die auf 
              <strong className="text-foreground"> Muttersprachniveau Deutsch</strong> und fließend Englisch sprechen – 
              mit einer Arbeitsmoral, die sich an der deutschen Verlässlichkeit von früher orientiert.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 lg:p-12 animate-scale-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Unsere <span className="text-primary">Mission</span>
              </h3>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Wir helfen Unternehmen, die besten Mitarbeiter für zentrale, aber unbeliebte Positionen zu gewinnen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Während in der DACH-Region Jobhopper und steigende Gehaltsforderungen für Unsicherheit sorgen, 
                setzen wir auf <strong className="text-accent">Stabilität, Loyalität und Qualität</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Unser <span className="text-accent">Team</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Erfahrene Experten mit langjähriger Branchenerfahrung
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {team.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card key={index} className="overflow-hidden hover-lift group border-0 shadow-card animate-fade-in-up stagger-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform animate-rotate-in">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-accent font-medium mb-2 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {member.description}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3">Expertise:</p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs hover-float stagger-animation animate-bounce-in" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Unsere <span className="text-success">Werte</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Prinzipien, die unsere Arbeit und Partnerschaften prägen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 hover-lift group animate-fade-in-up stagger-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform animate-bounce-in">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-success transition-colors text-sm sm:text-base">
                          {value.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;