import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "orbits" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Orbits = createIcon("Orbits", "orbits", {
  nodes: [
    ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pulse", d: 0, a: 0.2, o: [12, 12] }],
    ["path", { d: "M7.628 7.629c-2.76 .854 -4.628 2.491 -4.628 4.371c0 2.761 4.03 5 9 5s9 -2.239 9 -5s-4.03 -5 -9 -5" }, { r: "spin", d: 0, o: [12, 12] }],
    [
      "path",
      { d: "M16.372 16.372c.4 -1.295 .628 -2.785 .628 -4.372c0 -4.97 -2.239 -9 -5 -9s-5 4.03 -5 9s2.239 9 5 9c.596 0 1.168 -.188 1.698 -.533" },
      { r: "spin", d: 0.1, o: [12, 12] },
    ],
  ],
});
