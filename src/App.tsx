import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Sparkles,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { Waves } from './components/ui/waves';
import { Footerdemo } from './components/ui/footer-section';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Ccircle cx='4' cy='4' r='4' fill='%232563eb'/%3E%3C/svg%3E") 4 4, auto !important;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none">
        <Waves
          lineColor="rgba(59, 130, 246, 0.1)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={30}
          waveAmpY={15}
          friction={0.9}
          tension={0.01}
          maxCursorMove={100}
          xGap={10}
          yGap={28}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-3 py-4 md:py-6 mb-6 md:mb-8">
          <div className="flex items-center">
            <div className="flex items-center gap-2 ml-3 md:ml-6">
              <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-[#1e40af]" />
              <span className="text-xl md:text-2xl font-bold text-[#2563eb] font-logo">
                Studiepad
              </span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-3 py-6 md:py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
                Slimmer{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Studeren
                </span>{' '}
                met AI: Jouw Persoonlijke Leerroute
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed px-3 md:px-0">
                Schoolstress? Laat onze AI-planner het werk doen! Upload je
                taken en krijg een perfecte planning!
              </p>

              {/* Email Signup */}
              <div className="max-w-lg mx-auto mb-8 md:mb-12 px-3 md:px-0">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Jouw email adres"
                    className="flex-1 px-3 md:px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-input focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm shadow-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="group px-3 md:px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg text-sm min-w-[160px] flex items-center justify-center gap-2"
                  >
                    Houd mij op de hoogte
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                {submitted && (
                  <p className="mt-2 text-primary font-medium animate-fade-in text-sm">
                    Bedankt! We laten je weten wanneer we lanceren.
                  </p>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-24">
              {[
                {
                  icon: <Calendar className="w-5 h-5 text-primary" />,
                  title: 'Slimme Planning',
                  description:
                    'AI maakt een gepersonaliseerd studieschema op basis van jouw schoolvakken en deadlines',
                },
                {
                  icon: <Clock className="w-5 h-5 text-primary" />,
                  title: 'Efficiënt Leren',
                  description:
                    'Optimale verdeling van je studietijd voor betere cijfers op school',
                },
                {
                  icon: <Sparkles className="w-5 h-5 text-primary" />,
                  title: 'AI Ondersteuning',
                  description:
                    'Persoonlijke tips voor een effectieve studiestrategie op de middelbare school',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-background/80 backdrop-blur-sm p-4 rounded-lg border-2 border-primary/10 transition-all duration-500 transform hover:-translate-y-1 animate-float animate-border-glow hover:border-primary/30"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationDuration: `${4 + index * 0.5}s`,
                  }}
                >
                  <div className="bg-primary/10 p-1.5 rounded-md inline-block mb-3 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footerdemo />
      </div>
    </div>
  );
}

export default App;