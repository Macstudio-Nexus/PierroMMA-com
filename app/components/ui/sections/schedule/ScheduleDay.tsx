import { Schedule } from "@/app/data/schedule";

export default function ScheduleDay({ day, classname, time }: Schedule) {
  return (
    <div className="grid grid-cols-1 gap-0 w-full">
      <div>
        <div className="bg-primary w-full text-center h-fit p-2 rounded-sm">
          <h3 className="!font-oswald uppercase !tracking-tight">{day}</h3>
        </div>
        <div className="w-full bg-black mb-3">
          {classname.map((className, index) => (
            <div key={index} className="p-4">
              <p className="">
                {className}: {time[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
