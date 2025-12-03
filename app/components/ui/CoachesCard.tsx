"use client";

import Image from "next/image";
import { coach } from "@/app/data/coaches";
import logo from "@/public/logo-white-bg.webp";
import { useState } from "react";

export default function CoachesCard({ coach }: { coach: coach }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="bg-black border-2 border-primary w-[350px] lg:w-[450px] h-fit px-4 pb-4 flex flex-col items-center relative overflow-visible">
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] [will-change:transform] cursor-pointer overflow-visible ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="[backface-visibility:hidden]">
          <div className="grid grid-cols-[75px_1fr]">
            <div className="bg-black flex items-center justify-center border-l border-primary">
              <span className="text-[60px] lg:text-[65px] text-white font-bangers upppercase [writing-mode:vertical-rl] rotate-180 tracking-wide">
                {coach.name}
              </span>
            </div>
            <div className="flex items-center justify-center overflow-hidden border-r border-primary">
              <Image
                alt={coach.name}
                src={coach.image.path}
                height={coach.image.height}
                width={coach.image.width}
                className="object-cover h-110 lg:h-150 w-full"
              />
            </div>
          </div>
          <div className="flex items-start justify-start w-full">
            <div className="bg-primary text-off-black text-lg lg:text-2xl font-oswald w-full pl-2 mr-14 py-1">
              {coach.title}
            </div>
          </div>
          <div
            className={`absolute bottom-0 -right-2 bg-white rounded-full p-1 border-5 border-primary ${
              isFlipped && "hidden"
            }`}
          >
            <Image
              src={logo}
              alt="Pierro MMA Logo"
              height={279}
              width={397}
              className="size-27 object-contain"
            />
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border-x border-b border-primary flex flex-col items-center justify-center overflow-visible px-5 pt-4">
          <div className="flex items-start justify-end w-full">
            <div className="bg-primary text-off-black font-bold text-xl lg:text-2xl font-oswald pl-10 lg:pl-12 pr-2 pt-1 pb-2 w-52 lg:w-[300px] [clip-path:polygon(38px_0,100%_0,100%_100%,0_100%)]">
              {coach.name}
            </div>
          </div>
          <div className="relative bg-black -mt-1 w-full text-white font-oswald h-[360px] lg:h-[450px] overflow-visible [clip-path:polygon(75px_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%,0_75px)]">
            <div className="w-[250px] lg:w-[350px] text-sm lg:text-[17px] ml-3 lg:ml-4 pt-18 lg:pt-20">
              <div>{coach.bio}</div>
              {/* <div className="pt-3 ">{coach.pt}</div> */}
            </div>
          </div>

          <div className="absolute top-[40px] lg:top-[70px] left-2 bg-white rounded-full p-1 border-5 border-primary">
            {coach.logo ? (
              <Image
                src={coach.logo.path}
                alt="Pierro MMA Logo"
                height={coach.logo.height}
                width={coach.logo.width}
                className="w-23 h-23 lg:w-25 lg:h-25 object-contain"
              />
            ) : (
              <Image
                src={logo}
                alt="Pierro MMA Logo"
                height={100}
                width={100}
                className="size-23 lg:size-25 object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
