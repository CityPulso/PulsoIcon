import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shield-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShieldCode = createIcon("ShieldCode", "shield-code", {
  nodes: [
    ["path", { d: "M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.078 7.024" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, a: 1.5 }],
  ],
});
