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
    name: "Craig Sampson",
    image: "/headshotCS.png",
    title: "Assistant MMA & Wrestling coach",
    classes: ["MMA,", "Wrestling"],
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
];
