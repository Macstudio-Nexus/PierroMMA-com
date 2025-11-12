import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div
        id="home"
        className="relative bg-secondary/25 min-h-95 sm:min-h-120 h-fit overflow-visible pb-6"
      >
        <Image
          src="/hero.svg"
          alt="Hero background"
          width={351}
          height={406}
          className="absolute right-0 -top-10 sm:-top-25 h-105 sm:h-135 md:h-145 w-auto "
        />
        <div className="relative flex flex-col items-start justify-between gap-5 w-full px-4 xl:px-40">
          <div className="flex items-center justify-center gap-4">
            <span className="h-30 xl:h-38 bg-primary w-[3px]" />
            <h1>Staten Island&apos;s Premier Mixed Martial Arts Team</h1>
          </div>
          <div>
            <h4 className=" max-w-4xl">
              World class coaching combined with state-of-the-art facilities
              provide the perfect environment to master MMA, BJJ, Kickboxing and
              more.
            </h4>
          </div>
          <div className="flex items-start justify-center gap-6 pt-4">
            <PrimaryButton text="Learn More" link="#schedule" />
            <SecondaryButton text="Get Started" link="#contact" />
          </div>
        </div>
      </div>
    </>
  );
}
