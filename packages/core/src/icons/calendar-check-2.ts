import { icon } from "../icon.js";

export const CalendarCheck2 = icon("CalendarCheck2", "calendar-check-2", {
  nodes: [
    ["path", { d: "M 19 3 L 5 3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M 21 13 L 21 5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M 21 5 A2 2 0 0 0 19 3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M 3 19 A2 2 0 0 0 5 21" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M 3 5 L 3 19" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M 5 3 A2 2 0 0 0 3 5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m16 19 2 2 4-4" }, { r: "draw", d: 0.15, o: [19, 19] }],
    ["path", { d: "M16 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M5 21 L12.5 21" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
  ],
});
