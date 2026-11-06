import { icon } from "../icon.js";

export const Projector = icon("Projector", "projector", {
  nodes: [
    ["path", { d: "M5 7 3 5" }, { r: "flicker", d: 0.1, o: [9, 5] }],
    ["path", { d: "M9 6V3" }, { r: "flicker", d: 0.15, o: [9, 5] }],
    ["path", { d: "m13 7 2-2" }, { r: "flicker", d: 0.2, o: [9, 5] }],
    ["circle", { cx: "9", cy: "13", r: "3" }, { r: "spin", d: 0.05, a: 360, o: [9, 13] }],
    ["path", { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }, { r: "press", a: 0.04, o: [12, 16] }],
    ["path", { d: "M16 16h2" }, { r: "growX", d: 0.15, o: [17, 16] }],
  ],
});
