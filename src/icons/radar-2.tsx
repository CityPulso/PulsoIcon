import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "radar-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Radar2 = createIcon("Radar2", "radar-2", {
  nodes: [
    ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pulse", a: 0.4, o: [12, 12] }],
    ["path", { d: "M15.51 15.56a5 5 0 1 0 -3.51 1.44" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M18.832 17.86a9 9 0 1 0 -6.832 3.14" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 12v9" }, { r: "spin", o: [12, 12] }],
  ],
});
