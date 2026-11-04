import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "aerial-lift" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AerialLift = createIcon("AerialLift", "aerial-lift", {
  nodes: [
    ["path", { d: "M4 5l16 -2" }],
    ["path", { d: "M12 4v10" }, { r: "swing", a: 6, o: [12, 4] }],
    ["path", { d: "M6.894 8h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12" }, { r: "swing", a: 6, o: [12, 4] }],
    ["path", { d: "M5 14h14" }, { r: "swing", a: 6, o: [12, 4] }],
  ],
});
