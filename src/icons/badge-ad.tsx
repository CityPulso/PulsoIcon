import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "badge-ad" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BadgeAd = createIcon("BadgeAd", "badge-ad", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7 13h3" }, { r: "draw", d: 0.1 }],
  ],
});
