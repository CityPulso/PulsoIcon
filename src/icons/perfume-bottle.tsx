import { createIcon } from "../runtime/createIcon.js";

export const PerfumeBottle = createIcon("PerfumeBottle", "perfume-bottle", {
  nodes: [
    ["path", { d: "M 5 22 H 11.072" }, { r: "press", a: 0.04, o: [9, 22] }],
    ["path", { d: "M15 5 C 23 4 23.328 12.676 20 14.536" }, { r: "press", d: 0.05, a: 0.15, o: [15, 7] }],
    ["path", { d: "M15.802 10.308 C 14.776 9.465 14 8.496 14 7" }, { r: "press", d: 0.05, a: 0.15, o: [15, 7] }],
    ["path", { d: "M2 2h.01" }, { r: "pop", d: 0.15, o: [2.005, 2] }],
    ["path", { d: "M2 7h.01" }, { r: "pop", d: 0.2, o: [2.005, 7] }],
    ["path", { d: "M5 4.5h.01" }, { r: "pop", d: 0.25, o: [5.005, 4.5] }],
    ["path", { d: "M8.127 22 A 8 8 0 0 1 4 15 3 3 0 0 1 4.879 12.879C 6.879 10.879 10 10 10 7" }, { r: "press", a: 0.04, o: [9, 22] }],
    ["circle", { cx: "18", cy: "18", r: "4" }, { r: "press", a: 0.04, o: [9, 22] }],
    ["rect", { x: "9", y: "2", width: "6", height: "5", rx: "1" }, { r: "press", a: 0.04, o: [9, 22] }],
  ],
});
