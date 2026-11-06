import { icon } from "../icon.js";

// Adapted from Tabler Icons "sphere-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Sphere2 = icon("Sphere2", "sphere-2", {
  nodes: [
    ["path", { d: "M3 12c0 1.657 4.03 3 9 3s9 -1.343 9 -3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 3c-1.657 0 -3 4.03 -3 9s1.343 9 3 9" }, { r: "draw", d: 0.2 }],
  ],
});
