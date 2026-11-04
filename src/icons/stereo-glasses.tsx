import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "stereo-glasses" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const StereoGlasses = createIcon("StereoGlasses", "stereo-glasses", {
  nodes: [
    ["path", { d: "M8 3h-2l-3 9" }, { r: "float", o: [12, 16] }],
    ["path", { d: "M16 3h2l3 9" }, { r: "float", o: [12, 16] }],
    ["path", { d: "M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18" }, { r: "float", o: [12, 16] }],
    ["path", { d: "M7 16h1" }, { r: "blink", d: 0.2, o: [7.5, 16] }],
    ["path", { d: "M16 16h1" }, { r: "blink", d: 0.2, o: [16.5, 16] }],
  ],
});
