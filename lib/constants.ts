export const SPIRIT_IDS = {
  popcornEnthusiast: "popcorn-enthusiast",
  gummyBearDynamo: "gummy-bear-dynamo",
  darkChocolateSeeker: "dark-chocolate-seeker",
  cupcakeCheerleader: "cupcake-cheerleader",
  pretzelWarden: "pretzel-warden",
  fruitTartOracle: "fruit-tart-oracle",
  nachoCommander: "nacho-commander",
  granolaBarGuardian: "granola-bar-guardian",
  marshmallowMystic: "marshmallow-mystic",
  sourCandyTrickster: "sour-candy-trickster",
  riceCrackerSage: "rice-cracker-sage",
  energyBarExplorer: "energy-bar-explorer",
  shortbreadClassic: "shortbread-classic",
  mintBiscuitCoolhead: "mint-biscuit-coolhead",
  gummyOracle: "gummy-oracle",
  trailMixMaverick: "trail-mix-maverick",
  cheesePuffOptimist: "cheese-puff-optimist",
} as const;

export type SpiritId = (typeof SPIRIT_IDS)[keyof typeof SPIRIT_IDS];

export type SpiritWeights = Partial<Record<SpiritId, number>>;

export type QuizOption = {
  id: string;
  text: string;
  weights: SpiritWeights;
};

export type QuizQuestionItem = {
  id: number;
  question: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: { questions: QuizQuestionItem[] } = {
  questions: [
    {
      id: 1,
      question:
        "What's the first thing you notice as you land in this new world?",
      options: [
        {
          id: "a",
          text: "The vibrant colors and dazzling landscapes stretching out before you",
          weights: {
            "fruit-tart-oracle": 2,
            "popcorn-enthusiast": 1,
            "gummy-bear-dynamo": 0.5,
          },
        },
        {
          id: "b",
          text: "The comforting aroma of familiar snacks mingling in the air",
          weights: {
            "granola-bar-guardian": 2,
            "shortbread-classic": 1,
            "marshmallow-mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "The soft, melodic hum that seems to welcome you by name",
          weights: {
            "dark-chocolate-seeker": 2,
            "rice-cracker-sage": 1,
            "mint-biscuit-coolhead": 0.5,
          },
        },
      ],
    },
    {
      id: 2,
      question:
        "As you begin to explore, you come across a path that splits three ways. Which way do you choose?",
      options: [
        {
          id: "a",
          text: "The winding footpath marked with mysterious, swirling patterns",
          weights: {
            "dark-chocolate-seeker": 2,
            "rice-cracker-sage": 1,
            "sour-candy-trickster": 0.5,
          },
        },
        {
          id: "b",
          text: "The glittering trail lined with sparkling candy stones",
          weights: {
            "gummy-bear-dynamo": 2,
            "popcorn-enthusiast": 1,
            "nacho-commander": 0.5,
          },
        },
        {
          id: "c",
          text: "The shady lane under arches of golden-baked bread",
          weights: {
            "granola-bar-guardian": 2,
            "pretzel-warden": 1,
            "shortbread-classic": 0.5,
          },
        },
      ],
    },
    {
      id: 3,
      question: "Soon a river of bubbling soda rushes before you, what do you do?",
      options: [
        {
          id: "a",
          text: "Build a pretzel raft and ride the wild rapids.",
          weights: {
            "trail-mix-maverick": 2,
            "energy-bar-explorer": 1,
            "nacho-commander": 0.5,
          },
        },
        {
          id: "b",
          text: "Wait for a gentle marshmallow ferry to drift by.",
          weights: {
            "marshmallow-mystic": 2,
            "cheese-puff-optimist": 1,
            "cupcake-cheerleader": 0.5,
          },
        },
        {
          id: "c",
          text: "Use floating fruit slices as stepping stones.",
          weights: {
            "fruit-tart-oracle": 2,
            "mint-biscuit-coolhead": 1,
            "dark-chocolate-seeker": 0.5,
          },
        },
      ],
    },
    {
      id: 4,
      question:
        "Once you have reached land, a friendly snack creature approaches and offers you a gift. What do you accept?",
      options: [
        {
          id: "a",
          text: "A shimmering fruit tart that changes color in your hand",
          weights: {
            "fruit-tart-oracle": 2,
            "cupcake-cheerleader": 1,
            "gummy-oracle": 0.5,
          },
        },
        {
          id: "b",
          text: "A pouch of popping corn that bursts with surprises",
          weights: {
            "popcorn-enthusiast": 2,
            "cheese-puff-optimist": 1,
            "granola-bar-guardian": 0.5,
          },
        },
        {
          id: "c",
          text: "A warm, honeyed granola bar that feels like home",
          weights: {
            "granola-bar-guardian": 2,
            "shortbread-classic": 1,
            "pretzel-warden": 0.5,
          },
        },
      ],
    },
    {
      id: 5,
      question:
        "Deep in a forest of gummy trees, a wise candy fox blocks your way. How do you try to earn passage?",
      options: [
        {
          id: "a",
          text: "Spark a conversation or tell a joke to make the fox laugh and open the path.",
          weights: {
            "gummy-bear-dynamo": 2,
            "sour-candy-trickster": 1,
            "nacho-commander": 0.5,
          },
        },
        {
          id: "b",
          text: "Offer the gift you received earlier from the snack creature as a gesture of goodwill.",
          weights: {
            "cupcake-cheerleader": 2,
            "granola-bar-guardian": 1,
            "marshmallow-mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "Suggest a clever plan for the fox to make the most of the gummy harvest.",
          weights: {
            "pretzel-warden": 2,
            "mint-biscuit-coolhead": 1,
            "dark-chocolate-seeker": 0.5,
          },
        },
      ],
    },
    {
      id: 6,
      question:
        "You hear laughter and music ahead—the Fruit Tart Festival is in full swing! Where are you drawn?",
      options: [
        {
          id: "a",
          text: "The science corner, inventing a brand new flavor, wowing the festival crowd.",
          weights: {
            "fruit-tart-oracle": 2,
            "dark-chocolate-seeker": 1,
            "mint-biscuit-coolhead": 0.5,
          },
        },
        {
          id: "b",
          text: "The fruit-stacking contest, aiming for the tallest tower.",
          weights: {
            "nacho-commander": 2,
            "energy-bar-explorer": 1,
            "popcorn-enthusiast": 0.5,
          },
        },
        {
          id: "c",
          text: "The storytelling tent, where old tales are shared.",
          weights: {
            "rice-cracker-sage": 2,
            "marshmallow-mystic": 1,
            "gummy-oracle": 0.5,
          },
        },
        {
          id: "d",
          text: "Judge the best classic tart, savoring each bite.",
          weights: {
            "shortbread-classic": 2,
            "granola-bar-guardian": 1,
            "cheese-puff-optimist": 0.5,
          },
        },
      ],
    },
    {
      id: 7,
      question:
        "Night falls, and the Snacktopia sky glows with swirling lights. What do you do before sleeping?",
      options: [
        {
          id: "a",
          text: "Settle by a campfire and share stories with your new friends from the festival.",
          weights: {
            "cupcake-cheerleader": 2,
            "cheese-puff-optimist": 1,
            "gummy-bear-dynamo": 0.5,
          },
        },
        {
          id: "b",
          text: "Climb a hill to get the best view of the sky.",
          weights: {
            "trail-mix-maverick": 2,
            "popcorn-enthusiast": 1,
            "energy-bar-explorer": 0.5,
          },
        },
        {
          id: "c",
          text: "Wander quietly, letting your thoughts drift with the stars.",
          weights: {
            "dark-chocolate-seeker": 2,
            "rice-cracker-sage": 1,
            "mint-biscuit-coolhead": 0.5,
          },
        },
      ],
    },
    {
      id: 8,
      question:
        "In the morning, you find a riddle carved into a cookie at your doorstep. How do you solve it?",
      options: [
        {
          id: "a",
          text: "Look for hidden clues or a creative twist",
          weights: {
            "dark-chocolate-seeker": 2,
            "fruit-tart-oracle": 1,
            "gummy-oracle": 0.5,
          },
        },
        {
          id: "b",
          text: "Dive in and trust your instincts",
          weights: {
            "trail-mix-maverick": 2,
            "nacho-commander": 1,
            "sour-candy-trickster": 0.5,
          },
        },
        {
          id: "c",
          text: "Work through it step by step, patiently",
          weights: {
            "pretzel-warden": 2,
            "shortbread-classic": 1,
            "granola-bar-guardian": 0.5,
          },
        },
      ],
    },
    {
      id: 9,
      question:
        "As you approach the portal back to your world, the Grand Confectioner appears. Which gift do you hope to receive from him?",
      options: [
        {
          id: "a",
          text: "He offers you a golden ticket—an invitation to endless new adventures.",
          weights: {
            "trail-mix-maverick": 2,
            "energy-bar-explorer": 1,
            "nacho-commander": 0.5,
          },
        },
        {
          id: "b",
          text: "He hands you a basket of timeless, comforting snacks to enjoy forever.",
          weights: {
            "granola-bar-guardian": 2,
            "shortbread-classic": 1,
            "marshmallow-mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "He gives you a magical cookbook, so you can create new treats for all of Snackdom.",
          weights: {
            "fruit-tart-oracle": 2,
            "cupcake-cheerleader": 1,
            "gummy-oracle": 0.5,
          },
        },
      ],
    },
    {
      id: 10,
      question:
        "You step through the swirling portal and find yourself back in your own kitchen, the taste of Snacktopia still lingering in your heart. As you reflect on your journey, what feeling remains with you most?",
      options: [
        {
          id: "a",
          text: "A spark of inspiration to create and share new wonders beyond Snacktopia",
          weights: {
            "fruit-tart-oracle": 2,
            "gummy-oracle": 1,
            "dark-chocolate-seeker": 0.5,
          },
        },
        {
          id: "b",
          text: "A surge of excitement, ready to leap into whatever adventure comes next",
          weights: {
            "trail-mix-maverick": 2,
            "nacho-commander": 1,
            "popcorn-enthusiast": 0.5,
          },
        },
        {
          id: "c",
          text: "A profound gratitude for the connections, lessons, and memories gathered on your quest",
          weights: {
            "granola-bar-guardian": 2,
            "marshmallow-mystic": 1,
            "rice-cracker-sage": 0.5,
          },
        },
      ],
    },
  ],
};

export type SnackSpirit = {
  name: string;
  traits: string;
  tagline: string;
  description: string;
  strengths: string;
  quirks: string;
  bestWith: SpiritId[];
  notSoGoodWith: SpiritId[];
  why: string;
  quote: string;
  emoji: string;
};

export const SNACK_SPIRITS: Record<SpiritId, SnackSpirit> = {
  "popcorn-enthusiast": {
    name: "Popcorn Enthusiast",
    traits: "Adventurous, Social, Wise",
    tagline: "Wise, adventurous, and social.",
    description:
      "Popcorn is a classic, often shared during social gatherings like movie nights. You're the one who brings people together, leads with curiosity, and loves a good adventure—just like popcorn, which pops up in every fun moment.",
    strengths: "Inspiring, sociable, quick to act",
    quirks: "Sometimes distractible or restless",
    bestWith: ["cupcake-cheerleader", "cheese-puff-optimist"],
    notSoGoodWith: ["rice-cracker-sage"],
    why: "You choose options that show leadership, curiosity, or a love for group fun.",
    quote: "Life is better when shared—especially with snacks!",
    emoji: "🍿",
  },
  "gummy-bear-dynamo": {
    name: "Gummy Bear Dynamo",
    traits: "Playful, Energetic, Fun-Loving",
    tagline: "Playful, energetic, and fun-loving.",
    description:
      "Like a bag of gummy bears, you bounce through life, bringing color and laughter wherever you go.",
    strengths: "High-energy, joyful, adaptable",
    quirks: "Sometimes unpredictable or scattered",
    bestWith: ["nacho-commander", "sour-candy-trickster"],
    notSoGoodWith: ["granola-bar-guardian"],
    why: "You pick answers that reflect playfulness, love of games, and a desire to make things fun.",
    quote: "Why walk when you can bounce?",
    emoji: "🐻",
  },
  "dark-chocolate-seeker": {
    name: "Dark Chocolate Seeker",
    traits: "Mysterious, Thoughtful, Deep",
    tagline: "Mysterious, thoughtful, and deep.",
    description:
      "You savor life's complexities, preferring quiet moments and hidden depths—just like dark chocolate, which rewards those who take time to enjoy it.",
    strengths: "Insightful, authentic, introspective",
    quirks: "May seem distant or overthink",
    bestWith: ["mint-biscuit-coolhead", "rice-cracker-sage"],
    notSoGoodWith: ["nacho-commander"],
    why: "You gravitate toward choices that value introspection, mystery, and solving problems quietly.",
    quote:
      "There's always more beneath the surface—if you take the time to savor it.",
    emoji: "🍫",
  },
  "cupcake-cheerleader": {
    name: "Cupcake Cheerleader",
    traits: "Cheerful, Nurturing, Joy-Spreading",
    tagline: "Cheerful, nurturing, and joy-spreading.",
    description:
      "You're sweet and supportive, always ready to celebrate or comfort a friend—like a cupcake handed out on a special day.",
    strengths: "Uplifting, caring, enthusiastic",
    quirks: "Sometimes avoids conflict or is overly sweet",
    bestWith: ["popcorn-enthusiast", "fruit-tart-oracle"],
    notSoGoodWith: ["dark-chocolate-seeker"],
    why: "You select answers that show kindness, nurturing, and a desire to make others happy.",
    quote: "Sprinkle kindness everywhere you go!",
    emoji: "🧁",
  },
  "pretzel-warden": {
    name: "Pretzel Warden",
    traits: "Resourceful, Steady, Problem-Solver",
    tagline: "Resourceful, steady, and a problem-solver.",
    description:
      "Like a pretzel with its twists and resilience, you always find a way through challenges.",
    strengths: "Quick-thinking, adaptable, practical",
    quirks: "Can be stubborn or overly cautious",
    bestWith: ["rice-cracker-sage", "mint-biscuit-coolhead"],
    notSoGoodWith: ["sour-candy-trickster"],
    why: "You choose solutions, adapt quickly, and show a knack for untangling tricky situations.",
    quote: "Every twist in life has its purpose.",
    emoji: "🥨",
  },
  "fruit-tart-oracle": {
    name: "Fruit Tart Oracle",
    traits: "Creative, Inspiring, Colorful",
    tagline: "Creative, inspiring, and colorful.",
    description:
      "You see beauty and possibility everywhere, encouraging others to dream big—just like a fruit tart at the center of a vibrant dessert table.",
    strengths: "Innovative, optimistic, artistic",
    quirks: "Sometimes scattered or impractical",
    bestWith: ["cupcake-cheerleader", "gummy-bear-dynamo"],
    notSoGoodWith: ["granola-bar-guardian"],
    why: "You go for options that reflect creativity, a love for beauty, and inspiring others.",
    quote: "Every day is a blank plate—let's make it beautiful!",
    emoji: "🥧",
  },
  "nacho-commander": {
    name: "Nacho Commander",
    traits: "Bold, Outgoing, Adventurous",
    tagline: "Bold, outgoing, and adventurous.",
    description:
      "You spice up every gathering, bringing energy and excitement—just like nachos at a lively party.",
    strengths: "Courageous, unifying, high-energy",
    quirks: "Sometimes over-the-top or attention-seeking",
    bestWith: ["gummy-bear-dynamo", "sour-candy-trickster"],
    notSoGoodWith: ["marshmallow-mystic"],
    why: "You select answers that show a love for excitement, group fun, and bold moves.",
    quote: "Life's a fiesta—bring the flavor!",
    emoji: "🌮",
  },
  "granola-bar-guardian": {
    name: "Granola Bar Guardian",
    traits: "Dependable, Practical, Supportive",
    tagline: "Dependable, practical, and supportive.",
    description:
      "You're the rock everyone can rely on, just like a granola bar that keeps you going on any journey.",
    strengths: "Loyal, steady, prepared",
    quirks: "Sometimes too traditional or resistant to change",
    bestWith: ["marshmallow-mystic", "shortbread-classic"],
    notSoGoodWith: ["sour-candy-trickster"],
    why: "You make choices that show dependability, preparedness, and being the \"rock\" for others.",
    quote: "The best adventures are shared with friends—and snacks.",
    emoji: "🌾",
  },
  "marshmallow-mystic": {
    name: "Marshmallow Mystic",
    traits: "Gentle, Empathetic, Dreamy",
    tagline: "Gentle, empathetic, and dreamy.",
    description:
      "You bring softness and comfort, helping others feel at ease—like a marshmallow melting into cocoa.",
    strengths: "Compassionate, calming, imaginative",
    quirks: "Sometimes indecisive or avoids confrontation",
    bestWith: ["granola-bar-guardian", "rice-cracker-sage"],
    notSoGoodWith: ["nacho-commander"],
    why: "You choose empathy, gentleness, and a dreamy outlook.",
    quote: "Float softly, dream big, and let worries melt away.",
    emoji: "☁️",
  },
  "sour-candy-trickster": {
    name: "Sour Candy Trickster",
    traits: "Mischievous, Surprising, Playful",
    tagline: "Mischievous, surprising, and playful.",
    description:
      "You keep life lively and unpredictable, always ready with a twist—just like a sour candy's zing.",
    strengths: "Quick-witted, lively, loves surprises",
    quirks: "Sometimes too mischievous or hard to pin down",
    bestWith: ["nacho-commander", "gummy-bear-dynamo"],
    notSoGoodWith: ["granola-bar-guardian"],
    why: "You go for surprises, mischief, and keeping things lively.",
    quote: "Why be sour about life? Add a little zing!",
    emoji: "🍋",
  },
  "rice-cracker-sage": {
    name: "Rice Cracker Sage",
    traits: "Calm, Wise, Balanced",
    tagline: "Calm, wise, and balanced.",
    description:
      "You value harmony and simplicity, helping others find peace—like a rice cracker's quiet crunch.",
    strengths: "Mediator, tranquil, wise",
    quirks: "Can be too passive or avoid drama",
    bestWith: ["marshmallow-mystic", "pretzel-warden"],
    notSoGoodWith: ["popcorn-enthusiast"],
    why: "You pick answers that show a preference for harmony, calm, and wisdom.",
    quote: "Sometimes the quietest crunch makes the biggest impact.",
    emoji: "🍘",
  },
  "energy-bar-explorer": {
    name: "Energy Bar Explorer",
    traits: "Adventurous, Driven, Inspiring",
    tagline: "Adventurous, driven, and inspiring.",
    description:
      "You fuel new journeys, always seeking discovery—like an energy bar powering an explorer.",
    strengths: "Motivates, never gives up, goal-oriented",
    quirks: "Can be restless or impatient",
    bestWith: ["trail-mix-maverick", "pretzel-warden"],
    notSoGoodWith: ["shortbread-classic"],
    why: "You show drive, a love for exploring, and inspiring others to push their limits.",
    quote: "There's a whole world out there—let's get moving!",
    emoji: "⚡",
  },
  "shortbread-classic": {
    name: "Shortbread Classic",
    traits: "Reliable, Timeless, Loyal",
    tagline: "Reliable, timeless, and loyal.",
    description:
      "You're the steady foundation, bringing comfort and tradition—like a classic shortbread cookie.",
    strengths: "Consistent, trustworthy, stable",
    quirks: "Can resist new ideas or routines",
    bestWith: ["granola-bar-guardian", "marshmallow-mystic"],
    notSoGoodWith: ["trail-mix-maverick"],
    why: "You choose answers that show reliability, loyalty, and a love for tradition.",
    quote: "Some things never go out of style—like kindness and cookies.",
    emoji: "🍪",
  },
  "mint-biscuit-coolhead": {
    name: "Mint Biscuit Coolhead",
    traits: "Refreshing, Calm, Rational",
    tagline: "Refreshing, calm, and rational.",
    description:
      "You keep your cool and help others relax, bringing clarity to any situation—like a mint biscuit on a warm day.",
    strengths: "Analytical, soothing, reliable",
    quirks: "Can seem aloof or detached",
    bestWith: ["dark-chocolate-seeker", "pretzel-warden"],
    notSoGoodWith: ["cupcake-cheerleader"],
    why: "You pick answers that show calm, logic, and a refreshing perspective.",
    quote: "Stay cool, stay crisp, and everything will fall into place.",
    emoji: "🌿",
  },
  "gummy-oracle": {
    name: "Gummy Oracle",
    traits: "Flexible, Insightful, Empathetic",
    tagline: "Flexible, insightful, and empathetic.",
    description:
      "You adapt to change and help others do the same, always knowing what's coming next—like a gummy that bends but never breaks.",
    strengths: "Wise, intuitive, adaptable",
    quirks: "Can be indecisive or blend in too much",
    bestWith: ["fruit-tart-oracle", "cupcake-cheerleader"],
    notSoGoodWith: ["shortbread-classic"],
    why: "You pick answers that show flexibility, empathy, and seeing the bigger picture.",
    quote: "Every flavor tells a story—listen closely.",
    emoji: "🔮",
  },
  "trail-mix-maverick": {
    name: "Trail Mix Maverick",
    traits: "Adventurous, Spontaneous, Bold",
    tagline: "Adventurous, spontaneous, and bold.",
    description:
      "You're always ready for the next horizon, mixing courage with curiosity—like trail mix fueling a wild expedition.",
    strengths: "Fearless, adaptable, always moving forward",
    quirks: "Can be restless or hard to settle down",
    bestWith: ["energy-bar-explorer", "popcorn-enthusiast"],
    notSoGoodWith: ["shortbread-classic"],
    why: "You choose answers that show a hunger for adventure and leaping before you look.",
    quote: "The best paths are the ones you haven't mapped yet.",
    emoji: "🥜",
  },
  "cheese-puff-optimist": {
    name: "Cheese Puff Optimist",
    traits: "Cheerful, Lighthearted, Upbeat",
    tagline: "Cheerful, lighthearted, and upbeat.",
    description:
      "You float through life with a sunny outlook, lifting spirits wherever you land—like a cheese puff that's impossible not to smile at.",
    strengths: "Positive, warm, easy to be around",
    quirks: "Sometimes avoids heavy topics or tough choices",
    bestWith: ["popcorn-enthusiast", "cupcake-cheerleader"],
    notSoGoodWith: ["dark-chocolate-seeker"],
    why: "You pick answers that spread joy, keep things light, and brighten the room.",
    quote: "Every day is a little puff of happiness waiting to happen.",
    emoji: "✨",
  },
};

