import { icon } from "../icon.js";

// Adapted from Tabler Icons "car-door" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarDoor = icon("CarDoor", "car-door", {
  nodes: [
    ["path", { d: "M13 14h2" }, { r: "turn", a: -12, o: [19, 12] }],
    ["path", { d: "M19 10h-16" }, { r: "draw", d: 0.2 }],
    [
      "path",
      { d: "M6.7 3.45l-3.7 5.55v3.08a1 1 0 0 0 .85 1a6 6 0 0 1 5.15 5.92v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1 -1v-16a1 1 0 0 0 -1 -1h-10.46a1 1 0 0 0 -.84 .45" },
      { r: "turn", a: -12, o: [19, 12] },
    ],
  ],
});
