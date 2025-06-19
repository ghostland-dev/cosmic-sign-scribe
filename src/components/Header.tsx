
import { Calendar, Star } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="py-6 border-b border-white/10 dark:border-gray-700/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Star className="w-8 h-8 text-yellow-300" />
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Horoscope Mystique
              </h2>
              <p className="text-purple-200 dark:text-gray-400 text-sm">Votre guide spirituel quotidien</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-purple-200 dark:text-gray-400">
              <Calendar className="w-5 h-5" />
              <span className="text-sm capitalize">{currentDate}</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
