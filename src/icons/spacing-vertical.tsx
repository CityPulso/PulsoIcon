import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "spacing-vertical" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SpacingVertical = createIcon("SpacingVertical", "spacing-vertical", {
  nodes: [
    ["path", { d: "M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" }, { r: "slide", y: -1, a: 1.5 }],
    ["path", { d: "M16 12h-8" }, { r: "pulse", a: 0.15, o: [12, 12] }],
  ],
});
