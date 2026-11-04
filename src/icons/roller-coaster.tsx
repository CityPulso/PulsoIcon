import { createIcon } from "../runtime/createIcon.js";

export const RollerCoaster = createIcon("RollerCoaster", "roller-coaster", {
  nodes: [
    ["path", { d: "M6 19V5" }, { r: "grow", d: 0.05, o: [6, 12] }],
    ["path", { d: "M10 19V6.8" }, { r: "grow", d: 0.09, o: [10, 12.9] }],
    ["path", { d: "M14 19v-7.8" }, { r: "grow", d: 0.13, o: [14, 15.1] }],
    ["path", { d: "M18 5v4" }, { r: "grow", d: 0.17, o: [18, 7] }],
    ["path", { d: "M18 19v-6" }, { r: "grow", d: 0.21, o: [18, 16] }],
    ["path", { d: "M22 19V9" }, { r: "grow", d: 0.25, o: [22, 14] }],
    ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }, { r: "redraw", o: [11.998, 12] }],
  ],
});
