import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shield-up" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShieldUp = createIcon("ShieldUp", "shield-up", {
  nodes: [
    ["path", { d: "M12.442 20.876a13.12 13.12 0 0 1 -.442 .124a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .119 6.336" }],
    ["path", { d: "M19 22v-6" }, { r: "slide", y: -1, a: 2 }],
    ["path", { d: "M22 19l-3 -3l-3 3" }, { r: "slide", y: -1, a: 2 }],
  ],
});
