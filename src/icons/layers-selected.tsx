import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "layers-selected" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LayersSelected = createIcon("LayersSelected", "layers-selected", {
  nodes: [
    ["path", { d: "M8 10.5l6.492 -6.492" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M13.496 16l6.504 -6.504l-6.504 6.504" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M8.586 15.414l10.827 -10.827" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" }, { r: "float" }],
    ["path", { d: "M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" }, { r: "slide", d: 0.05, x: -1, y: 1, a: 1 }],
  ],
});
