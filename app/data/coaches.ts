export interface coach {
  name: string;
  image: {
    path: string;
    height: number;
    width: number;
  };
  title: string;
  classes: string[];
  bio: string;
}

export const coaches: coach[] = [
  {
    name: "Johnny Pierro",
    image: { path: "/headshots/CS.png", height: 2496, width: 4040 },
    title: "Head MMA Coach",
    classes: ["MMA,", "BJJ", "PT"],
    bio: "",
  },
  {
    name: "Craig Sampson",
    image: { path: "/headshots/CS.png", height: 2496, width: 4040 },
    title: "Assistant MMA & Wrestling coach",
    classes: ["MMA,", "Wrestling", "PT"],
    bio: "Coach Craig brings over a decade of wrestling experience to the team. A 2022 graduate of Johnson & Wales University, he wrestled all four years and earned Academic All-American honors twice. After returning home, he joined our program as a coach in 2023. In addition to wrestling, he is an active competitor in Brazilian Jiu-Jitsu and Judo, bringing a wealth of grappling knowledge to the squad.",
  },
  {
    name: "Mike Carim",
    image: { path: "/headshots/CS.png", height: 2496, width: 4040 },
    title: "Assistant MMA & Judo coach",
    classes: ["MMA,", "BJJ"],
    bio: "",
  },
  {
    name: "Vincent Pagnotta",
    image: { path: "/headshots/CS.png", height: 2496, width: 4040 },
    title: "Assistant MMA coach",
    classes: ["MMA,", "PT"],
    bio: "",
  },
  {
    name: "Nick Volpe",
    image: { path: "/headshots/CS.png", height: 2496, width: 4040 },
    title: "Brazilian Jiu Jitsu Coach",
    classes: ["BJJ"],
    bio: "",
  },
];
