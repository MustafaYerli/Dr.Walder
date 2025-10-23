import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle, FileText, Award, Users, Heart, Activity, Bone, Shield, Stethoscope, ChevronRight, ChevronDown, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const LandingPage = () => {
  const BOOKING_URL = 'https://testdrwalder.setmore.com/book?step=time-slot&products=fb48646b-422b-4f94-ad3b-7b2252a9d866&type=service&staff=ea0beaba-8aa7-4058-b05b-8654cdb1fc9d&staffSelected=true';
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const openBooking = () => {
    window.open(BOOKING_URL, '_blank');
  };

  const benefits = [
    {
      icon: Award,
      title: 'Neueste Methoden',
      description: 'Moderne Behandlungsansätze'
    },
    {
      icon: FileText,
      title: 'Wahlarzt',
      description: 'Flexible Terminvergabe'
    },
    {
      icon: Heart,
      title: 'Individuelle Betreuung',
      description: 'Persönliche Beratung'
    }
  ];

  const services = [
    { icon: Bone, title: 'Gelenkschmerzen', description: 'Behandlung von Knie-, Hüft-, Schulter- und Sprunggelenksbeschwerden' },
    { icon: Activity, title: 'Wirbelsäule', description: 'Diagnostik und Therapie bei Rückenschmerzen und Bandscheibenproblemen' },
    { icon: Heart, title: 'Sportverletzungen', description: 'Expertise in der Behandlung von akuten und chronischen Sportverletzungen' },
    { icon: Shield, title: 'Arthrose-Therapie', description: 'Konservative und moderne Behandlungsmethoden bei Gelenkverschleiß' },
    { icon: Stethoscope, title: 'Nachbehandlung', description: 'Professionelle postoperative Betreuung und Rehabilitation' },
    { icon: Users, title: 'Prävention', description: 'Vorbeugende Maßnahmen und Gesundheitsberatung' }
  ];

  const faqs = [
    {
      question: 'Wie kann ich einen Termin vereinbaren?',
      answer: 'Sie können telefonisch unter 01 / 214 14 31 einen Termin vereinbaren oder das Kontaktformular auf dieser Website nutzen.'
    },
    {
      question: 'Werden die Kosten von der Krankenkasse übernommen?',
      answer: 'Als Wahlarzt rechne ich privat ab. Sie erhalten eine detaillierte Honorarnote, die Sie bei Ihrer Krankenkasse zur Rückerstattung einreichen können. Die Rückerstattung erfolgt nach dem jeweiligen Tarif Ihrer Versicherung.'
    },
    {
      question: 'Welche Unterlagen soll ich zum Termin mitbringen?',
      answer: 'Bitte bringen Sie relevante Vorbefunde, Röntgenbilder, MRT-Aufnahmen und eine Liste Ihrer aktuellen Medikamente mit.'
    },
    {
      question: 'Wie lange dauert eine Erstuntersuchung?',
      answer: 'Für eine ausführliche Erstuntersuchung sollten Sie etwa 30-45 Minuten einplanen.'
    }
  ];

  const advantages = [
    'Kurze Wartezeiten',
    'Ausführliche Beratung',
    'Modernste Ausstattung',
    'Zentrale Lage in Wien'
  ];

  const openingHours = [
    { day: 'Montag', hours: '09:00 - 16:30' },
    { day: 'Dienstag', hours: 'Geschlossen' },
    { day: 'Mittwoch', hours: '14:00 - 18:00' },
    { day: 'Donnerstag', hours: '09:00 - 16:30' },
    { day: 'Freitag', hours: 'Geschlossen' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dr. Ewald Walder</h1>
              <p className="text-sm text-gray-600">Orthopäde & Unfallchirurg</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:012141431" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-teal-700 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">01 / 214 14 31</span>
              </a>
              <Button 
                onClick={openBooking} 
                className="bg-[#1E3A5F] hover:bg-[#1E3A5F]/90"
              >
                Termin
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Spezialist für Orthopädie und Unfallchirurgie in Wien
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-4">
                  OA Dr. Ewald Walder - Wahlarzt
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professionelle medizinische Versorgung mit Fokus auf individuelle Behandlungskonzepte und moderne Therapiemethoden. Ihre Gesundheit steht im Mittelpunkt meiner Tätigkeit.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-amber-100 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-amber-600" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-xs text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('termin')} 
                  size="lg"
                  className="bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-lg"
                >
                  Termin vereinbaren
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="inline-block px-3 py-1 bg-gray-200 rounded-full">Keine Kassen</span>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-xl">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                    <Stethoscope className="w-16 h-16 text-[#1E3A5F]" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                    <Users className="w-12 h-12 text-[#1E3A5F]" />
                  </div>
                  <p className="text-gray-500 font-medium">Praxis Foto</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                Arzt mit langjähriger Erfahrung
              </h3>
              <div className="w-16 h-1 bg-teal-600"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mit langjähriger Erfahrung in der Orthopädie und Unfallchirurgie biete ich meinen Patienten eine umfassende und moderne medizinische Versorgung.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meine Behandlungsphilosophie basiert auf einer gründlichen Diagnostik, individuellen Therapiekonzepten und dem Einsatz bewährter sowie innovativer Behandlungsmethoden. Als Wahlarzt nehme ich mir die Zeit, die für eine qualitativ hochwertige medizinische Betreuung notwendig ist.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In meiner Ordination in Wien steht Ihr Wohlbefinden im Mittelpunkt – von der ersten Konsultation bis zur erfolgreichen Genesung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Leistungen</h3>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mein Leistungsspektrum umfasst die gesamte konservative Orthopädie und Unfallchirurgie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">FAQ - Häufig gestellte Fragen</h3>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-teal-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Transparent Fees Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Transparente Honorare</h3>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-8"></div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Wahlarzt-Honorar</h4>
                    <p className="text-gray-600">
                      Als Wahlarzt rechne ich nach der ÖÄK-Honorarordnung ab. Sie erhalten eine detaillierte Rechnung, die Sie bei Ihrer Krankenkasse zur Rückerstattung einreichen können.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Rückerstattung</h4>
                    <p className="text-gray-600">
                      Die Rückerstattung durch Ihre Krankenkasse beträgt je nach Versicherung ca. 80% des Kassentarifs. Privatzusatzversicherungen übernehmen häufig einen Großteil der Kosten.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Transparenz</h4>
                    <p className="text-gray-600">
                      Auf Wunsch informiere ich Sie gerne vor der Behandlung über die voraussichtlichen Kosten.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Wir helfen Ihnen schnell weiter</h3>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-lg font-semibold text-gray-900">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="termin" className="py-20 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Termin vereinbaren</h3>
            <p className="text-xl text-white/90">
              Kontaktieren Sie uns für einen Termin
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vorname und Nachname *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    placeholder="max@example.com"
                  />
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="+43 123 456789"
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ihre Nachricht
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                ></textarea>
              </div>
              <Button 
                size="lg"
                className="w-full bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                NACHRICHT SENDEN
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4">
                * Pflichtfelder
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Kontakt & Anfahrt</h3>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
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
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Telefon</h4>
                      <a href="tel:012141431" className="text-[#1E3A5F] hover:underline text-lg font-semibold">
                        01 / 214 14 31
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Ordinationszeiten</h4>
                      <div className="space-y-2">
                        {openingHours.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                            <span className="text-gray-700 font-medium">{item.day}</span>
                            <span className={item.hours === 'Geschlossen' ? 'text-gray-400' : 'text-gray-900 font-semibold'}>
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
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-20 h-20 mx-auto mb-4 text-[#1E3A5F]/50" />
                      <p className="text-gray-500 font-medium mb-4">Google Maps wird hier eingebettet</p>
                      <Button 
                        variant="outline"
                        className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F]/5"
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
      <footer className="bg-[#1E3A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">OA Dr. Ewald Walder</h4>
              <p className="text-white/80 mb-2">Facharzt für Orthopädie und Unfallchirurgie</p>
              <p className="text-white/80">Wahlarzt in Wien</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Kontakt</h5>
              <div className="space-y-2 text-white/80">
                <p>Praterstraße 66/1/69b</p>
                <p>1020 Wien</p>
                <a href="tel:012141431" className="text-teal-400 hover:text-teal-300 transition-colors block">
                  Tel: 01 / 214 14 31
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4">Rechtliches</h5>
              <div className="space-y-2">
                <a href="#impressum" className="block text-white/80 hover:text-white transition-colors">
                  Impressum
                </a>
                <a href="#datenschutz" className="block text-white/80 hover:text-white transition-colors">
                  Datenschutz
                </a>
                <a href="#genderhinweis" className="block text-white/80 hover:text-white transition-colors">
                  Genderhinweis
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© {new Date().getFullYear()} Dr. Ewald Walder. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;