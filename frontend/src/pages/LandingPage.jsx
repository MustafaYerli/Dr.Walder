import React from 'react';
import { Phone, MapPin, Clock, ChevronRight, Stethoscope, Heart, Activity, Shield, Bone, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const LandingPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Bone,
      title: 'Gelenkschmerzen',
      description: 'Behandlung von Knie-, Hüft-, Schulter- und Sprunggelenksbeschwerden'
    },
    {
      icon: Activity,
      title: 'Wirbelsäule',
      description: 'Diagnostik und Therapie bei Rückenschmerzen und Bandscheibenproblemen'
    },
    {
      icon: Heart,
      title: 'Sportverletzungen',
      description: 'Expertise in der Behandlung von akuten und chronischen Sportverletzungen'
    },
    {
      icon: Shield,
      title: 'Arthrose-Therapie',
      description: 'Konservative und moderne Behandlungsmethoden bei Gelenkverschleiß'
    },
    {
      icon: Stethoscope,
      title: 'Nachbehandlung',
      description: 'Professionelle postoperative Betreuung und Rehabilitation'
    },
    {
      icon: Users,
      title: 'Individuelle Beratung',
      description: 'Umfassende Diagnostik und persönliche Behandlungskonzepte'
    }
  ];

  const openingHours = [
    { day: 'Montag', hours: '09:00 - 16:30' },
    { day: 'Dienstag', hours: 'Geschlossen' },
    { day: 'Mittwoch', hours: '14:00 - 18:00' },
    { day: 'Donnerstag', hours: '09:00 - 16:30' },
    { day: 'Freitag', hours: 'Geschlossen' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary">Dr. Ewald Walder</h1>
              <p className="text-sm text-gray-600">Orthopäde & Unfallchirurg</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:012141431" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">01 / 214 14 31</span>
              </a>
              <Button onClick={() => scrollToSection('termin')} className="bg-primary hover:bg-primary/90">
                Termin buchen
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Wahlarzt in Wien
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
                OA Dr. Ewald Walder
              </h2>
              <p className="text-xl text-gray-600">
                Facharzt für Orthopädie und Unfallchirurgie
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professionelle medizinische Versorgung mit Fokus auf individuelle Behandlungskonzepte und moderne Therapiemethoden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('termin')} 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white group"
                >
                  Termin online buchen
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('kontakt')} 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Kontakt & Anfahrt
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-gray-500 font-medium">Foto Platzhalter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">Über Dr. Walder</h3>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p className="text-center text-xl">
              Mit langjähriger Erfahrung in der Orthopädie und Unfallchirurgie biete ich meinen Patienten eine umfassende und moderne medizinische Versorgung.
            </p>
            <p className="text-center text-lg">
              Meine Behandlungsphilosophie basiert auf einer gründlichen Diagnostik, individuellen Therapiekonzepten und dem Einsatz bewährter sowie innovativer Behandlungsmethoden. Als Wahlarzt nehme ich mir die Zeit, die für eine qualitativ hochwertige medizinische Betreuung notwendig ist.
            </p>
            <p className="text-center text-lg">
              In meiner Ordination in Wien steht Ihr Wohlbefinden im Mittelpunkt – von der ersten Konsultation bis zur erfolgreichen Genesung.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">Leistungsspektrum</h3>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Umfassende orthopädische und unfallchirurgische Behandlungen für Ihre Gesundheit
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="termin" className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-serif font-bold mb-6">Termin vereinbaren</h3>
          <p className="text-xl mb-10 text-white/90">
            Buchen Sie Ihren Termin ganz einfach online oder kontaktieren Sie uns telefonisch.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-8">
            <Stethoscope className="w-20 h-20 mx-auto mb-6 text-white/80" />
            <p className="text-lg text-white/90 mb-8">
              Online-Terminbuchungssystem wird hier integriert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                Terminbuchung (in Kürze)
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = 'tel:012141431'}
              >
                <Phone className="mr-2 w-5 h-5" />
                Telefonisch buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">Kontakt & Anfahrt</h3>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Adresse</h4>
                      <p className="text-gray-600">Praterstraße 66/1/69b</p>
                      <p className="text-gray-600">1020 Wien</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Telefon</h4>
                      <a href="tel:012141431" className="text-primary hover:underline text-lg font-medium">
                        01 / 214 14 31
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Ordinationszeiten</h4>
                      <div className="space-y-2">
                        {openingHours.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                            <span className="text-gray-700 font-medium">{item.day}</span>
                            <span className={item.hours === 'Geschlossen' ? 'text-gray-400' : 'text-gray-900 font-medium'}>
                              {item.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-0 h-full min-h-[500px]">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-20 h-20 mx-auto mb-4 text-primary/50" />
                      <p className="text-gray-500 font-medium mb-4">Google Maps wird hier eingebettet</p>
                      <Button 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/5"
                        onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Praterstraße+66/1/69b,+1020+Wien', '_blank')}
                      >
                        In Google Maps öffnen
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-serif font-bold mb-4">OA Dr. Ewald Walder</h4>
              <p className="text-gray-400 mb-2">Facharzt für Orthopädie und Unfallchirurgie</p>
              <p className="text-gray-400">Wahlarzt in Wien</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Kontakt</h5>
              <div className="space-y-2 text-gray-400">
                <p>Praterstraße 66/1/69b</p>
                <p>1020 Wien</p>
                <a href="tel:012141431" className="text-accent hover:text-accent/80 transition-colors">
                  Tel: 01 / 214 14 31
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4">Rechtliches</h5>
              <div className="space-y-2">
                <a href="#impressum" className="block text-gray-400 hover:text-white transition-colors">
                  Impressum
                </a>
                <a href="#datenschutz" className="block text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </a>
              </div>
              <Button 
                onClick={() => scrollToSection('termin')} 
                className="bg-accent hover:bg-accent/90 mt-6"
              >
                Termin buchen
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Dr. Ewald Walder. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;