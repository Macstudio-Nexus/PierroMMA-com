import CoachesCard from "./components/ui/CoachesCard";
import { coaches } from "./data/coaches";

export default function Home() {
  return (
    <div className="h-screen p-8">
      {coaches.map((coach) => (
        <CoachesCard key={coach.name} coach={coach} />
      ))}
    </div>
  );
}
