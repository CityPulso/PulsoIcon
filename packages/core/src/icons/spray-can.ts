import { icon } from "../icon.js";

export const SprayCan = icon("SprayCan", "spray-can", {
  nodes: [
    ["path", { d: "M3 3h.01" }, { r: "pop", d: 0.25, o: [3.005, 3] }],
    ["path", { d: "M7 5h.01" }, { r: "pop", d: 0.13, o: [7.005, 5] }],
    ["path", { d: "M11 7h.01" }, { r: "pop", d: 0.05, o: [11.005, 7] }],
    ["path", { d: "M3 7h.01" }, { r: "pop", d: 0.21, o: [3.005, 7] }],
    ["path", { d: "M7 9h.01" }, { r: "pop", d: 0.09, o: [7.005, 9] }],
    ["path", { d: "M3 11h.01" }, { r: "pop", d: 0.17, o: [3.005, 11] }],
    ["rect", { width: "4", height: "4", x: "15", y: "5" }, { r: "press", a: 0.2, o: [17, 7] }],
    ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }, { r: "shake", a: 0.6, o: [17, 15.5] }],
    ["path", { d: "m13 14 8-2" }, { r: "shake", a: 0.6, o: [17, 15.5] }],
    ["path", { d: "m13 19 8-2" }, { r: "shake", a: 0.6, o: [17, 15.5] }],
  ],
});
