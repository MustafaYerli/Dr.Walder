import React, { useEffect, useRef, useState } from 'react';
import { Phone, MapPin, Clock, ChevronRight, Stethoscope, Heart, Activity, Shield, Bone, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/20">
      {/* Glassmorphism Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg' 
            : 'bg-white/60 backdrop-blur-sm shadow-sm'
        }`}
      >
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
              <Button 
                onClick={() => scrollToSection('termin')} 
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                Termin buchen
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Floating decoration elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/5 to-blue-50 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-section">
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 text-accent rounded-full text-sm font-semibold shadow-sm">
                Wahlarzt in Wien
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
                OA Dr. Ewald Walder
              </h2>
              <p className="text-2xl text-gray-700 font-medium">
                Facharzt für Orthopädie und Unfallchirurgie
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professionelle medizinische Versorgung mit Fokus auf individuelle Behandlungskonzepte und moderne Therapiemethoden.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <Button 
                  onClick={() => scrollToSection('termin')} 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white group shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  Termin online buchen
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('kontakt')} 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  Kontakt & Anfahrt
                </Button>
              </div>
            </div>
            <div className="relative fade-in-section" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-[4/5] bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Stethoscope className="w-20 h-20 text-primary" />
                  </div>
                  <p className="text-gray-500 font-medium text-lg">Foto Platzhalter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Glassmorphism */}
      <section id="ueber" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-white/60 rounded-3xl border border-white/80 shadow-2xl p-12 fade-in-section">
            <div className="text-center mb-12">
              <h3 className="text-5xl font-serif font-bold text-gray-900 mb-4">Über Dr. Walder</h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
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
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="leistungen" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-section">
            <h3 className="text-5xl font-serif font-bold text-gray-900 mb-4">Leistungsspektrum</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Umfassende orthopädische und unfallchirurgische Behandlungen für Ihre Gesundheit
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="fade-in-section"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <Card className="border-0 bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 h-full group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Appointment Section */}
      <section id="termin" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in-section">
          <h3 className="text-5xl font-serif font-bold mb-8 text-white">Termin vereinbaren</h3>
          <p className="text-2xl mb-12 text-white/95">
            Buchen Sie Ihren Termin ganz einfach online oder kontaktieren Sie uns telefonisch.
          </p>
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/30 p-12 mb-8 shadow-2xl hover:bg-white/20 transition-all duration-300">
            <Stethoscope className="w-24 h-24 mx-auto mb-8 text-white/90" />
            <p className="text-xl text-white/95 mb-10">
              Online-Terminbuchungssystem wird hier integriert
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                Terminbuchung (in Kürze)
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:012141431'}
              >
                <Phone className="mr-2 w-6 h-6" />
                Telefonisch buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="kontakt" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-section">
            <h3 className="text-5xl font-serif font-bold text-gray-900 mb-4">Kontakt & Anfahrt</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-0 bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-section">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Adresse</h4>
                      <p className="text-gray-600 text-lg">Praterstraße 66/1/69b</p>
                      <p className="text-gray-600 text-lg">1020 Wien</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-section" style={{animationDelay: '0.1s'}}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Telefon</h4>
                      <a href="tel:012141431" className="text-primary hover:text-primary/80 hover:underline text-xl font-semibold transition-colors">
                        01 / 214 14 31
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 fade-in-section" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-5">Ordinationszeiten</h4>
                      <div className="space-y-3">
                        {openingHours.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200/50 last:border-0">
                            <span className="text-gray-700 font-semibold text-lg">{item.day}</span>
                            <span className={item.hours === 'Geschlossen' ? 'text-gray-400 text-lg' : 'text-gray-900 font-semibold text-lg'}>
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

            <div className="fade-in-section" style={{animationDelay: '0.3s'}}>
              <Card className="border-0 bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-0 h-full min-h-[600px]">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 via-accent/5 to-blue-50/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="text-center p-8 relative z-10">
                      <MapPin className="w-24 h-24 mx-auto mb-6 text-primary/70" />
                      <p className="text-gray-600 font-semibold mb-6 text-lg">Google Maps wird hier eingebettet</p>
                      <Button 
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary/5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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

      {/* Premium Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-4">OA Dr. Ewald Walder</h4>
              <p className="text-gray-400 mb-2 text-lg">Facharzt für Orthopädie und Unfallchirurgie</p>
              <p className="text-gray-400 text-lg">Wahlarzt in Wien</p>
            </div>
            <div>
              <h5 className="font-bold mb-5 text-lg">Kontakt</h5>
              <div className="space-y-3 text-gray-400">
                <p className="text-lg">Praterstraße 66/1/69b</p>
                <p className="text-lg">1020 Wien</p>
                <a href="tel:012141431" className="text-accent hover:text-accent/80 transition-colors block text-lg font-semibold">
                  Tel: 01 / 214 14 31
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-5 text-lg">Rechtliches</h5>
              <div className="space-y-3">
                <a href="#impressum" className="block text-gray-400 hover:text-white transition-colors text-lg">
                  Impressum
                </a>
                <a href="#datenschutz" className="block text-gray-400 hover:text-white transition-colors text-lg">
                  Datenschutz
                </a>
              </div>
              <Button 
                onClick={() => scrollToSection('termin')} 
                className="bg-accent hover:bg-accent/90 mt-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Termin buchen
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-lg">© {new Date().getFullYear()} Dr. Ewald Walder. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;