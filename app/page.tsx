import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[99vh] flex-col items-center justify-center mx-3">
      <div className="flex flex-col items-center rounded-lg bg-gradient-to-l from-primary to-secondary border-2 border-black w-fit py-4 px-8 max-w-xl xl:max-w-3xl xl:py-8 2xl:py-15 transform hover:scale-110 transition-transform duration-600 ">
        <Image
          src="/pierromma.png"
          priority
          alt="Pierro MMA Logo"
          width={930}
          height={1560}
          className="h-80 w-auto"
        />
        <h2 className="text-4xl sm:text-5xl lg:text-7xl mt-3 text-off-black text-center font-pirata">
          Site coming soon!
        </h2>
        <p className="text-center font-cinzel p-4 bg-off-black rounded-lg text-white mt-4 text-md sm:text-xl">
          Available for MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing and personal fitness
          training
        </p>
        <p className="text-3xl sm:text-4xl font-cinzel font-bold pt-4">(646)-923-2215</p>
      </div>
    </div>
  );
}
