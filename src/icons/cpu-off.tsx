import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cpu-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CpuOff = createIcon("CpuOff", "cpu-off", {
  nodes: [
    ["path", { d: "M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698" }],
    ["path", { d: "M13 9h2v2m0 4h-6v-6" }, { r: "pulse", a: 0.15, o: [12, 12] }],
    ["path", { d: "M3 10h2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 14h2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 3v2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M14 3v2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M21 10h-2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M21 14h-2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M14 21v-2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M10 21v-2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 20v2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M12 2v2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 20v2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M17 2v2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M2 12h2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M2 17h2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M2 7h2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M20 12h2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M20 17h2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M20 7h2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M7 20v2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M7 2v2", fill: "none" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }],
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }, { r: "pulse", a: 0.15, o: [12, 12] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
