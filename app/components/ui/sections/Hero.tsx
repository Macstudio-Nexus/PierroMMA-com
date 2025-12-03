import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className=" relative bg-secondary/25 pt-[20px] xl:pt-[150px] h-fit overflow-visible pb-6 flex items-center w-full justify-center"
    >
      <Image
        src="/bjj-staten-island.svg"
        alt="staten island mma, staten island bjj"
        width={351}
        height={406}
        priority
        fetchPriority="high"
        className="absolute right-0 md:right-20 xl:right-40 2xl:right-90 bottom-0 -mb-1 h-100 lg:h-120 2xl:h-150 w-auto "
      />
      <div className="relative flex flex-col items-start justify-between gap-5 w-fit max-w-2xl xl:max-w-5xl 2xl:max-w-7xl py-4 px-4 xl:px-40">
        <div className="flex items-center justify-center gap-4">
          <h1 className="border-l-2 md:border-l-3 pl-5 border-primary">
            Staten Island&apos;s Premier Mixed Martial Arts Program
          </h1>
        </div>
        <div>
          <h2 className="!font-oswald !text-xl lg:!text-2xl 2xl:!text-4xl !font-medium !leading-normal !text-white max-w-4xl">
            World class coaching combined with state-of-the-art facilities
            provide the perfect environment to master MMA, BJJ, and more in
            Staten Island.
          </h2>
        </div>
        <div className="flex items-start justify-center gap-6 pt-4">
          <PrimaryButton text="Learn More" link="#schedule" />
          <SecondaryButton text="Get Started" link="#contact" />
        </div>
      </div>
    </section>
  );
}
