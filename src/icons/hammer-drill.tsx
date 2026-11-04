import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hammer-drill" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HammerDrill = createIcon("HammerDrill", "hammer-drill", {
  nodes: [
    ["path", { d: "M12 15v6" }, { r: "bounce", d: 0.1, y: 1, a: 1.5 }],
    ["path", { d: "M16 5h4" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M8 5h-4" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M15 11h-6a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1" }, { r: "shake", a: 0.6 }],
    ["path", { d: "M14 11h-4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-3" }, { r: "shake", a: 0.6 }],
  ],
});
