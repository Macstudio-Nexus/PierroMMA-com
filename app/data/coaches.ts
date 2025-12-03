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
  logo?: {
    path: string;
    height: number;
    width: number;
  };
  pt: string;
}

export const coaches: coach[] = [
  {
    name: "Johnny Pierro",
    image: { path: "/headshots/JP.png", height: 875, width: 543 },
    title: "Head MMA Coach",
    classes: ["MMA,", "BJJ", "PT"],
    bio: "Johnny Pierro is a lifelong martial artist with training in boxing, kickboxing, Muay Thai, karate, wrestling, judo, and Brazilian Jiu-Jitsu. In June 2021, he earned his BJJ black belt at age 24 under Professor Marcio Bittencourt. Johnny is a multi-division champion, winning titles in grappling at every belt level and currently holding the 170 lb Kickboxing title, the 170 lb and 165 lb MMA titles for Jackhammer Promotions, and the 165 lb WRSA New York State MMA title. Beyond competing, he is a dedicated coach who has led athletes to championship success across MMA, kickboxing, boxing, and submission grappling.",
    pt: "Coach Johnny is available for personal training in MMA, BJJ, kickboxing, boxing and personal fitness",
  },
  {
    name: "Craig Sampson",
    image: { path: "/headshots/CS.webp", height: 4040, width: 2496 },
    title: "Assistant MMA/Wrestling coach",
    classes: ["MMA,", "Wrestling", "PT"],
    logo: { path: "/headshots/CSLogo.png", height: 563, width: 563 },
    bio: "Coach Craig brings over a decade of wrestling experience to the team. A 2022 graduate of Johnson & Wales University, he wrestled all four years and earned Academic All-American honors twice. After returning home, he joined our program as a coach in 2023. In addition to wrestling, he is an active competitor in Brazilian Jiu-Jitsu and Judo, bringing a wealth of grappling knowledge to the squad.",
    pt: "Coach Craig is available for personal training in wrestling and BJJ",
  },
  {
    name: "Mike Carim",
    image: { path: "/headshots/MC.JPG", height: 4897, width: 2713 },
    title: "Assistant MMA & Judo coach",
    classes: ["MMA,", "BJJ"],
    bio: "Sensei Mike served in the United States Coast Guard for 6 ½ years (honorably discharged). He has been training with Dento Teki Na since February 2016. His prior experience includes Muay Thai, boxing, grappling, kickboxing, MMA, and weapons defense all of which complement his training and instructing. He competes in tournaments up and down the East Coast. He has also competed in Kickboxing/MMA bouts and has his Amateur MMA card.",
    pt: "",
  },
  {
    name: "Vin Pagnotta",
    image: { path: "/headshots/VP.JPEG", height: 3024, width: 4032 },
    title: "Assistant MMA coach",
    classes: ["MMA,", "PT"],
    bio: "Coach Vin began his martial arts journey in Goju Ryu Karate and Japanese Jujutsu, earning his 4th-degree black belt after 18 years of dedication. In high school, he competed on the wrestling team for four years and finished as the PSAL City Finals runner-up at 182 lbs his senior year. During college, he started training Brazilian Jiu-Jitsu and is currently a blue belt. Today, Coach Vin is a competitive amateur MMA fighter with a 4–1 record and is the reigning bantamweight champion for Jackhammer Promotions.",
    pt: "Coach Vin is available for personal training in MMA, BJJ, kickboxing, wrestling and personal fitness",
  },
  {
    name: "Nick Volpe",
    image: { path: "/headshots/NV.png", height: 2316, width: 3088 },
    title: "Brazilian Jiu Jitsu Coach",
    classes: ["BJJ"],
    logo: { path: "/headshots/NVLogo.png", height: 4608, width: 2304 },
    bio: "Coach Nick is a first degree Brazilian Jiu Jitsu black belt under Marcio Bittencourt with experience in mma, Muay Thai, judo, and wrestling. Beginning his training in 2012, Coach Nick now runs the Dark Bear BJJ program at Dento Teki Na. He is also the grappling coach for the NYC Armored Combat Team and an armored combat fighter. After competitive success in BJJ, Olympic style fencing, and armored combat, his attention is focused on effective coaching methods to drive development of the next generation of grapplers and fighters.",
    pt: "",
  },
];
