export interface coach {
  name: string;
  image: string;
  title: string;
  classes: string[];
  stats: {
    Striking: string;
    Submissions: string;
    Wrestling: string;
    Strength: string;
    Defense: string;
    "Special Move": string;
  };
  bio: string;
}

export const coaches: coach[] = [
  {
    name: "Johnny Pierro",
    image: "/headshots/",
    title: "Head MMA Coach",
    classes: ["MMA,", "BJJ", "PT"],
    stats: {
      Striking: "99",
      Submissions: "90",
      Wrestling: "99",
      Strength: "80",
      Defense: "95",
      "Special Move": "Arm triangle",
    },
    bio: "Coach Johnny has extensive training in a wide range of martial arts. He began his journey at just 16 years old, training at UFC Gym Staten Island, and has been dedicated to the fight game ever since. At 24, Johnny earned his Black Belt in Brazilian Jiu-Jitsu under Professor Marcio Bittencourt (IBJJF). Over the years, he has won numerous grappling competitions across every BJJ belt level and currently holds multiple titles: the 170lb Kickboxing Championship, the 170lb and 165lb MMA titles for Jackhammer Promotions, and the 165lb WRSA NY State MMA title. Beyond his own achievements, Coach Johnny has guided countless students to championship victories in MMA, kickboxing, boxing, and submission grappling, continuing to inspire and build the next generation of fighters.",
  },
  {
    name: "Craig Sampson",
    image: "/headshots/CS.png",
    title: "Assistant MMA & Wrestling coach",
    classes: ["MMA,", "Wrestling", "PT"],
    stats: {
      Striking: "65",
      Submissions: "90",
      Wrestling: "99",
      Strength: "80",
      Defense: "95",
      "Special Move": "D'arce",
    },
    bio: "Coach Craig brings over a decade of wrestling experience to the team. A 2022 graduate of Johnson & Wales University, he wrestled all four years and earned Academic All-American honors twice. After returning home, he joined our program as a coach in 2023. In addition to wrestling, he is an active competitor in Brazilian Jiu-Jitsu and Judo, bringing a wealth of grappling knowledge to the squad.",
  },
  {
    name: "Mike Carim",
    image: "/headshots/",
    title: "Assistant MMA & Judo coach",
    classes: ["MMA,", "BJJ"],
    stats: {
      Striking: "90",
      Submissions: "90",
      Wrestling: "99",
      Strength: "80",
      Defense: "95",
      "Special Move": "Power Bottom",
    },
    bio: "",
  },
  {
    name: "Vincent Pagnotta",
    image: "/headshots/",
    title: "Assistant MMA coach",
    classes: ["MMA,", "PT"],
    stats: {
      Striking: "65",
      Submissions: "90",
      Wrestling: "99",
      Strength: "80",
      Defense: "95",
      "Special Move": "Sidekick",
    },
    bio: "",
  },
  {
    name: "Nick Volpe",
    image: "/headshots/",
    title: "Brazilian Jiu Jitsu Coach",
    classes: ["BJJ"],
    stats: {
      Striking: "65",
      Submissions: "90",
      Wrestling: "99",
      Strength: "80",
      Defense: "95",
      "Special Move": "",
    },
    bio: "",
  },
];
