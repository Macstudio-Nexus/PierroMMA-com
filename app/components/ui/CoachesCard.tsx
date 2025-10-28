import Image from "next/image";
import { coach } from "@/app/data/coaches";
import logo from "@/public/logo-white-bg.svg";

export default function CoachesCard({ coach }: { coach: coach }) {
  return (
    <div className="w-[325px] h-[475px] [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] cursor-pointer">
        {/* FRONT FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-dark-gray p-3">
          <div className="radial-gradient h-full rounded-lg border border-primary flex flex-col py-2">
            <div className="relative flex justify-center">
              <div className="text-white font-oswald bg-secondary rounded-lg px-2">
                {coach.title}
              </div>
              <div className="absolute right-2 top-0 flex flex-col items-center">
                {"皮耶罗玛".split("").map((letter, i) => (
                  <span key={i} className="font-oswald text-white text-xl">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="mx-auto">
              <Image
                src={coach.image}
                alt={coach.name}
                height={100}
                width={100}
                className="h-50 w-auto"
              />
            </div>
            <div className="text-white font-pirata text-5xl bg-secondary py-1 text-center">
              {coach.name}
            </div>
            <div className="grid grid-cols-3 place-items-center items-start py-6 px-1">
              {Object.entries(coach.stats).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <div className="font-oswald text-white text-center bg-primary rounded-lg px-1">
                    {key}
                  </div>
                  <div
                    className={`text-center font-pirata text-white text-3xl whitespace-nowrap ${
                      key === "Special Move" ? "text-xl pt-1" : ""
                    }`}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-dark-gray p-3">
          <div className="radial-gradient h-full rounded-lg border border-primary flex flex-col py-2">
            <div className="relative h-full">
              <Image
                src={logo}
                alt="Pierro MMA Logo"
                fill
                className="object-contain opacity-15"
              />

              <div className="relative z-10 h-full p-4 flex flex-col justify-center ">
                <p className="text-white font-oswald !text-[14px] text-center bg-secondary/80 p-3 rounded-lg">
                  {coach.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
