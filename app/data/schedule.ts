export interface Schedule {
  day: string;
  classname: string[];
  time: string[];
}

export const schedule: Schedule[] = [
  {
    day: "Monday",
    classname: ["Gi BJJ", "Fight Team (Invite only)"],
    time: ["7:00pm - 8:00pm", "9:15pm - 11:00pm"],
  },
  {
    day: "Tuesday",
    classname: ["No Gi BJJ", "Fight Team (Invite only)"],
    time: ["7:00pm - 8:00pm", "9:15pm - 11:00pm"],
  },
  {
    day: "Wednesday",
    classname: ["Gi BJJ", "No Gi BJJ", "Fight Team (Invite only)"],
    time: ["7:00pm - 8:00pm", "8:00pm - 9:15pm", "9:15pm - 11:00pm"],
  },
  {
    day: "Thursday",
    classname: ["No Gi BJJ", "Fight Team (Invite only)"],
    time: ["8:00pm - 9:15pm", "9:15pm - 11:00pm"],
  },
  {
    day: "Friday",
    classname: ["No Gi BJJ", "Mixed Martial Arts"],
    time: ["5:00pm - 6:30pm", "6:30pm - 8:00pm"],
  },
  {
    day: "Sunday",
    classname: ["Gi BJJ", "Wrestling"],
    time: ["9:00am - 10:00am", "2:00pm - 3:30pm"],
  },
];
