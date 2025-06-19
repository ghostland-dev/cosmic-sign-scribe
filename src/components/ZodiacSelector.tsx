
import { zodiacSigns } from "@/data/zodiacSigns";
import { ZodiacSign } from "@/types/zodiac";
import { Card } from "@/components/ui/card";

interface ZodiacSelectorProps {
  onSignSelect: (sign: ZodiacSign) => void;
}

export const ZodiacSelector = ({ onSignSelect }: ZodiacSelectorProps) => {
  const elementColors = {
    Feu: "from-red-500/20 to-orange-500/20 border-red-500/30",
    Terre: "from-green-500/20 to-emerald-500/20 border-green-500/30", 
    Air: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    Eau: "from-purple-500/20 to-indigo-500/20 border-purple-500/30"
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {zodiacSigns.map((sign, index) => (
          <Card
            key={sign.name}
            className={`
              group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl
              bg-gradient-to-br ${elementColors[sign.element]} 
              backdrop-blur-sm border-2 p-6 text-center
              animate-fade-in hover-scale
            `}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onSignSelect(sign)}
          >
            <div className="space-y-4">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {sign.emoji}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                  {sign.name} <span className="text-2xl">{sign.symbol}</span>
                </h3>
                <p className="text-sm text-gray-300 mb-2">{sign.dates}</p>
                <p className="text-xs text-gray-400">Élément: {sign.element}</p>
              </div>
              
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-gray-300">
                  Planète: {sign.planet}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-purple-200 text-lg">
          ✨ Cliquez sur votre signe pour découvrir votre horoscope du jour ✨
        </p>
      </div>
    </div>
  );
};
