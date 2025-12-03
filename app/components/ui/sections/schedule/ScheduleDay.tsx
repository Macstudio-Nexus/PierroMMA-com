import { Schedule } from "@/app/data/schedule";
import { Clock } from "lucide-react";

export default function ScheduleDay({ day, classname, time }: Schedule) {
  return (
    <div className="grid grid-cols-1 grid-rows-[60px_1fr] gap-0 w-full full-shadow">
      <div className="bg-primary w-full text-center h-fit md:p-0 rounded-sm">
        <div className="font-oswald text-[40px] uppercase !tracking-tight">
          {day}
        </div>
      </div>
      <div className="w-full bg-black py-5 ">
        {classname.map((className, index) => (
          <div
            key={index}
            className="px-6 md:px-3 py-2 flex items-center gap-2"
          >
            <Clock className="text-primary size-5" />
            <p className="!font-light">
              {className}: {time[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
