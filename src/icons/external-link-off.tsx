import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "external-link-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExternalLinkOff = createIcon("ExternalLinkOff", "external-link-off", {
  nodes: [
    ["path", { d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" }],
    ["path", { d: "M10 14l2 -2m2.007 -2.007l6 -6" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M15 4h5v5" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M15 3h6v6", fill: "none" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M10 14 21 3", fill: "none" }, { r: "slide", x: 1, y: -1, a: 1.5 }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
