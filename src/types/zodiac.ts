
export interface ZodiacSign {
  name: string;
  symbol: string;
  emoji: string;
  dates: string;
  element: 'Feu' | 'Terre' | 'Air' | 'Eau';
  planet: string;
  traits: string[];
  colors: string[];
  description: string;
}

export interface Horoscope {
  general: string;
  love: string;
  career: string;
  health: string;
  lucky: {
    numbers: number[];
    color: string;
  };
}
