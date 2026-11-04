import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ad-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AdCircle = createIcon("AdCircle", "ad-circle", {
  nodes: [
    ["path", { d: "M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" }, { r: "draw" }],
    ["path", { d: "M7 13h3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" }, { r: "draw", d: 0.2 }],
  ],
});
