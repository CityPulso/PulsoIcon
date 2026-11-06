import { icon } from "../icon.js";

export const Calendar1 = icon("Calendar1", "calendar-1", {
  nodes: [
    ["path", { d: "M11 13h1v4" }, { r: "stamp", d: 0.2, o: [11.5, 15] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
