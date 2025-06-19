
import { zodiacSigns } from "@/data/zodiacSigns";
import { ZodiacSign } from "@/types/zodiac";
import { Card } from "@/components/ui/card";

interface ZodiacSelectorProps {
  onSignSelect: (sign: ZodiacSign) => void;
}

export const ZodiacSelector = ({ onSignSelect }: ZodiacSelectorProps) => {
  const elementColors = {
    Feu: "from-red-500/20 to-orange-500/20 border-red-500/30 dark:from-red-600/30 dark:to-orange-600/30 dark:border-red-400/40",
    Terre: "from-green-500/20 to-emerald-500/20 border-green-500/30 dark:from-green-600/30 dark:to-emerald-600/30 dark:border-green-400/40", 
    Air: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 dark:from-blue-600/30 dark:to-cyan-600/30 dark:border-blue-400/40",
    Eau: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 dark:from-purple-600/30 dark:to-indigo-600/30 dark:border-purple-400/40"
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
              dark:bg-gradient-to-br dark:backdrop-blur-md
              hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-500/20
            `}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onSignSelect(sign)}
          >
            <div className="space-y-4">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {sign.emoji}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-1 flex items-center justify-center gap-2">
                  {sign.name} <span className="text-2xl">{sign.symbol}</span>
                </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400 mb-2">{sign.dates}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">Élément: {sign.element}</p>
              </div>
              
              <div className="pt-2 border-t border-white/10 dark:border-gray-600/50">
                <p className="text-xs text-gray-300 dark:text-gray-400">
                  Planète: {sign.planet}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-purple-200 dark:text-gray-300 text-lg">
          ✨ Cliquez sur votre signe pour découvrir votre horoscope du jour ✨
        </p>
      </div>
    </div>
  );
};
