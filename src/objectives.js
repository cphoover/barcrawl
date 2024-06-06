const objectivesData = [
  {
    id: "malort-shot",
    title: "The Malört Face",
    description: "Take a shot of Malört and capture the reaction.",
    points: 50,
  },
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
  return message.replace("__username__", username || "");
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
};

export default sortedObjectives;
