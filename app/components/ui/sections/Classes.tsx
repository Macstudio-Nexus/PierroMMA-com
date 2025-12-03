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
        className="w-full h-full object-cover -mb-1"
      />
    </div>
  );
}

export default function Classes() {
  return (
    <section id="classes" className="w-full flex justify-center md:my-20 scroll-mt-20 xl:scroll-mt-45">
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
              Our Staten Island MMA program combines striking, grappling, and
              conditioning to create complete fighters. Join a high-energy training community
              where discipline meets performance.
              Learn to seamlessly transition between ranges—from long-range
              striking to clinch work to ground control. Our comprehensive
              approach covers stand-up fighting, takedowns, takedown defense, and
              submission techniques, giving you the versatility needed in modern
              combat sports. All skill levels welcome, from absolute beginners to
              active competitors.
            </p>
          </div>
        </div>

        {/* Kickboxing  */}
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-3">
          <div className="classes-text lg:w-2/5">
            <h3>Kickboxing/Muay Thai</h3>
            <p>
              Master the art of eight limbs with our kickboxing and Muay Thai
              program. Develop devastating striking combinations using punches,
              kicks, elbows, and knees while building explosive power and cardio
              conditioning. Perfect for fitness enthusiasts and competitive
              fighters alike, our Staten Island kickboxing classes deliver
              results through proven technique and intense training.
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
              Learn the gentle art at Staten Island&apos;s premier BJJ program.
              This ground-based martial art emphasizes leverage and technique over
              raw strength, teaching you effective takedowns, submissions, and
              positional control. Build confidence and skill on the mat through
              systematic instruction in this proven self-defense system that works
              for practitioners of all sizes and athletic abilities.
            </p>
          </div>
        </div>

        {/* Wrestling  */}
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-3">
          <div className="classes-text lg:w-2/5">
            <h3>Wrestling</h3>
            <p>
              Build the foundation that creates champions. Most UFC title holders
              share a wrestling background for good reason, it develops unmatched
              control, takedown ability, and physical dominance. Our wrestling
              program sharpens your technique and mental fortitude through
              rigorous training that carries over to all aspects of combat sports
              and daily life.
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
              Accelerate your progress with individualized instruction designed
              around your specific goals. Our one-on-one sessions target exactly
              what you need—strength gains, technical refinement, conditioning,
              or complete athletic development. Get a fully customized training
              plan that adapts as you improve.
            </p>
            <p>
              Multiple certified trainers available for private sessions in all
              martial arts disciplines plus general fitness and conditioning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
