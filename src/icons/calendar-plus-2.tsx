import { createIcon } from "../runtime/createIcon.js";

export const CalendarPlus2 = createIcon("CalendarPlus2", "calendar-plus-2", {
  nodes: [
    ["path", { d: "M8 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M16 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M10 15h4" }, { r: "spin", d: 0.15, a: 90, o: [12, 15] }],
    ["path", { d: "M12 13v4" }, { r: "spin", d: 0.15, a: 90, o: [12, 15] }],
  ],
});
