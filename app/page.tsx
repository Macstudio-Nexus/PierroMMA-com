import CoachesCard from "./components/ui/CoachesCard";
import { coaches } from "./data/coaches";

export default function Home() {
  return (
    <>
      <div className="h-screen grid grid-cols-1 space-y-5 place-items-center">
        {coaches.map((coach) => (
          <CoachesCard key={coach.name} coach={coach} />
        ))}
      </div>
      {/* <div className="space-y-1">
        <h1>Staten Island&apos;s Premier MMA Team</h1>
        <h2>Master Multiple Disciplines</h2>
        <h3>Mixed Martial Arts</h3>
        <h4>
          World class coaching in MMA, Brazilian Jiu Jitsu, Wrestling,
          Kickboxing and more...
        </h4>
        <p>
          Blend striking, grappling, and strategy into one complete combat
          sport. Train to compete or simply push yourself beyond limits.
        </p>
      </div> */}
    </>
  );
}
