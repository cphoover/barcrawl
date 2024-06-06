const objectivesData = [
  {
    id: "photo-with-doppleganger",
    title: "Twinning!",
    description:
      "Find and take a photo with someone who looks just like the groom.",
    points: 100,
  },
  {
    id: "karaoke-solo",
    title: "Karaoke Star",
    description: "Sing a love song solo in a crowded karaoke bar.",
    points: 150,
  },
  {
    id: "dance-off",
    title: "Dance Off",
    description: "Challenge a stranger to a dance off.",
    points: 150,
  },
  {
    id: "fake-proposal",
    title: "Pseudo Proposal",
    description: "Stage a fake proposal in a public place.",
    points: 200,
  },
  {
    id: "costume-change",
    title: "Costume Swap",
    description: "Swap an item of clothing with a stranger.",
    points: 100,
  },
  {
    id: "strange-accent",
    title: "Accentuate The Strange",
    description: "Order a drink using a fake accent.",
    points: 50,
  },
  {
    id: "find-a-celeb",
    title: "Celebrity Hunt",
    description:
      "Convince someone they’re a celebrity lookalike and take a selfie.",
    points: 150,
  },
  {
    id: "conga-line",
    title: "Conga Leader",
    description: "Start a conga line in a bar.",
    points: 100,
  },
  {
    id: "midnight-snack",
    title: "Midnight Munchies",
    description: "Secure a snack from a 24-hour diner after midnight.",
    points: 50,
  },

  {
    id: "take-a-shot",
    title: "Shot Caller",
    description: "Take a shot of any liquor of your choice.",
    points: 50,
  },
  {
    id: "see-boobs",
    title: "Boob Gazer",
    description: "Catch a glimpse of a topless lady!",
    points: 100,
  },
  {
    id: "lapdance",
    title: "Get a Lapdance",
    description:
      "Experience a cheeky lapdance from a professional. Remember, it's all in good fun!",
    points: 100,
  },
  {
    id: "pay-lapdance",
    title: "Lapdance Benefactor",
    description:
      "Treat yourself or a friend to a lapdance. It’s all about the fun vibes!",
    points: 200,
  },
  {
    id: "catch-a-fish",
    title: "Bonafide Waterbilly",
    description: "Catch a fish out of the bay or its surrounding rivers.",
    points: 150,
  },
  {
    id: "giant-slayer",
    title: "Giant Slayer",
    description: "Catch the biggest fish on the trip.",
    points: 500,
  },
  {
    id: "get-a-boner",
    title: "Awkward Woody",
    description: "Get an embarrassing reaction to an exciting moment.",
    points: 100,
  },
  {
    id: "malort-at-spirits",
    title: "Spirit of Malört",
    description: "Do a shot of Malört at Spirits bar.",
    points: 300,
  },
  {
    id: "witness-fight-fells",
    title: "Fight Night",
    description: "Witness a fight in downtown Fells Point.",
    points: 150,
  },
  {
    id: "breakup-fight-fells",
    title: "Peacekeeper",
    description: "Break up a fight in downtown Fells Point.",
    points: 200,
  },
  {
    id: "new-beer",
    title: "Beer Explorer",
    description: "Drink a beer you’ve never tried before.",
    points: 50,
  },
  {
    id: "selfie-with-rat",
    title: "Rat Selfie",
    description: "Take a selfie with a rat, dead or alive.",
    points: 100,
  },
  {
    id: "see-johnson",
    title: "Johns(on) Spotting",
    description: "See someone's Johnson, intentionally or accidentally.",
    points: 150,
  },
  {
    id: "fells-point-trio",
    title: "Fells Point Pub Crawler",
    description: "Stop at three different bars in Fells Point.",
    points: 100,
  },
];

export const objectivesMap = objectivesData.reduce((acc, objective) => {
  acc[objective.id] = objective;
  return acc;
}, {});

export const getObjectiveById = (id) =>
  objectivesData.find((objective) => objective.id === id);

export const sortedObjectives = objectivesData.sort(
  (a, b) => b.points - a.points
);

export const getNotification = (type, username) => {
  if (!type) return;
  const message = notificationsMap[type];
  return message?.replace?.("__username__", username || "");
};
export const notificationsMap = {
  "malort-shot":
    "__username__ just took a shot of Malört! Capture the epic reaction!",
  "photo-with-doppleganger":
    "__username__ found their doppelgänger! Twinsies photo taken!",
  "karaoke-solo":
    "__username__ just rocked a solo love song at karaoke! Crowd's going wild!",
  "dance-off":
    "__username__ challenged someone to a dance-off! Let's see those moves!",
  "fake-proposal":
    "__username__ just staged a fake proposal! Did they say yes?",
  "costume-change":
    "__username__ swapped clothes with a stranger! Fashionista alert!",
  "strange-accent":
    "__username__ just ordered a drink with the strangest accent!",
  "find-a-celeb":
    "__username__ convinced someone they're a celebrity lookalike and got a selfie!",
  "conga-line": "__username__ started a conga line! Join the party train!",
  "midnight-snack": "__username__ grabbed some midnight munchies from a diner!",
  "take-a-shot": "__username__ just took a shot of their choice! Cheers!",
  "see-boobs": "__username__ saw some titties!",
  "catch-a-fish":
    "__username__ turned is a bonafide waterbilly what a whopper!",
  "get-a-boner": "__username__ just got a boner!",
  "malort-at-spirits": "__username__ braved a shot of Malört at Spirits bar!",
  "witness-fight-fells":
    "__username__ witnessed a fight in downtown Fells Point!",
  "breakup-fight-fells":
    "__username__ played peacekeeper and broke up a fight in Fells Point!",
  "new-beer": "__username__ explored and tried a new beer!",
  "selfie-with-rat": "__username__ took a daring selfie with a rat!",
  "see-johnson": "__username__ had a Johns(on) spotting adventure!",
  "catch-a-fish":
    "__username__ just caught a monstrous fish! Biggest catch of the day!",
  "fells-point-trio":
    "__username__ just completed the Fells Point pub crawl! Three bars down!",
  lapdance: "__username__ just experienced a cheeky lapdance! What a night!",
  "pay-lapdance":
    "__username__ just treated someone to a lapdance! Spreading the fun vibes!",
};

export default sortedObjectives;
