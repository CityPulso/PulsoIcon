import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wheel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Wheel = createIcon("Wheel", "wheel", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M3 12h6" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M15 12h6" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M13.6 9.4l3.4 -4.8" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M10.4 14.6l-3.4 4.8" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M7 4.6l3.4 4.8" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M13.6 14.6l3.4 4.8" }, { r: "spin", o: [12, 12] }],
  ],
});
