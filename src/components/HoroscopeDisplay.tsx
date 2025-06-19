
import { ArrowLeft, Heart, Briefcase, Activity, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ZodiacSign } from "@/types/zodiac";
import { generateHoroscope } from "@/data/horoscopes";

interface HoroscopeDisplayProps {
  sign: ZodiacSign;
  onBack: () => void;
}

export const HoroscopeDisplay = ({ sign, onBack }: HoroscopeDisplayProps) => {
  const horoscope = generateHoroscope(sign.name);
  
  const elementColors = {
    Feu: "from-red-500 to-orange-500",
    Terre: "from-green-500 to-emerald-500", 
    Air: "from-blue-500 to-cyan-500",
    Eau: "from-purple-500 to-indigo-500"
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Button 
        onClick={onBack}
        variant="outline"
        className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux signes
      </Button>

      {/* En-tête du signe */}
      <Card className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-white/20 p-8 text-center">
        <div className="space-y-4">
          <div className="text-6xl mb-4">{sign.emoji}</div>
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            {sign.name} <span className="text-5xl">{sign.symbol}</span>
          </h1>
          <p className="text-xl text-purple-200">{sign.dates}</p>
          
          <div className="flex justify-center items-center gap-8 mt-6">
            <div className="text-center">
              <p className="text-sm text-gray-300">Élément</p>
              <p className={`text-lg font-semibold bg-gradient-to-r ${elementColors[sign.element]} bg-clip-text text-transparent`}>
                {sign.element}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-300">Planète</p>
              <p className="text-lg font-semibold text-yellow-300">{sign.planet}</p>
            </div>
          </div>
          
          <p className="text-purple-100 max-w-2xl mx-auto leading-relaxed">
            {sign.description}
          </p>
        </div>
      </Card>

      {/* Traits de personnalité */}
      <Card className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-white/20 p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-300" />
          Traits de personnalité
        </h2>
        <div className="flex flex-wrap gap-3">
          {sign.traits.map((trait, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 
                         border border-purple-400/50 rounded-full text-white text-sm
                         hover:scale-105 transition-transform duration-200"
            >
              {trait}
            </span>
          ))}
        </div>
      </Card>

      {/* Horoscope du jour */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Général */}
        <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md border-indigo-400/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-300" />
            Général
          </h3>
          <p className="text-purple-100 leading-relaxed">{horoscope.general}</p>
        </Card>

        {/* Amour */}
        <Card className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-md border-pink-400/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-300" />
            Amour
          </h3>
          <p className="text-pink-100 leading-relaxed">{horoscope.love}</p>
        </Card>

        {/* Carrière */}
        <Card className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md border-emerald-400/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-300" />
            Carrière
          </h3>
          <p className="text-emerald-100 leading-relaxed">{horoscope.career}</p>
        </Card>

        {/* Santé */}
        <Card className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-md border-orange-400/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-300" />
            Santé
          </h3>
          <p className="text-orange-100 leading-relaxed">{horoscope.health}</p>
        </Card>
      </div>

      {/* Éléments de chance */}
      <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border-yellow-400/30 p-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-300" />
          Vos atouts chanceux aujourd'hui
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-300 mb-3">Nombres porte-bonheur</h3>
            <div className="flex justify-center gap-4">
              {horoscope.lucky.numbers.map((num, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 
                           rounded-full flex items-center justify-center text-white font-bold text-lg
                           shadow-lg hover:scale-110 transition-transform duration-200"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-yellow-300 mb-3">Couleur du jour</h3>
            <div className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-400 
                          bg-clip-text text-transparent">
              {horoscope.lucky.color}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
