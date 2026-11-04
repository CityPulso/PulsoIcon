import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sun-high" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SunHigh = createIcon("SunHigh", "sun-high", {
  nodes: [
    ["path", { d: "M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M6.343 17.657l-1.414 1.414" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M6.343 6.343l-1.414 -1.414" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M17.657 6.343l1.414 -1.414" }, { r: "draw", d: 0.15000000000000002, o: [12, 12] }],
    ["path", { d: "M17.657 17.657l1.414 1.414" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "M4 12h-2" }, { r: "draw", d: 0.25, o: [12, 12] }],
    ["path", { d: "M12 4v-2" }, { r: "draw", d: 0.30000000000000004, o: [12, 12] }],
    ["path", { d: "M20 12h2" }, { r: "draw", d: 0.35000000000000003, o: [12, 12] }],
    ["path", { d: "M12 20v2" }, { r: "draw", d: 0.4, o: [12, 12] }],
  ],
});
