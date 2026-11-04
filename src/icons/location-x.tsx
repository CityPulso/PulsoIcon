import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "location-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LocationX = createIcon("LocationX", "location-x", {
  nodes: [
    ["path", { d: "M13.5 21l-.224 -.448l-3.276 -6.552l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.622 10.03" }],
    ["path", { d: "M22 22l-5 -5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 22l5 -5" }, { r: "draw", d: 0.2 }],
  ],
});
