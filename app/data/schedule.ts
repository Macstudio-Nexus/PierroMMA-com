export interface Schedule {
  day: string;
  classname: string[];
  time: string[];
}

export const schedule: Schedule[] = [
  {
    day: "Monday",
    classname: ["Fight Team (Invite only)", ""],
    time: ["9:15pm - 11:00pm", ""],
  },
  {
    day: "Tuesday",
    classname: ["Fight Team (Invite only)", ""],
    time: ["9:15pm - 11:00pm", ""],
  },
  {
    day: "Wednesday",
    classname: ["Fight Team (Invite only)", ""],
    time: ["9:15pm - 11:00pm", ""],
  },
  {
    day: "Thursday",
    classname: ["No Gi BJJ", "Fight Team (Invite only)"],
    time: ["8:00pm - 9:15pm", "9:15pm - 11:00pm"],
  },
  {
    day: "Friday",
    classname: ["Mixed Martial Arts", ""],
    time: ["6:30pm - 8:00pm", ""],
  },
  {
    day: "Saturday",
    classname: ["", ""],
    time: ["", ""],
  },
  {
    day: "Sunday",
    classname: ["Wrestling", ""],
    time: ["2:00pm - 3:30pm", ""],
  },
];
