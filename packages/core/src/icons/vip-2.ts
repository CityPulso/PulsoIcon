import { icon } from "../icon.js";

// Adapted from Tabler Icons "vip-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Vip2 = icon("Vip2", "vip-2", {
  text: true,
  nodes: [
    ["path", { d: "M3 5h4" }],
    ["path", { d: "M17 5h4" }],
    ["path", { d: "M3 19h18" }],
    ["path", { d: "M4 9l2 6h1l2 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 10v5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 15v-6h2a2 2 0 1 1 0 4h-2" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10 5a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" }, { r: "twinkle", o: [12, 5] }],
  ],
});
