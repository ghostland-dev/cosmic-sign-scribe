
import { useState } from "react";
import { ZodiacSelector } from "@/components/ZodiacSelector";
import { HoroscopeDisplay } from "@/components/HoroscopeDisplay";
import { Header } from "@/components/Header";
import { ZodiacSign } from "@/types/zodiac";

const Index = () => {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-100 transition-colors duration-300">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {!selectedSign ? (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  ✨ Horoscope Mystique ✨
                </h1>
                <p className="text-xl text-purple-200 dark:text-gray-300 max-w-2xl mx-auto">
                  Découvrez ce que les étoiles vous réservent aujourd'hui. 
                  Sélectionnez votre signe zodiacal pour révéler votre destinée.
                </p>
              </div>
              
              <ZodiacSelector onSignSelect={setSelectedSign} />
            </div>
          ) : (
            <div className="animate-fade-in">
              <HoroscopeDisplay 
                sign={selectedSign} 
                onBack={() => setSelectedSign(null)} 
              />
            </div>
          )}
        </main>
      </div>
      
      {/* Étoiles animées en arrière-plan */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white dark:bg-gray-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
