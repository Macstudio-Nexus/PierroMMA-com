import Image from "next/image";
import { PierroImage, ClassesImages } from "@/app/data/images";

function ClassesImage({
  image,
  alt,
  height,
  width,
  className = "",
}: PierroImage & { className?: string }) {
  return (
    <div
      className={`flex items-center justify-end bg-secondary border-2 border-black overflow-hidden h-full ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        height={height}
        width={width}
        className="w-full h-auto -mb-1"
      />
    </div>
  );
}

export default function Classes() {
  return (
    <div className="w-full flex justify-center md:my-20">
      <div className="bg-white max-w-xl lg:max-w-4xl 2xl:max-w-6xl h-fit m-3 p-3 flex flex-col items-center justify-center gap-3">
        <div className="p-2 border-2 border-off-black w-full flex flex-col items-center justify-center gap-2">
          <h2 className="whitespace-nowrap">master multiple disciplines</h2>
          <p className="!text-black text-center !font-normal">
            We offer a full range of martial arts disciplines taught by
            experienced coaches. Whether you&apos;re a beginner looking to learn
            the fundamentals or an experienced fighter sharpening your skills,
            our classes provide world-class training in a motivating and
            team-oriented environment.
          </p>
        </div>

        {/* Classes start here */}

        {/* MMA */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <ClassesImage
            image={ClassesImages[0].image}
            alt={ClassesImages[0].alt}
            height={ClassesImages[0].height}
            width={ClassesImages[0].width}
            className="lg:w-3/5"
          />
          <div className="classes-text lg:w-2/5">
            <h3>mixed martial arts</h3>
            <p className="">
              Our MMA program combines the best techniques from striking,
              grappling, and conditioning to create complete, well-rounded
              fighters. Whether you&apos;re training for competition or simply
              looking to challenge yourself, our classes focus on real-world
              application, discipline, and improvement in every session. Learn
              from experienced coaches and train alongside motivated athletes in
              a supportive, high-energy environment.
            </p>
          </div>
        </div>

        {/* Kickboxing  */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <div className="classes-text lg:w-2/5">
            <h3>Kickboxing/Muay Thai</h3>
            <p>
              Brazilian Jiu-Jitsu is a ground-based martial art focused on
              leverage, technique, and control rather than strength. Our BJJ
              classes teach effective takedowns, submissions, and positional
              strategy to help you gain confidence and mastery on the mat.
              Whether you&apos;re training for competition, self-defense, or
              overall fitness, our experienced coaches will guide you every step
              of the way in a safe, supportive environment.
            </p>
          </div>
          <ClassesImage
            image={ClassesImages[1].image}
            alt={ClassesImages[1].alt}
            height={ClassesImages[1].height}
            width={ClassesImages[1].width}
            className="lg:w-3/5"
          />
        </div>

        {/* BJJ  */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <ClassesImage
            image={ClassesImages[2].image}
            alt={ClassesImages[2].alt}
            height={ClassesImages[2].height}
            width={ClassesImages[2].width}
            className="lg:w-3/5"
          />
          <div className="classes-text lg:w-2/5">
            <h3>Brazilian Jiu Jitsu</h3>
            <p>
              Brazilian Jiu-Jitsu is a ground-based martial art focused on
              leverage, technique, and control rather than strength. Our BJJ
              classes teach effective takedowns, submissions, and positional
              strategy to help you gain confidence and mastery on the mat.
              Whether you&apos;re training for competition, self-defense, or
              overall fitness, our experienced coaches will guide you every step
              of the way in a safe, supportive environment.
            </p>
          </div>
        </div>

        {/* Wrestling  */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <div className="classes-text lg:w-2/5">
            <h3>Wrestling</h3>
            <p>
              Wrestling builds the foundation for strength, control, and
              dominance. It&apos;s no coincidence that most UFC champions come
              from a wrestling background. Our program focuses on technique,
              conditioning, and mental toughness to help you develop the skills
              that translate to success in competition and life.
            </p>
          </div>
          <ClassesImage
            image={ClassesImages[3].image}
            alt={ClassesImages[3].alt}
            height={ClassesImages[3].height}
            width={ClassesImages[3].width}
            className="lg:w-3/5"
          />
        </div>

        {/* PT  */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <ClassesImage
            image={ClassesImages[4].image}
            alt={ClassesImages[4].alt}
            height={ClassesImages[4].height}
            width={ClassesImages[4].width}
            className="lg:w-3/5"
          />
          <div className="classes-text lg:w-2/5">
            <h3>Personal training</h3>
            <p>
              Take your fitness and skills to the next level with one-on-one
              coaching tailored to your goals. Whether you&apos;re looking to
              improve strength, conditioning, technique, or overall athletic
              performance, our coaches will create a customized plan designed
              just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
