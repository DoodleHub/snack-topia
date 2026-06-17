export type QuizOption = {
  id: string;
  text: string;
  weights: Record<string, number>;
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
            "Fruit Tart Oracle": 2,
            "Popcorn Enthusiast": 1,
            "Gummy Bear Dynamo": 0.5,
          },
        },
        {
          id: "b",
          text: "The comforting aroma of familiar snacks mingling in the air",
          weights: {
            "Granola Bar Guardian": 2,
            "Shortbread Classic": 1,
            "Marshmallow Mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "The soft, melodic hum that seems to welcome you by name",
          weights: {
            "Dark Chocolate Seeker": 2,
            "Rice Cracker Sage": 1,
            "Mint Biscuit Coolhead": 0.5,
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
            "Choco Seeker": 2,
            "Rice Cracker Sage": 1,
            "Sour Candy Trickster": 0.5,
          },
        },
        {
          id: "b",
          text: "The glittering trail lined with sparkling candy stones",
          weights: {
            "Gummy Bear Dynamo": 2,
            "Popcorn Enthusiast": 1,
            "Party Nacho": 0.5,
          },
        },
        {
          id: "c",
          text: "The shady lane under arches of golden-baked bread",
          weights: {
            "Granola Bar Guardian": 2,
            "Pretzel Warden": 1,
            "Shortbread Classic": 0.5,
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
            "Trail Mix Maverick": 2,
            "Energy Bar Explorer": 1,
            "Party Nacho": 0.5,
          },
        },
        {
          id: "b",
          text: "Wait for a gentle marshmallow ferry to drift by.",
          weights: {
            "Marshmallow Mystic": 2,
            "Cheese Puff Optimist": 1,
            "Cupcake Cheerleader": 0.5,
          },
        },
        {
          id: "c",
          text: "Use floating fruit slices as stepping stones.",
          weights: {
            "Fruit Tart Oracle": 2,
            "Mint Biscuit Coolhead": 1,
            "Choco Seeker": 0.5,
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
            "Fruit Tart Oracle": 2,
            "Cupcake Cheerleader": 1,
            "Gummy Oracle": 0.5,
          },
        },
        {
          id: "b",
          text: "A pouch of popping corn that bursts with surprises",
          weights: {
            "Popcorn Enthusiast": 2,
            "Cheese Puff Optimist": 1,
            "Granola Bar Guardian": 0.5,
          },
        },
        {
          id: "c",
          text: "A warm, honeyed granola bar that feels like home",
          weights: {
            "Granola Bar Guardian": 2,
            "Shortbread Classic": 1,
            "Pretzel Warden": 0.5,
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
            "Gummy Bear Dynamo": 2,
            "Sour Candy Trickster": 1,
            "Party Nacho": 0.5,
          },
        },
        {
          id: "b",
          text: "Offer the gift you received earlier from the snack creature as a gesture of goodwill.",
          weights: {
            "Cupcake Cheerleader": 2,
            "Granola Bar Guardian": 1,
            "Marshmallow Mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "Suggest a clever plan for the fox to make the most of the gummy harvest.",
          weights: {
            "Pretzel Warden": 2,
            "Mint Biscuit Coolhead": 1,
            "Choco Seeker": 0.5,
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
            "Fruit Tart Oracle": 2,
            "Choco Seeker": 1,
            "Mint Biscuit Coolhead": 0.5,
          },
        },
        {
          id: "b",
          text: "The fruit-stacking contest, aiming for the tallest tower.",
          weights: {
            "Party Nacho": 2,
            "Energy Bar Explorer": 1,
            "Popcorn Enthusiast": 0.5,
          },
        },
        {
          id: "c",
          text: "The storytelling tent, where old tales are shared.",
          weights: {
            "Rice Cracker Sage": 2,
            "Marshmallow Mystic": 1,
            "Gummy Oracle": 0.5,
          },
        },
        {
          id: "d",
          text: "Judge the best classic tart, savoring each bite.",
          weights: {
            "Shortbread Classic": 2,
            "Granola Bar Guardian": 1,
            "Cheese Puff Optimist": 0.5,
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
            "Cupcake Cheerleader": 2,
            "Cheese Puff Optimist": 1,
            "Gummy Bear Dynamo": 0.5,
          },
        },
        {
          id: "b",
          text: "Climb a hill to get the best view of the sky.",
          weights: {
            "Trail Mix Maverick": 2,
            "Popcorn Enthusiast": 1,
            "Energy Bar Explorer": 0.5,
          },
        },
        {
          id: "c",
          text: "Wander quietly, letting your thoughts drift with the stars.",
          weights: {
            "Dark Chocolate Seeker": 2,
            "Rice Cracker Sage": 1,
            "Mint Biscuit Coolhead": 0.5,
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
            "Choco Seeker": 2,
            "Fruit Tart Oracle": 1,
            "Gummy Oracle": 0.5,
          },
        },
        {
          id: "b",
          text: "Dive in and trust your instincts",
          weights: {
            "Trail Mix Maverick": 2,
            "Party Nacho": 1,
            "Sour Candy Trickster": 0.5,
          },
        },
        {
          id: "c",
          text: "Work through it step by step, patiently",
          weights: {
            "Pretzel Warden": 2,
            "Shortbread Classic": 1,
            "Granola Bar Guardian": 0.5,
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
            "Trail Mix Maverick": 2,
            "Energy Bar Explorer": 1,
            "Party Nacho": 0.5,
          },
        },
        {
          id: "b",
          text: "He hands you a basket of timeless, comforting snacks to enjoy forever.",
          weights: {
            "Granola Bar Guardian": 2,
            "Shortbread Classic": 1,
            "Marshmallow Mystic": 0.5,
          },
        },
        {
          id: "c",
          text: "He gives you a magical cookbook, so you can create new treats for all of Snackdom.",
          weights: {
            "Fruit Tart Oracle": 2,
            "Cupcake Cheerleader": 1,
            "Gummy Oracle": 0.5,
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
            "Fruit Tart Oracle": 2,
            "Gummy Oracle": 1,
            "Choco Seeker": 0.5,
          },
        },
        {
          id: "b",
          text: "A surge of excitement, ready to leap into whatever adventure comes next",
          weights: {
            "Trail Mix Maverick": 2,
            "Party Nacho": 1,
            "Popcorn Enthusiast": 0.5,
          },
        },
        {
          id: "c",
          text: "A profound gratitude for the connections, lessons, and memories gathered on your quest",
          weights: {
            "Granola Bar Guardian": 2,
            "Marshmallow Mystic": 1,
            "Rice Cracker Sage": 0.5,
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
  bestWith: string[];
  notSoGoodWith: string[];
  why: string;
  quote: string;
  emoji: string;
};

export const SPIRIT_ALIASES: Record<string, string> = {
  "Choco Seeker": "Dark Chocolate Seeker",
  "Party Nacho": "Nacho Commander",
};

export const SNACK_SPIRITS: Record<string, SnackSpirit> = {
  "Popcorn Enthusiast": {
    name: "Popcorn Enthusiast",
    traits: "Adventurous, Social, Wise",
    tagline: "Wise, adventurous, and social.",
    description:
      "Popcorn is a classic, often shared during social gatherings like movie nights. You're the one who brings people together, leads with curiosity, and loves a good adventure—just like popcorn, which pops up in every fun moment.",
    strengths: "Inspiring, sociable, quick to act",
    quirks: "Sometimes distractible or restless",
    bestWith: ["Cupcake Cheerleader", "Cheese Puff Optimist"],
    notSoGoodWith: ["Rice Cracker Sage"],
    why: "You choose options that show leadership, curiosity, or a love for group fun.",
    quote: "Life is better when shared—especially with snacks!",
    emoji: "🍿",
  },
  "Gummy Bear Dynamo": {
    name: "Gummy Bear Dynamo",
    traits: "Playful, Energetic, Fun-Loving",
    tagline: "Playful, energetic, and fun-loving.",
    description:
      "Like a bag of gummy bears, you bounce through life, bringing color and laughter wherever you go.",
    strengths: "High-energy, joyful, adaptable",
    quirks: "Sometimes unpredictable or scattered",
    bestWith: ["Nacho Commander", "Sour Candy Trickster"],
    notSoGoodWith: ["Granola Bar Guardian"],
    why: "You pick answers that reflect playfulness, love of games, and a desire to make things fun.",
    quote: "Why walk when you can bounce?",
    emoji: "🐻",
  },
  "Dark Chocolate Seeker": {
    name: "Dark Chocolate Seeker",
    traits: "Mysterious, Thoughtful, Deep",
    tagline: "Mysterious, thoughtful, and deep.",
    description:
      "You savor life's complexities, preferring quiet moments and hidden depths—just like dark chocolate, which rewards those who take time to enjoy it.",
    strengths: "Insightful, authentic, introspective",
    quirks: "May seem distant or overthink",
    bestWith: ["Mint Biscuit Coolhead", "Rice Cracker Sage"],
    notSoGoodWith: ["Nacho Commander"],
    why: "You gravitate toward choices that value introspection, mystery, and solving problems quietly.",
    quote:
      "There's always more beneath the surface—if you take the time to savor it.",
    emoji: "🍫",
  },
  "Cupcake Cheerleader": {
    name: "Cupcake Cheerleader",
    traits: "Cheerful, Nurturing, Joy-Spreading",
    tagline: "Cheerful, nurturing, and joy-spreading.",
    description:
      "You're sweet and supportive, always ready to celebrate or comfort a friend—like a cupcake handed out on a special day.",
    strengths: "Uplifting, caring, enthusiastic",
    quirks: "Sometimes avoids conflict or is overly sweet",
    bestWith: ["Popcorn Enthusiast", "Fruit Tart Oracle"],
    notSoGoodWith: ["Dark Chocolate Seeker"],
    why: "You select answers that show kindness, nurturing, and a desire to make others happy.",
    quote: "Sprinkle kindness everywhere you go!",
    emoji: "🧁",
  },
  "Pretzel Warden": {
    name: "Pretzel Warden",
    traits: "Resourceful, Steady, Problem-Solver",
    tagline: "Resourceful, steady, and a problem-solver.",
    description:
      "Like a pretzel with its twists and resilience, you always find a way through challenges.",
    strengths: "Quick-thinking, adaptable, practical",
    quirks: "Can be stubborn or overly cautious",
    bestWith: ["Rice Cracker Sage", "Mint Biscuit Coolhead"],
    notSoGoodWith: ["Sour Candy Trickster"],
    why: "You choose solutions, adapt quickly, and show a knack for untangling tricky situations.",
    quote: "Every twist in life has its purpose.",
    emoji: "🥨",
  },
  "Fruit Tart Oracle": {
    name: "Fruit Tart Oracle",
    traits: "Creative, Inspiring, Colorful",
    tagline: "Creative, inspiring, and colorful.",
    description:
      "You see beauty and possibility everywhere, encouraging others to dream big—just like a fruit tart at the center of a vibrant dessert table.",
    strengths: "Innovative, optimistic, artistic",
    quirks: "Sometimes scattered or impractical",
    bestWith: ["Cupcake Cheerleader", "Gummy Bear Dynamo"],
    notSoGoodWith: ["Granola Bar Guardian"],
    why: "You go for options that reflect creativity, a love for beauty, and inspiring others.",
    quote: "Every day is a blank plate—let's make it beautiful!",
    emoji: "🥧",
  },
  "Nacho Commander": {
    name: "Nacho Commander",
    traits: "Bold, Outgoing, Adventurous",
    tagline: "Bold, outgoing, and adventurous.",
    description:
      "You spice up every gathering, bringing energy and excitement—just like nachos at a lively party.",
    strengths: "Courageous, unifying, high-energy",
    quirks: "Sometimes over-the-top or attention-seeking",
    bestWith: ["Gummy Bear Dynamo", "Sour Candy Trickster"],
    notSoGoodWith: ["Marshmallow Mystic"],
    why: "You select answers that show a love for excitement, group fun, and bold moves.",
    quote: "Life's a fiesta—bring the flavor!",
    emoji: "🌮",
  },
  "Granola Bar Guardian": {
    name: "Granola Bar Guardian",
    traits: "Dependable, Practical, Supportive",
    tagline: "Dependable, practical, and supportive.",
    description:
      "You're the rock everyone can rely on, just like a granola bar that keeps you going on any journey.",
    strengths: "Loyal, steady, prepared",
    quirks: "Sometimes too traditional or resistant to change",
    bestWith: ["Marshmallow Mystic", "Shortbread Classic"],
    notSoGoodWith: ["Sour Candy Trickster"],
    why: "You make choices that show dependability, preparedness, and being the \"rock\" for others.",
    quote: "The best adventures are shared with friends—and snacks.",
    emoji: "🌾",
  },
  "Marshmallow Mystic": {
    name: "Marshmallow Mystic",
    traits: "Gentle, Empathetic, Dreamy",
    tagline: "Gentle, empathetic, and dreamy.",
    description:
      "You bring softness and comfort, helping others feel at ease—like a marshmallow melting into cocoa.",
    strengths: "Compassionate, calming, imaginative",
    quirks: "Sometimes indecisive or avoids confrontation",
    bestWith: ["Granola Bar Guardian", "Rice Cracker Sage"],
    notSoGoodWith: ["Nacho Commander"],
    why: "You choose empathy, gentleness, and a dreamy outlook.",
    quote: "Float softly, dream big, and let worries melt away.",
    emoji: "☁️",
  },
  "Sour Candy Trickster": {
    name: "Sour Candy Trickster",
    traits: "Mischievous, Surprising, Playful",
    tagline: "Mischievous, surprising, and playful.",
    description:
      "You keep life lively and unpredictable, always ready with a twist—just like a sour candy's zing.",
    strengths: "Quick-witted, lively, loves surprises",
    quirks: "Sometimes too mischievous or hard to pin down",
    bestWith: ["Nacho Commander", "Gummy Bear Dynamo"],
    notSoGoodWith: ["Granola Bar Guardian"],
    why: "You go for surprises, mischief, and keeping things lively.",
    quote: "Why be sour about life? Add a little zing!",
    emoji: "🍋",
  },
  "Rice Cracker Sage": {
    name: "Rice Cracker Sage",
    traits: "Calm, Wise, Balanced",
    tagline: "Calm, wise, and balanced.",
    description:
      "You value harmony and simplicity, helping others find peace—like a rice cracker's quiet crunch.",
    strengths: "Mediator, tranquil, wise",
    quirks: "Can be too passive or avoid drama",
    bestWith: ["Marshmallow Mystic", "Pretzel Warden"],
    notSoGoodWith: ["Popcorn Enthusiast"],
    why: "You pick answers that show a preference for harmony, calm, and wisdom.",
    quote: "Sometimes the quietest crunch makes the biggest impact.",
    emoji: "🍘",
  },
  "Energy Bar Explorer": {
    name: "Energy Bar Explorer",
    traits: "Adventurous, Driven, Inspiring",
    tagline: "Adventurous, driven, and inspiring.",
    description:
      "You fuel new journeys, always seeking discovery—like an energy bar powering an explorer.",
    strengths: "Motivates, never gives up, goal-oriented",
    quirks: "Can be restless or impatient",
    bestWith: ["Trail Mix Maverick", "Pretzel Warden"],
    notSoGoodWith: ["Shortbread Classic"],
    why: "You show drive, a love for exploring, and inspiring others to push their limits.",
    quote: "There's a whole world out there—let's get moving!",
    emoji: "⚡",
  },
  "Shortbread Classic": {
    name: "Shortbread Classic",
    traits: "Reliable, Timeless, Loyal",
    tagline: "Reliable, timeless, and loyal.",
    description:
      "You're the steady foundation, bringing comfort and tradition—like a classic shortbread cookie.",
    strengths: "Consistent, trustworthy, stable",
    quirks: "Can resist new ideas or routines",
    bestWith: ["Granola Bar Guardian", "Marshmallow Mystic"],
    notSoGoodWith: ["Trail Mix Maverick"],
    why: "You choose answers that show reliability, loyalty, and a love for tradition.",
    quote: "Some things never go out of style—like kindness and cookies.",
    emoji: "🍪",
  },
  "Mint Biscuit Coolhead": {
    name: "Mint Biscuit Coolhead",
    traits: "Refreshing, Calm, Rational",
    tagline: "Refreshing, calm, and rational.",
    description:
      "You keep your cool and help others relax, bringing clarity to any situation—like a mint biscuit on a warm day.",
    strengths: "Analytical, soothing, reliable",
    quirks: "Can seem aloof or detached",
    bestWith: ["Dark Chocolate Seeker", "Pretzel Warden"],
    notSoGoodWith: ["Cupcake Cheerleader"],
    why: "You pick answers that show calm, logic, and a refreshing perspective.",
    quote: "Stay cool, stay crisp, and everything will fall into place.",
    emoji: "🌿",
  },
  "Gummy Oracle": {
    name: "Gummy Oracle",
    traits: "Flexible, Insightful, Empathetic",
    tagline: "Flexible, insightful, and empathetic.",
    description:
      "You adapt to change and help others do the same, always knowing what's coming next—like a gummy that bends but never breaks.",
    strengths: "Wise, intuitive, adaptable",
    quirks: "Can be indecisive or blend in too much",
    bestWith: ["Fruit Tart Oracle", "Cupcake Cheerleader"],
    notSoGoodWith: ["Shortbread Classic"],
    why: "You pick answers that show flexibility, empathy, and seeing the bigger picture.",
    quote: "Every flavor tells a story—listen closely.",
    emoji: "🔮",
  },
  "Trail Mix Maverick": {
    name: "Trail Mix Maverick",
    traits: "Adventurous, Spontaneous, Bold",
    tagline: "Adventurous, spontaneous, and bold.",
    description:
      "You're always ready for the next horizon, mixing courage with curiosity—like trail mix fueling a wild expedition.",
    strengths: "Fearless, adaptable, always moving forward",
    quirks: "Can be restless or hard to settle down",
    bestWith: ["Energy Bar Explorer", "Popcorn Enthusiast"],
    notSoGoodWith: ["Shortbread Classic"],
    why: "You choose answers that show a hunger for adventure and leaping before you look.",
    quote: "The best paths are the ones you haven't mapped yet.",
    emoji: "🥜",
  },
  "Cheese Puff Optimist": {
    name: "Cheese Puff Optimist",
    traits: "Cheerful, Lighthearted, Upbeat",
    tagline: "Cheerful, lighthearted, and upbeat.",
    description:
      "You float through life with a sunny outlook, lifting spirits wherever you land—like a cheese puff that's impossible not to smile at.",
    strengths: "Positive, warm, easy to be around",
    quirks: "Sometimes avoids heavy topics or tough choices",
    bestWith: ["Popcorn Enthusiast", "Cupcake Cheerleader"],
    notSoGoodWith: ["Dark Chocolate Seeker"],
    why: "You pick answers that spread joy, keep things light, and brighten the room.",
    quote: "Every day is a little puff of happiness waiting to happen.",
    emoji: "✨",
  },
};

