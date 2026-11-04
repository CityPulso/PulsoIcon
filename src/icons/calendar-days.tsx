import { createIcon } from "../runtime/createIcon.js";

export const CalendarDays = createIcon("CalendarDays", "calendar-days", {
  nodes: [
    ["path", { d: "M8 2v3" }, { r: "lift", o: [12, 3.5] }],
    ["path", { d: "M16 2v3" }, { r: "lift", d: 0.06, o: [12, 3.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 13h.01" }, { r: "pop", d: 0.1, o: [8.005, 13] }],
    ["path", { d: "M12 13h.01" }, { r: "pop", d: 0.14, o: [12.005, 13] }],
    ["path", { d: "M16 13h.01" }, { r: "pop", d: 0.18, o: [16.005, 13] }],
    ["path", { d: "M8 17h.01" }, { r: "pop", d: 0.22, o: [8.005, 17] }],
    ["path", { d: "M12 17h.01" }, { r: "pop", d: 0.26, o: [12.005, 17] }],
    ["path", { d: "M16 17h.01" }, { r: "pop", d: 0.3, o: [16.005, 17] }],
  ],
});
