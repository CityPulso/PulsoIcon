import { createIcon } from "../runtime/createIcon.js";

export const Laser = createIcon("Laser", "laser", {
  nodes: [
    ["path", { d: "m13 8 .95-.95" }, { r: "flicker", d: 0.15, o: [9, 12] }],
    ["path", { d: "M13.95 16.95 13 16" }, { r: "flicker", d: 0.18, o: [9, 12] }],
    ["path", { d: "M22 12h-9" }, { r: "growX", o: [13, 12] }],
    ["path", { d: "M4 12H2" }, { r: "growX", d: 0.05, o: [2, 12] }],
    ["path", { d: "M4.05 16.95 5 16" }, { r: "flicker", d: 0.21, o: [9, 12] }],
    ["path", { d: "m5 8-.95-.95" }, { r: "flicker", d: 0.24, o: [9, 12] }],
    ["path", { d: "M9 12h.01" }, { r: "pop", d: 0.1, o: [9.005, 12] }],
    ["path", { d: "M9 19v-2" }, { r: "flicker", d: 0.27, o: [9, 12] }],
    ["path", { d: "M9 7V5" }, { r: "flicker", d: 0.3, o: [9, 12] }],
  ],
});
