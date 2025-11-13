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
  logo?: string;
  pt: string;
}

export const coaches: coach[] = [
  {
    name: "Johnny Pierro",
    image: { path: "/headshots/JP.png", height: 875, width: 543 },
    title: "Head MMA Coach",
    classes: ["MMA,", "BJJ", "PT"],
    bio: "",
    pt: "Coach Johnny is available for personal training in MMA, BJJ, kickboxing, boxing and personal fitness",
  },
  {
    name: "Craig Sampson",
    image: { path: "/headshots/CS.png", height: 4040, width: 2496 },
    title: "Assistant MMA/Wrestling coach",
    classes: ["MMA,", "Wrestling", "PT"],
    logo: "/headshots/CSLogo.png",
    bio: "Coach Craig brings over a decade of wrestling experience to the team. A 2022 graduate of Johnson & Wales University, he wrestled all four years and earned Academic All-American honors twice. After returning home, he joined our program as a coach in 2023. In addition to wrestling, he is an active competitor in Brazilian Jiu-Jitsu and Judo, bringing a wealth of grappling knowledge to the squad.",
    pt: "Coach Craig is available for personal training in wrestling and BJJ",
  },
  {
    name: "Mike 'the don' Carim",
    image: { path: "/headshots/MC.JPG", height: 4897, width: 2713 },
    title: "Assistant MMA & Judo coach",
    classes: ["MMA,", "BJJ"],
    bio: "",
    pt: "",
  },
  {
    name: "Vin Pagnotta",
    image: { path: "/headshots/VP.JPEG", height: 2496, width: 4040 },
    title: "Assistant MMA coach",
    classes: ["MMA,", "PT"],
    bio: "",
    pt: "Coach Vin is available for personal training in MMA, BJJ, kickboxing, wrestling and personal fitness",
  },
  {
    name: "Nick Volpe",
    image: { path: "/headshots/NV.png", height: 2496, width: 4040 },
    title: "Brazilian Jiu Jitsu Coach",
    classes: ["BJJ"],
    bio: "",
    pt: "",
  },
];
