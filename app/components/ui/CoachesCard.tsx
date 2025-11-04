import Image from "next/image";
import { coach } from "@/app/data/coaches";
import logo from "@/public/logo-white-bg.svg";

export default function CoachesCard({ coach }: { coach: coach }) {
  return (
    <>
      <div className="bg-white border border-black w-[400px] h-[500px]">
        <div
          className="flex items-start justify-between px-2 pt-2
        "
        >
          <div className="flex flex-col items-start gap-2">
            <Image
              src={logo}
              alt="Pierro MMA Logo"
              height={100}
              width={100}
              className="w-auto h-25"
            />
            <span className="font-oswald max-w-[150px] text-[12px] ">
              {coach.bio}
            </span>
          </div>
          <div className="">
            <Image
              alt={coach.name}
              src={coach.image.path}
              height={coach.image.height}
              width={coach.image.width}
              className="w-auto h-90"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          <div className="bg-secondary text-white text-center w-full text-[55px] whitespace-nowrap font-bangers tracking-wide">
            {coach.name}
          </div>
          <div className="flex items-center justify-between bg-black text-white font-oswald w-[370px] mx-auto px-4 py-1">
            <div>
              {coach.title}
            </div>
            <div>
              Pierro MMA
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
