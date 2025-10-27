import Image from "next/image";
import { coach } from "@/app/data/coaches";

export default function CoachesCard({ coach }: { coach: coach }) {
  return (
    <div className="w-[325px] h-[475px] bg-dark-gray p-3">
      <div className="radial-gradient h-full rounded-lg border border-primary flex flex-col py-2">
        <div className="flex items-start justify-between">
          <div></div>
          <div className="text-white font-oswald bg-secondary rounded-lg px-1">
            {coach.title}
          </div>
          <div className="flex flex-col items-center pr-2">
            {"皮耶罗玛".split("").map((letter, i) => (
              <span key={i} className="font-oswald text-white text-xl">
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div className="-mt-24 mx-auto">
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
        <div className="grid grid-cols-3 place-items-center py-6 px-1">
          {Object.entries(coach.stats).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <div className="font-oswald text-white bg-primary rounded-lg px-1">
                {key}
              </div>
              <div className="text-center font-pirata text-white text-3xl">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
