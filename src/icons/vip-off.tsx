import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vip-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VipOff = createIcon("VipOff", "vip-off", {
  nodes: [
    ["path", { d: "M3 5h2m4 0h12" }],
    ["path", { d: "M3 19h16" }],
    ["path", { d: "M4 9l2 6h1l2 -6" }, { r: "draw" }],
    ["path", { d: "M12 12v3" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M16 12v-3h2a2 2 0 1 1 0 4h-1" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
