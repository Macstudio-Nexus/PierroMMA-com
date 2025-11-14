import { schedule } from "@/app/data/schedule";
import ScheduleDay from "./ScheduleDay";

export default function Schedule() {
  return (
    <div id="schedule" className="grid grid-cols-1 place-items-center scroll-mt-20 xl:scroll-mt-45">
      <div className="text-center bg-white max-w-xl lg:max-w-5xl 2xl:max-w-6xl h-fit m-3 p-3">
        <h3 className="!text-primary">Class schedule</h3>
        <p className="!text-off-black ">
          Find a class time that fits your schedule and come train with us —
          your first class is completely free, no appointment needed. Just stop
          by, meet the team, and see what makes us one of the top MMA gyms in
          NYC.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl lg:max-w-5xl 2xl:max-w-6xl">
        {schedule.map((scheduleItem, index) => (
          <ScheduleDay
            key={index}
            day={scheduleItem.day}
            classname={scheduleItem.classname}
            time={scheduleItem.time}
          />
        ))}
      </div>
    </div>
  );
}
