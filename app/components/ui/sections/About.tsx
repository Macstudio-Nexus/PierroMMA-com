import CoachesCard from "../CoachesCard";
import { coaches } from "@/app/data/coaches";

export default function About() {
  return (
    <div id="about" className="w-full flex justify-center md:my-20 scroll-mt-20 xl:scroll-mt-45">
      <div className="bg-white max-w-xl lg:max-w-5xl 2xl:max-w-6xl h-fit m-3 px-1 py-1 flex flex-col items-center justify-center gap-3">
        <div className="p-2 border-2 border-off-black w-full flex flex-col items-center justify-center gap-1">
          <h2 className="whitespace-nowrap">the best in the game</h2>
          <p className="!text-black text-center !font-normal">
            Our coaching staff brings years of fighting, competition, and
            teaching experience to every class. Each coach is dedicated to
            helping you reach your goals — whether you&apos;re training for
            fitness, competition, or self-defense — in a supportive, high-level
            environment.
          </p>
        </div>
        <div className="py-4 text-center animate-pulse ">
          <h3 className="!text-primary">click each card to learn more!</h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-center ">
          {coaches.map((coach) => (
            <CoachesCard key={coach.name} coach={coach} />
          ))}
        </div>
      </div>
    </div>
  );
}
