import { createIcon } from "../runtime/createIcon.js";

export const Calendar = createIcon("Calendar", "calendar", {
  nodes: [
    ["path", { d: "M8 2v3" }, { r: "lift", o: [8, 3.5] }],
    ["path", { d: "M16 2v3" }, { r: "lift", d: 0.08, o: [16, 3.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M3 9h18" }, { r: "redraw", d: 0.15, o: [12, 9] }],
  ],
});
