import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "baseline-density-medium" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BaselineDensityMedium = createIcon("BaselineDensityMedium", "baseline-density-medium", {
  nodes: [
    ["path", { d: "M4 20h16" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M4 12h16" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M4 4h16" }, { r: "slide", y: -1, a: 1.5 }],
  ],
});
