export const SPIRIT_IDS = {
  onigiriGuardian: "onigiri-guardian",
  takoyakiDynamo: "takoyaki-dynamo",
  taiyakiArtist: "taiyaki-artist",
  baoBunMystic: "bao-bun-mystic",
  eggTartClassic: "egg-tart-classic",
  bobaSocialite: "boba-socialite",
  hotteokComforter: "hotteok-comforter",
  wasabiPeaSpark: "wasabi-pea-spark",
  mochiDreamer: "mochi-dreamer",
  dumplingDiplomat: "dumpling-diplomat",
  tanghuluAdventurer: "tanghulu-adventurer",
  sesameBallSage: "sesame-ball-sage",
  pockyMatchmaker: "pocky-matchmaker",
  shrimpChipExplorer: "shrimp-chip-explorer",
  mooncakeKeeper: "mooncake-keeper",
  matchaStrategist: "matcha-strategist",
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
  title: string;
  question: string;
  options: QuizOption[];
  outcomeText?: string;
};

export const HOME_PAGE_CONTENT = {
  eyebrow: "Snacktopia",
  titleLine1: "Night Market",
  titleLine2: "Edition",
  subtitle:
    "A journey through a magical world, where your Snack Spirit is hidden among the glowing lanterns, waiting to meet you.",
  badges: ["12 story choices", "16 snack spirits"],
  ctaLabel: "Start",
  footnote: "Follow your heart",
} as const;
export const QUIZ_QUESTIONS: { questions: QuizQuestionItem[] } = {
  questions: [
    {
      id: 1,
      title: "Choosing Your Path",
      question:
        "You step beneath the glowing archway and enter the Moonlight Night Market. Which path draws you in?",
      options: [
        {
          id: "a",
          text: "A dazzling lane filled with unusual snacks and stalls you have never seen before",
          weights: {
            "tanghulu-adventurer": 2,
            "taiyaki-artist": 1,
            "shrimp-chip-explorer": 0.5,
          },
        },
        {
          id: "b",
          text: "A cozy street scented with steamed buns, egg tarts, and pastries",
          weights: {
            "hotteok-comforter": 2,
            "egg-tart-classic": 1,
            "onigiri-guardian": 0.5,
          },
        },
        {
          id: "c",
          text: "A mysterious alley marked with swirling lantern symbols and a soft melody",
          weights: {
            "mochi-dreamer": 2,
            "bao-bun-mystic": 1,
            "sesame-ball-sage": 0.5,
          },
        },
        {
          id: "d",
          text: "A lively street filled with music and cheering crowds",
          weights: {
            "boba-socialite": 2,
            "takoyaki-dynamo": 1,
            "wasabi-pea-spark": 0.5,
          },
        },
      ],
    },
    {
      id: 2,
      title: "Crossing the Canal",
      question:
        "Your path leads to a canal glowing with floating lotus flowers. The bridge is raised for the evening parade.\n How do you cross?",
      options: [
        {
          id: "a",
          text: "Build a skewer raft and ride the rapids",
          weights: {
            "tanghulu-adventurer": 2,
            "takoyaki-dynamo": 1,
            "wasabi-pea-spark": 0.5,
          },
        },
        {
          id: "b",
          text: "Wait patiently for the bamboo ferry to return",
          weights: {
            "sesame-ball-sage": 2,
            "egg-tart-classic": 1,
            "bao-bun-mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "Carefully use the floating lotus flowers as platforms to cross",
          weights: {
            "matcha-strategist": 2,
            "shrimp-chip-explorer": 1,
            "onigiri-guardian": 0.5,
          },
        },
        {
          id: "d",
          text: "Ask nearby travelers to help lower the bridge",
          weights: {
            "dumpling-diplomat": 2,
            "pocky-matchmaker": 1,
            "onigiri-guardian": 0.5,
          },
        },
      ],
    },
    {
      id: 3,
      title: "The Snack Creature's Gift",
      question:
        "On the other side of the canal, a friendly snack creature welcomes you to its stall and offers you a gift.\n How do you respond?",
      options: [
        {
          id: "a",
          text: "Accept a sparkling tanghulu skewer that changes flavor with every bite",
          weights: {
            "tanghulu-adventurer": 2,
            "takoyaki-dynamo": 1,
            "mochi-dreamer": 0.5,
          },
        },
        {
          id: "b",
          text: "Choose a mystery pouch of colorful rice crackers filled with surprises",
          weights: {
            "shrimp-chip-explorer": 2,
            "taiyaki-artist": 1,
            "wasabi-pea-spark": 0.5,
          },
        },
        {
          id: "c",
          text: "Take a warm honey-filled pancake to save for later in your journey",
          weights: {
            "onigiri-guardian": 2,
            "hotteok-comforter": 1,
            "mooncake-keeper": 0.5,
          },
        },
        {
          id: "d",
          text: "Politely decline until you understand why the gift is being offered",
          weights: {
            "matcha-strategist": 2,
            "sesame-ball-sage": 1,
            "egg-tart-classic": 0.5,
          },
        },
      ],
    },
    {
  id: 4,
  title: "Earning a Market Token",
  question:
    "At the next stall, the owner offers you a market token in exchange for something meaningful.\n What do you contribute?",
  options: [
    {
      id: "a",
      text: "A lively tale that leaves the owner and nearby travelers laughing",
      weights: {
        "takoyaki-dynamo": 2,
        "boba-socialite": 1,
        "pocky-matchmaker": 0.5,
      },
    },
    {
      id: "b",
      text: "A thoughtful suggestion for making the stall run more smoothly",
      weights: {
        "sesame-ball-sage": 2,
        "matcha-strategist": 1,
        "egg-tart-classic": 0.5,
      },
    },
    {
      id: "c",
      text: "A promise to pass the owner’s kindness on to another traveler",
      weights: {
        "hotteok-comforter": 2,
        "onigiri-guardian": 1,
        "dumpling-diplomat": 0.5,
      },
    },
    {
      id: "d",
      text: "A tiny handmade charm meant to bring good luck to everyone who visits the stall",
      weights: {
        "pocky-matchmaker": 2,
        "taiyaki-artist": 1,
        "mochi-dreamer": 0.5,
          },
        },
      ],
      outcomeText:
        "The stall owner rewards you with the glowing token. You place it safely in your pocket and continue deeper into the market.",
    },
    {
      id: 5,
      title: "The Mischievous Fox",
      question:
        "A mischievous fox darts through the crowd, snatches your token, and disappears between the stalls.\n What do you do?",
      options: [
        {
          id: "a",
          text: "Chase after it immediately",
          weights: {
            "wasabi-pea-spark": 2,
            "tanghulu-adventurer": 1,
            "takoyaki-dynamo": 0.5,
          },
        },
        {
          id: "b",
          text: "Offer it part of your snack in exchange for the token",
          weights: {
            "dumpling-diplomat": 2,
            "hotteok-comforter": 1,
            "pocky-matchmaker": 0.5,
          },
        },
        {
          id: "c",
          text: "Create a clever plan to lure it back",
          weights: {
            "matcha-strategist": 2,
            "sesame-ball-sage": 1,
            "taiyaki-artist": 0.5,
          },
        },
        {
          id: "d",
          text: "Follow calmly and try to understand why it took the token",
          weights: {
            "bao-bun-mystic": 2,
            "dumpling-diplomat": 1,
            "mochi-dreamer": 0.5,
          },
        },
      ],
      outcomeText:
        "Your approach works. The fox returns the token before vanishing into a lantern-lit alley.",
    },
    {
      id: 6,
      title: "The Arcade",
      question:
        "After getting your token back, you discover an arcade where the token can be used.\n How do you spend it?",
      options: [
        {
          id: "a",
          text: "Play a fast reflex game with flashing targets",
          weights: {
            "takoyaki-dynamo": 2,
            "wasabi-pea-spark": 1,
            "tanghulu-adventurer": 0.5,
          },
        },
        {
          id: "b",
          text: "Enter a puzzle booth filled with riddles",
          weights: {
            "sesame-ball-sage": 2,
            "matcha-strategist": 1,
            "bao-bun-mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "Join a team challenge where everyone works together",
          weights: {
            "dumpling-diplomat": 2,
            "pocky-matchmaker": 1,
            "boba-socialite": 0.5,
          },
        },
        {
          id: "d",
          text: "Save the token for something else in the market",
          weights: {
            "matcha-strategist": 2,
            "egg-tart-classic": 1,
            "shrimp-chip-explorer": 0.5,
          },
        },
      ],
    },
    {
      id: 7,
      title: "The Moonlight Food Festival",
      question:
        "Lanterns sway overhead as vendors serve sizzling skewers, steamed dumplings, pastries, and fragrant tea.\n Which activity draws you in?",
      options: [
        {
          id: "a",
          text: "Invent a completely new snack flavor",
          weights: {
            "taiyaki-artist": 2,
            "mochi-dreamer": 1,
            "tanghulu-adventurer": 0.5,
          },
        },
        {
          id: "b",
          text: "Enter a fast-paced bamboo-steamer stacking contest",
          weights: {
            "takoyaki-dynamo": 2,
            "wasabi-pea-spark": 1,
            "boba-socialite": 0.5,
          },
        },
        {
          id: "c",
          text: "Listen to stories about the market's recipes and legends",
          weights: {
            "mooncake-keeper": 2,
            "bao-bun-mystic": 1,
            "sesame-ball-sage": 0.5,
          },
        },
        {
          id: "d",
          text: "Help judge the festival's finest snack",
          weights: {
            "egg-tart-classic": 2,
            "matcha-strategist": 1,
            "mooncake-keeper": 0.5,
          },
        },
      ],
    },
    {
      id: 8,
      title: "The Darkened Stall",
      question:
        "A nearby stall suddenly goes dark. The worried owner looks around for help as customers begin to gather.\n What do you do?",
      options: [
        {
          id: "a",
          text: "Inspect the stall and work through possible ways to restore the lights",
          weights: {
            "matcha-strategist": 2,
            "sesame-ball-sage": 1,
            "taiyaki-artist": 0.5,
          },
        },
        {
          id: "b",
          text: "Reassure the owner and stay nearby for support",
          weights: {
            "hotteok-comforter": 2,
            "bao-bun-mystic": 1,
            "onigiri-guardian": 0.5,
          },
        },
        {
          id: "c",
          text: "Continue on and let others step in to handle it",
          weights: {
            "shrimp-chip-explorer": 2,
            "wasabi-pea-spark": 1,
            "egg-tart-classic": 0.5,
          },
        },
        {
          id: "d",
          text: "Take charge and organize the people around you",
          weights: {
            "onigiri-guardian": 2,
            "dumpling-diplomat": 1,
            "boba-socialite": 0.5,
          },
        },
      ],
      outcomeText:
        "Soon, the lanterns glow again and the stall returns to life.",
    },
{
id: 9,
title: "The Moonlight Parade",
question:
"Music suddenly fills the market as the evening parade begins. A vendor invites you to join.\n How do you take part?",
options: [
{
id: "a",
text: "Carry a lantern at the back and quietly imagine where the parade might lead",
weights: {
"mochi-dreamer": 2,
"bao-bun-mystic": 1,
"shrimp-chip-explorer": 0.5,
},
},
{
id: "b",
text: "Join the performers and improvise something no one planned",
weights: {
"wasabi-pea-spark": 2,
"takoyaki-dynamo": 1,
"taiyaki-artist": 0.5,
},
},
{
id: "c",
text: "Help organize the lantern carriers and keep the parade moving smoothly",
weights: {
  "egg-tart-classic": 2,
  "onigiri-guardian": 1,
  "dumpling-diplomat": 0.5,
},
},
{
id: "d",
text: "Gather the travelers you have met and invite others to join along the way",
weights: {
"boba-socialite": 2,
"pocky-matchmaker": 1,
"dumpling-diplomat": 0.5,
},
},
],
outcomeText:
"The parade winds through the market, filling the streets with music, laughter, and glowing lantern light.",
},
    {
      id: 10,
      title: "Above the Lanterns",
      question:
        "Beyond the festival, you climb to a quiet rooftop overlooking the entire market.\n How do you spend the moment?",
      options: [
        {
          id: "a",
          text: "Invite everyone you have met to enjoy the view",
          weights: {
            "boba-socialite": 2,
            "pocky-matchmaker": 1,
            "dumpling-diplomat": 0.5,
          },
        },
        {
          id: "b",
          text: "Sit quietly and reflect on everything that has happened",
          weights: {
            "bao-bun-mystic": 2,
            "sesame-ball-sage": 1,
            "mooncake-keeper": 0.5,
          },
        },
        {
          id: "c",
          text: "Search the horizon for another part of Snacktopia to explore",
          weights: {
            "tanghulu-adventurer": 2,
            "shrimp-chip-explorer": 1,
            "wasabi-pea-spark": 0.5,
          },
        },
        {
          id: "d",
          text: "Sketch, write about, or photograph the glowing market below",
          weights: {
            "taiyaki-artist": 2,
            "mochi-dreamer": 1,
            "mooncake-keeper": 0.5,
          },
        },
      ],
    },
    {
      id: 11,
      title: "Grand Guardian Nibble's Gift",
      question:
        "As the moon reaches its highest point, Grand Guardian Nibble appears and offers you one final gift.\n Which do you choose?",
      options: [
        {
          id: "a",
          text: "A lantern that reveals paths waiting to be explored",
          weights: {
            "tanghulu-adventurer": 2,
            "shrimp-chip-explorer": 1,
            "wasabi-pea-spark": 0.5,
          },
        },
        {
          id: "b",
          text: "A magical cookbook filled with ideas yet to be created",
          weights: {
            "taiyaki-artist": 2,
            "mochi-dreamer": 1,
            "matcha-strategist": 0.5,
          },
        },
        {
          id: "c",
          text: "A bottomless basket of treats that always has enough for everyone",
          weights: {
            "pocky-matchmaker": 2,
            "hotteok-comforter": 1,
            "onigiri-guardian": 0.5, 
          },
        },
        {
          id: "d",
          text: "A charm containing memories of everyone you met",
          weights: {
            "mooncake-keeper": 2,
            "bao-bun-mystic": 1,
            "egg-tart-classic": 0.5,
          },
        },
      ],
    },
    {
      id: 12,
      title: "Returning Home",
      question:
        "The lanterns dim and a swirling portal returns you to your kitchen.\n Which feeling from your journey remains strongest?",
      options: [
        {
          id: "a",
          text: "Excitement for the next adventure waiting beyond the portal",
          weights: {
            "tanghulu-adventurer": 2,
            "takoyaki-dynamo": 1,
            "shrimp-chip-explorer": 0.5,
          },
        },
        {
          id: "b",
          text: "Gratitude for the connections and memories you made",
          weights: {
            "pocky-matchmaker": 2,
            "dumpling-diplomat": 1,
            "boba-socialite": 0.5,
          },
        },
        {
          id: "c",
          text: "Inspiration to create and share something new",
          weights: {
            "taiyaki-artist": 2,
            "mochi-dreamer": 1,
            "onigiri-guardian": 0.5,
          },
        },
        {
          id: "d",
          text: "Comfort in knowing the market feels like a second home",
          weights: {
            "mooncake-keeper": 2,
            "hotteok-comforter": 1,
            "egg-tart-classic": 0.5,
          },
        },
      ],
    },
  ],
};

export type SnackSpirit = {
  name: string;
  image: string;
  traits: string;
  tagline: string;
  description: string;
  strengths: string;
  quirks: string;
  shineWhen: string[];
  bestWith: SpiritId[];
  notSoGoodWith: SpiritId[];
  why: string;
  quote: string;
  emoji: string;
};

export const SNACK_SPIRITS: Record<SpiritId, SnackSpirit> = {
  "onigiri-guardian": {
    name: "Onigiri Guardian",
    image: "/images/personalities/01_onigiri_guardian.png",
    traits: "Dependable, Protective, Grounded",
    tagline: "The steady spirit who keeps everyone safe.",
    description:
      "You are the dependable presence others trust when things become uncertain. You show care through preparation, practical support, and quiet acts of protection.",
    strengths: "Loyal, prepared, reassuring",
    quirks: "Can become overly cautious or protective",
    shineWhen: [
      "You show up prepared for what others didn't expect",
      "You keep your word, every time",
      "You create safety for the people around you",
      "You stay steady when things get chaotic",
      "You quietly handle what needs to be done",
    ],
    bestWith: ["bao-bun-mystic", "egg-tart-classic"],
    notSoGoodWith: ["wasabi-pea-spark"],
    why: "Your choices show responsibility, loyalty, and a willingness to step in when others need help",
    quote: "I'll keep you safe, one grain at a time.",
    emoji: "🍙",
  },
  "takoyaki-dynamo": {
    name: "Takoyaki Dynamo",
    image: "/images/personalities/02_takoyaki_dynamo.png",
    traits: "Playful, Energetic, Spontaneous",
    tagline: "The lively spirit who turns every moment into a celebration.",
    description:
      "You bring motion, laughter, and enthusiasm wherever you go. New experiences energize you, and your playful confidence encourages others to join the fun.",
    strengths: "Enthusiastic, adventurous, entertaining",
    quirks: "May act before thinking",
    shineWhen: [
      "You turn ordinary moments into celebrations",
      "You jump in before overthinking it",
      "You bring energy into a quiet room",
      "You make people laugh without trying",
      "You find the fun in almost anything",
    ],
    bestWith: ["boba-socialite", "tanghulu-adventurer"],
    notSoGoodWith: ["matcha-strategist"],
    why: "Your choices favor excitement, fast action, playfulness, and shared experiences",
    quote: "Why stand still when we could roll into an adventure?",
    emoji: "🐙",
  },
  "taiyaki-artist": {
    name: "Taiyaki Artist",
    image: "/images/personalities/03_taiyaki_artist.png",
    traits: "Creative, Sentimental, Imaginative",
    tagline: "The expressive spirit who finds stories in every detail.",
    description:
      "You notice beauty and meaning where others might not. You transform memories, feelings, and everyday details into imaginative ideas that inspire the people around you.",
    strengths: "Artistic, observant, expressive",
    quirks: "Can become lost in your imagination",
    shineWhen: [
      "You notice the small details everyone else misses",
      "You turn feelings into something you can make",
      "You find beauty in ordinary things",
      "You express what's hard to put into words",
      "You let your imagination lead the way",
    ],
    bestWith: ["mochi-dreamer", "mooncake-keeper"],
    notSoGoodWith: ["wasabi-pea-spark"],
    why: "Your choices reveal creativity, visual curiosity, and a desire to make or preserve something meaningful",
    quote: "Every shape holds a story.",
    emoji: "🐟",
  },
  "bao-bun-mystic": {
    name: "Bao Bun Mystic",
    image: "/images/personalities/04_bao_bun_mystic.png",
    traits: "Gentle, Introspective, Wise",
    tagline: "The quiet spirit who understands what lies beneath the surface.",
    description:
      "You are thoughtful, compassionate, and comfortable with quiet moments. You listen closely and often understand feelings or situations before others do.",
    strengths: "Reflective, compassionate, intuitive",
    quirks: "May withdraw when overwhelmed",
    shineWhen: [
      "You take time to listen and reflect",
      "You notice what others miss",
      "You prefer meaningful conversations",
      "You bring calm to tense moments",
      "You trust your intuition",
    ],
    bestWith: ["onigiri-guardian", "sesame-ball-sage"],
    notSoGoodWith: ["boba-socialite"],
    why: "Your choices favor reflection, emotional understanding, patience, and calm observation",
    quote: "The softest answers are sometimes the truest.",
    emoji: "🥟",
  },
  "egg-tart-classic": {
    name: "Egg Tart Classic",
    image: "/images/personalities/05_egg_tart_classic.png",
    traits: "Warm, Refined, Reliable",
    tagline: "The timeless spirit who values quality and tradition.",
    description:
      "You appreciate familiar comforts, thoughtful craftsmanship, and dependable routines. Your calm consistency gives other people something solid to rely on.",
    strengths: "Composed, sincere, dependable",
    quirks: "Can resist unnecessary change",
    shineWhen: [
      "You keep your promises, big or small",
      "You bring quiet consistency to chaotic days",
      "You value quality over quick shortcuts",
      "You make people feel at ease around you",
      "You honor what has stood the test of time",
    ],
    bestWith: ["onigiri-guardian", "mooncake-keeper"],
    notSoGoodWith: ["tanghulu-adventurer"],
    why: "Your choices show patience, discernment, consistency, and an appreciation for proven traditions",
    quote: "Some things become classics for a reason.",
    emoji: "🥧",
  },
  "boba-socialite": {
    name: "Boba Socialite",
    image: "/images/personalities/06_boba_socialite.png",
    traits: "Expressive, Friendly, Charismatic",
    tagline: "The sparkling spirit who brings everyone together.",
    description:
      "You thrive through conversation, shared experiences, and lively surroundings. Your welcoming energy helps people connect and feel included.",
    strengths: "Sociable, encouraging, adaptable",
    quirks: "May overcommit socially",
    shineWhen: [
      "You make new people feel instantly welcome",
      "You turn a gathering into an event",
      "You say the thing that breaks the ice",
      "You remember the little details about people",
      "You bring everyone into the conversation",
    ],
    bestWith: ["takoyaki-dynamo", "pocky-matchmaker"],
    notSoGoodWith: ["bao-bun-mystic"],
    why: "Your choices consistently lead toward crowds, collaboration, celebration, and new connections",
    quote: "Everything is better when we share it.",
    emoji: "🧋",
  },
  "hotteok-comforter": {
    name: "Hotteok Comforter",
    image: "/images/personalities/07_hotteok_comforter.png",
    traits: "Nurturing, Generous, Reassuring",
    tagline: "The warm spirit who makes every place feel like home.",
    description:
      "You care for people through patient listening, thoughtful gestures, and practical support. Others feel calmer and more secure when you are nearby.",
    strengths: "Caring, patient, generous",
    quirks: "May neglect your own needs",
    shineWhen: [
      "You notice when someone needs support",
      "You give generously without expecting anything back",
      "You make people feel safe being themselves",
      "You show up with exactly what's needed",
      "You turn any space into somewhere warm",
    ],
    bestWith: ["mochi-dreamer", "dumpling-diplomat"],
    notSoGoodWith: ["wasabi-pea-spark"],
    why: "Your choices emphasize comfort, kindness, generosity, and caring for people who need support",
    quote: "There is always room for one more by the fire.",
    emoji: "🥞",
  },
  "wasabi-pea-spark": {
    name: "Wasabi Pea Spark",
    image: "/images/personalities/08_wasabi_pea_spark.png",
    traits: "Bold, Mischievous, Independent",
    tagline: "The fearless spirit who adds a little shock to life.",
    description:
      "You trust your instincts, speak your mind, and rarely wait for permission. Your daring energy challenges expectations and keeps life from becoming predictable.",
    strengths: "Courageous, witty, confident",
    quirks: "Can be blunt or provocative",
    shineWhen: [
      "You say what everyone else is thinking",
      "You trust your gut over the crowd",
      "You keep things from getting boring",
      "You stand your ground under pressure",
      "You aren't afraid to shake things up",
    ],
    bestWith: ["tanghulu-adventurer", "shrimp-chip-explorer"],
    notSoGoodWith: ["onigiri-guardian"],
    why: "Your choices show independence, bold action, risk-taking, and comfort with standing apart",
    quote: "A little shock keeps life interesting.",
    emoji: "🫛",
  },
  "mochi-dreamer": {
    name: "Mochi Dreamer",
    image: "/images/personalities/09_mochi_dreamer.png",
    traits: "Soft-Hearted, Hopeful, Imaginative",
    tagline: "The gentle spirit who sees possibility everywhere.",
    description:
      "You move through the world with tenderness, curiosity, and imagination. Beauty and emotion affect you deeply, and you naturally envision what could be.",
    strengths: "Empathetic, creative, optimistic",
    quirks: "May avoid harsh realities",
    shineWhen: [
      "You imagine what could be, not just what is",
      "You feel things deeply and honestly",
      "You bring softness to hard moments",
      "You find hope where others see none",
      "You let wonder guide your choices",
    ],
    bestWith: ["taiyaki-artist", "hotteok-comforter"],
    notSoGoodWith: ["matcha-strategist"],
    why: "Your choices reveal imagination, emotional sensitivity, hopefulness, and a love of magical possibilities",
    quote: "The world is softer when you leave room to dream.",
    emoji: "🍡",
  },
  "dumpling-diplomat": {
    name: "Dumpling Diplomat",
    image: "/images/personalities/10_dumpling_diplomat.png",
    traits: "Considerate, Balanced, Cooperative",
    tagline: "The thoughtful spirit who always searches for common ground.",
    description:
      "You understand different perspectives and help people work together. You combine emotional awareness with practical judgment to create harmony.",
    strengths: "Fair, diplomatic, emotionally intelligent",
    quirks: "May avoid necessary conflict",
    shineWhen: [
      "You find common ground others can't see",
      "You listen to every side before deciding",
      "You turn tension into teamwork",
      "You make sure no one feels left out",
      "You stay fair when things get tense",
    ],
    bestWith: ["hotteok-comforter", "pocky-matchmaker"],
    notSoGoodWith: ["wasabi-pea-spark"],
    why: "Your choices favor teamwork, empathy, compromise, and solutions that include everyone",
    quote: "There is always a way to bring everyone to the table.",
    emoji: "🥟",
  },
  "tanghulu-adventurer": {
    name: "Tanghulu Adventurer",
    image: "/images/personalities/11_tanghulu_adventurer.png",
    traits: "Curious, Daring, Optimistic",
    tagline: "The bright spirit always searching for the next discovery.",
    description:
      "You are energized by unfamiliar paths, colorful experiences, and memorable challenges. Possibility excites you more than predictability.",
    strengths: "Brave, curious, enthusiastic",
    quirks: "May become bored with routine",
    shineWhen: [
      "You say yes to the unfamiliar",
      "You turn detours into the best part of the story",
      "You stay hopeful when plans change",
      "You chase the next discovery without hesitation",
      "You make routine feel like an adventure",
    ],
    bestWith: ["takoyaki-dynamo", "wasabi-pea-spark"],
    notSoGoodWith: ["egg-tart-classic"],
    why: "Your choices repeatedly favor novelty, exploration, courage, and the promise of another adventure",
    quote: "The sweetest discoveries are just beyond the familiar path.",
    emoji: "🍓",
  },
  "sesame-ball-sage": {
    name: "Sesame Ball Sage",
    image: "/images/personalities/12_sesame_ball_sage.png",
    traits: "Patient, Thoughtful, Perceptive",
    tagline: "The observant spirit who looks beneath the surface.",
    description:
      "You take time to understand situations before acting. Your calm analysis and attention to detail often reveal answers that other people overlook.",
    strengths: "Wise, analytical, calm",
    quirks: "Can overthink simple choices",
    shineWhen: [
      "You notice the detail everyone else scrolled past",
      "You wait until you actually understand before acting",
      "You solve the puzzle no one else could crack",
      "You bring calm, careful thinking to chaos",
      "You see patterns before anyone else does",
    ],
    bestWith: ["bao-bun-mystic", "matcha-strategist"],
    notSoGoodWith: ["takoyaki-dynamo"],
    why: "Your choices favor puzzles, patience, careful observation, and understanding before action",
    quote: "Look closely. There is always more within.",
    emoji: "🟤",
  },
  "pocky-matchmaker": {
    name: "Pocky Matchmaker",
    image: "/images/personalities/13_pocky_matchmaker.png",
    traits: "Playful, Affectionate, Connection-Oriented",
    tagline: "The joyful spirit who creates meaningful connections.",
    description:
      "You love bringing people together and making shared moments feel special. Your creativity and warmth help relationships form naturally.",
    strengths: "Affectionate, collaborative, cheerful",
    quirks: "May become overly involved in other people's lives",
    shineWhen: [
      "You introduce people who end up becoming friends",
      "You make ordinary hangouts feel special",
      "You remember what makes each person smile",
      "You turn shared moments into lasting memories",
      "You root for everyone around you",
    ],
    bestWith: ["boba-socialite", "dumpling-diplomat"],
    notSoGoodWith: ["matcha-strategist"],
    why: "Your choices prioritize companionship, group experiences, shared memories, and helping people connect",
    quote: "The best moments are meant to be shared.",
    emoji: "🥢",
  },
  "shrimp-chip-explorer": {
    name: "Shrimp Chip Explorer",
    image: "/images/personalities/14_shrimp_chip_explorer.png",
    traits: "Easygoing, Curious, Flexible",
    tagline: "The relaxed spirit who follows wherever the journey leads.",
    description:
      "You adapt quickly and enjoy discovering things without needing a perfect plan. Your relaxed curiosity makes unfamiliar experiences feel approachable.",
    strengths: "Open-minded, relaxed, adaptable",
    quirks: "May struggle with structure or long-term plans",
    shineWhen: [
      "You adapt without missing a beat",
      "You're comfortable without a perfect plan",
      "You find the fun in whatever happens next",
      "You go with the flow instead of forcing it",
      "You make new experiences feel low-stakes and easy",
    ],
    bestWith: ["wasabi-pea-spark", "tanghulu-adventurer"],
    notSoGoodWith: ["matcha-strategist"],
    why: "Your choices show flexibility, independence, curiosity, and a willingness to let events unfold naturally",
    quote: "Let's follow the crunch and see where it leads.",
    emoji: "🦐",
  },
  "mooncake-keeper": {
    name: "Mooncake Keeper",
    image: "/images/personalities/15_mooncake_keeper.png",
    traits: "Loyal, Reflective, Tradition-Oriented",
    tagline: "The sentimental spirit who keeps meaningful stories alive.",
    description:
      "You treasure memories, lasting relationships, and meaningful rituals. You help others remember where they came from and what matters most.",
    strengths: "Loyal, thoughtful, sentimental",
    quirks: "May hold onto the past too tightly",
    shineWhen: [
      "You hold onto what matters most",
      "You keep traditions alive for the people you love",
      "You remember the stories others forget",
      "You make people feel like they belong",
      "You honor where you came from",
    ],
    bestWith: ["egg-tart-classic", "taiyaki-artist"],
    notSoGoodWith: ["tanghulu-adventurer"],
    why: "Your choices favor memories, old stories, familiar comforts, and the relationships that create belonging",
    quote: "What we remember becomes part of who we are.",
    emoji: "🥮",
  },
  "matcha-strategist": {
    name: "Matcha Strategist",
    image: "/images/personalities/16_matcha_strategist.png",
    traits: "Focused, Independent, Intentional",
    tagline: "The deliberate spirit who moves with purpose.",
    description:
      "You think ahead, examine your options, and prefer meaningful action over impulse. Your discipline helps turn complex situations into clear plans.",
    strengths: "Focused, self-directed, strategic",
    quirks: "Can become overly serious or demanding of yourself",
    shineWhen: [
      "You think three steps ahead",
      "You turn a vague idea into a real plan",
      "You stay calm and precise under pressure",
      "You do the work quietly before anyone asks",
      "You choose purpose over impulse every time",
    ],
    bestWith: ["sesame-ball-sage", "onigiri-guardian"],
    notSoGoodWith: ["takoyaki-dynamo"],
    why: "Your choices emphasize planning, logic, independence, restraint, and purposeful problem-solving",
    quote: "Move with purpose, and every step becomes meaningful.",
    emoji: "🍵",
  },
};
