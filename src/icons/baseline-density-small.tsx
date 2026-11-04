import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "baseline-density-small" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BaselineDensitySmall = createIcon("BaselineDensitySmall", "baseline-density-small", {
  nodes: [
    ["path", { d: "M4 3h16" }, { r: "slide", y: -1, a: 1 }],
    ["path", { d: "M4 9h16" }, { r: "slide", d: 0.05, y: -1, a: 0.5 }],
    ["path", { d: "M4 15h16" }, { r: "slide", d: 0.05, y: 1, a: 0.5 }],
    ["path", { d: "M4 21h16" }, { r: "slide", y: 1, a: 1 }],
  ],
});
