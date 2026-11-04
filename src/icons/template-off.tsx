import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "template-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TemplateOff = createIcon("TemplateOff", "template-off", {
  nodes: [
    ["path", { d: "M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697" }, { r: "growX", o: [4, 6] }],
    ["path", { d: "M4 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" }, { r: "pop", d: 0.08, o: [7, 16] }],
    ["path", { d: "M16 12h4" }, { r: "growX", d: 0.16, o: [14, 16] }],
    ["path", { d: "M14 16h2" }, { r: "growX", d: 0.16, o: [14, 16] }],
    ["path", { d: "M14 20h6" }, { r: "growX", d: 0.16, o: [14, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
