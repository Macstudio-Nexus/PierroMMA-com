import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Hero() {
  return (
    <>
      <div id="home" className="bg-secondary/25 h-screen -mt-[104px] bg-[url('/hero.svg')] bg-cover bg-center">
        <div className="flex flex-col items-start justify-between gap-5 pt-[110px] w-full px-4">
          <div className="flex items-center justify-center gap-4">
            <span className="h-30 bg-primary w-[3px]" />
            <h1>Staten Island's Premier Mixed Martial Arts Team</h1>
          </div>
          <div>
            <h4 className=" max-w-4xl">
              World class coaching combined with state-of-the-art facilities
              provide the perfect environment to master MMA, BJJ, Kickboxing and
              more.
            </h4>
          </div>
          <div className="flex items-start justify-center gap-6 pt-4">
            <PrimaryButton text="Learn More" link="#schedule"/>
            <SecondaryButton text="Get Started" link="#contact"/>
          </div>
        </div>
      </div>
    </>
  );
}
