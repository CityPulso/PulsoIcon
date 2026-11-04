import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "external-link-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExternalLinkOff = createIcon("ExternalLinkOff", "external-link-off", {
  nodes: [
    ["path", { d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" }],
    ["path", { d: "M10 14l2 -2m2.007 -2.007l6 -6" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M15 4h5v5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
