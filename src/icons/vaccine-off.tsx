import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vaccine-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VaccineOff = createIcon("VaccineOff", "vaccine-off", {
  nodes: [
    ["path", { d: "M17 3l4 4" }, { r: "press", a: 0.1, o: [12, 12] }],
    ["path", { d: "M19 5l-4.5 4.5" }, { r: "press", a: 0.1, o: [12, 12] }],
    ["path", { d: "M11.5 6.5l6 6" }, { r: "press", a: 0.1, o: [12, 12] }],
    ["path", { d: "M16.5 11.5l-.5 .5m-2 2l-4 4h-4v-4l4 -4m2 -2l.5 -.5" }, { r: "press", a: 0.1, o: [12, 12] }],
    ["path", { d: "M7.5 12.5l1.5 1.5" }, { r: "press", a: 0.1, o: [12, 12] }],
    ["path", { d: "M3 21l3 -3" }, { r: "press", a: 0.1, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
