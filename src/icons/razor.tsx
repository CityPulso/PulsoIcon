import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "razor" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Razor = createIcon("Razor", "razor", {
  nodes: [
    ["path", { d: "M7 3h10v4h-10l0 -4" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M12 7v4" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M12 11a2 2 0 0 1 2 2v6a2 2 0 1 1 -4 0v-6a2 2 0 0 1 2 -2" }, { r: "slide", y: 1, a: 1.5 }],
  ],
});
