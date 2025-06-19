
import { Horoscope } from "@/types/zodiac";

const generateHoroscope = (signName: string): Horoscope => {
  const horoscopes: Record<string, Horoscope> = {
    "Bélier": {
      general: "Votre énergie martienne vous pousse vers de nouveaux défis aujourd'hui. Une opportunité inattendue pourrait se présenter en fin de journée. Restez ouvert aux changements.",
      love: "Vénus illumine votre secteur relationnel. Les célibataires pourraient faire une rencontre marquante, tandis que les couples redécouvriront leur passion.",
      career: "Mars active votre ambition professionnelle. C'est le moment idéal pour présenter vos idées audacieuses. Votre leadership naturel sera reconnu.",
      health: "Votre vitalité est au plus haut, mais attention à ne pas brûler la chandelle par les deux bouts. Privilégiez les activités sportives modérées.",
      lucky: { numbers: [3, 12, 21], color: "Rouge rubis" }
    },
    "Taureau": {
      general: "La stabilité que vous recherchez se dessine à l'horizon. Vos efforts passés commencent à porter leurs fruits. Patience et persévérance seront récompensées.",
      love: "Vénus, votre planète maîtresse, favorise les plaisirs sensoriels. Planifiez un dîner romantique ou une soirée cocooning avec votre partenaire.",
      career: "Votre approche méthodique impressionne vos collègues. Un projet à long terme prend forme. Évitez les décisions hâtives.",
      health: "Votre corps réclame du repos et de la détente. Accordez-vous un massage ou une séance de méditation pour recharger vos batteries.",
      lucky: { numbers: [6, 15, 24], color: "Vert émeraude" }
    },
    "Gémeaux": {
      general: "Mercure stimule votre curiosité intellectuelle. Les échanges et communications seront particulièrement fructueux aujourd'hui. Restez à l'écoute des signes.",
      love: "Votre charme naturel et votre esprit vif séduiront. Les conversations profondes renforceront vos liens amoureux. Exprimez vos sentiments.",
      career: "Vos talents de communication brillent. Une présentation ou négociation pourrait vous ouvrir de nouvelles portes. Faites confiance à votre instinct.",
      health: "Votre système nerveux est en alerte. Pratiquez des exercices de respiration et évitez la surcharge d'informations.",
      lucky: { numbers: [5, 14, 23], color: "Jaune solaire" }
    },
    "Cancer": {
      general: "La Lune influence fortement vos émotions aujourd'hui. Écoutez votre intuition, elle vous guidera vers les bonnes décisions. La famille joue un rôle important.",
      love: "Votre sensibilité touche le cœur de votre partenaire. C'est le moment de partager vos rêves les plus intimes. L'émotion sincère prime sur tout.",
      career: "Votre empathie naturelle vous aide à résoudre les conflits au travail. Votre équipe apprécie votre approche bienveillante.",
      health: "Vos émotions impactent votre bien-être physique. Privilégiez les environnements apaisants et entourez-vous de personnes positives.",
      lucky: { numbers: [2, 11, 29], color: "Blanc nacré" }
    },
    "Lion": {
      general: "Le Soleil vous donne une aura magnétique exceptionnelle. Votre créativité est à son apogée. C'est le moment de briller et de montrer vos talents uniques.",
      love: "Votre générosité et votre chaleur attirent l'admiration. Les gestes romantiques grandioses seront particulièrement appréciés aujourd'hui.",
      career: "Votre leadership naturel est reconnu. Une promotion ou une opportunité d'encadrement pourrait se présenter. Assumez votre pouvoir avec noblesse.",
      health: "Votre vitalité rayonnante demande à être canalisée. Les activités créatives et artistiques nourriront votre âme autant que votre corps.",
      lucky: { numbers: [1, 19, 28], color: "Or solaire" }
    },
    "Vierge": {
      general: "Mercure affine votre sens du détail et votre capacité d'analyse. Une situation complexe trouvera sa solution grâce à votre approche méthodique.",
      love: "Votre attention aux petits détails touche profondément votre partenaire. Montrez votre affection par des gestes concrets et attentionnés.",
      career: "Votre perfectionnisme paie. Un travail minutieux sera remarqué et apprécié. L'excellence technique vous distingue de vos pairs.",
      health: "Votre hygiène de vie irréprochable vous maintient en forme. Continuez vos bonnes habitudes alimentaires et sportives.",
      lucky: { numbers: [8, 17, 26], color: "Beige doré" }
    },
    "Balance": {
      general: "Vénus harmonise votre environnement et vos relations. Votre quête d'équilibre vous mène vers des solutions élégantes. La diplomatie est votre atout.",
      love: "L'harmonie règne dans votre vie sentimentale. Votre sens esthétique et votre raffinement créent une atmosphère romantique parfaite.",
      career: "Votre talent pour la médiation résout les tensions. Votre approche équilibrée dans les négociations impressionne favorablement.",
      health: "L'équilibre entre travail et détente est essentiel. Privilégiez les activités qui harmonisent corps et esprit comme le yoga.",
      lucky: { numbers: [7, 16, 25], color: "Rose poudré" }
    },
    "Scorpion": {
      general: "Pluton intensifie vos perceptions et révèle des vérités cachées. Votre intuition est particulièrement aiguisée. Faites confiance à vos pressentiments.",
      love: "La passion brûle en vous avec une intensité magnétique. Vos relations prennent une dimension profonde et transformatrice.",
      career: "Votre capacité à voir au-delà des apparences vous donne un avantage stratégique. Les investigations approfondies portent leurs fruits.",
      health: "Votre résistance physique et mentale est remarquable. Canalisez votre énergie intense dans des activités qui vous passionnent.",
      lucky: { numbers: [9, 18, 27], color: "Rouge bordeaux" }
    },
    "Sagittaire": {
      general: "Jupiter élargit vos horizons et stimule votre soif d'aventure. Un voyage ou une formation pourrait changer votre perspective sur la vie.",
      love: "Votre optimisme contagieux attire l'amour dans votre vie. Les relations à distance ou avec des personnes d'autres cultures sont favorisées.",
      career: "Vos visions d'avenir inspirent votre entourage professionnel. Un projet international ou éducatif pourrait voir le jour.",
      health: "Le grand air et l'exercice physique en pleine nature vous revitalisent. Planifiez une escapade sportive ou une randonnée.",
      lucky: { numbers: [4, 13, 22], color: "Violet améthyste" }
    },
    "Capricorne": {
      general: "Saturne récompense votre patience et votre travail acharné. Vos objectifs à long terme se concrétisent progressivement mais sûrement.",
      love: "Votre sérieux dans l'engagement rassure votre partenaire. Les projets de vie commune prennent une tournure concrète et rassurante.",
      career: "Votre expertise et votre fiabilité vous positionnent comme une référence. Une responsabilité importante pourrait vous être confiée.",
      health: "Votre discipline personnelle maintient votre forme physique. Attention cependant à ne pas négliger la détente et le plaisir.",
      lucky: { numbers: [10, 19, 30], color: "Brun chocolat" }
    },
    "Verseau": {
      general: "Uranus stimule votre originalité et votre vision futuriste. Vos idées innovantes trouvent un écho favorable dans votre entourage.",
      love: "Votre indépendance n'empêche pas les liens profonds. Une amitié pourrait évoluer vers quelque chose de plus romantique.",
      career: "Vos concepts avant-gardistes attirent l'attention. Le domaine technologique ou humanitaire vous offre des opportunités inattendues.",
      health: "Votre rythme de vie non-conventionnel vous convient parfaitement. Écoutez vos besoins uniques plutôt que les conseils génériques.",
      lucky: { numbers: [11, 20, 31], color: "Bleu électrique" }
    },
    "Poissons": {
      general: "Neptune éveille votre sensibilité artistique et spirituelle. Votre imagination fertile vous ouvre des portes vers des dimensions inexplorées.",
      love: "Votre empathie naturelle crée des liens émotionnels profonds. L'amour platonique pourrait se transformer en romance passionnée.",
      career: "Votre créativité et votre compassion sont vos meilleurs atouts professionnels. Les domaines artistiques ou caritatifs vous inspirent.",
      health: "Votre sensibilité aux énergies environnantes nécessite des moments de solitude ressourçante. La méditation et l'art-thérapie vous font du bien.",
      lucky: { numbers: [12, 21, 33], color: "Bleu océan" }
    }
  };

  return horoscopes[signName] || horoscopes["Bélier"];
};

export { generateHoroscope };
