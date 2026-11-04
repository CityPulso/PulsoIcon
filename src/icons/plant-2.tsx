import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "plant-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Plant2 = createIcon("Plant2", "plant-2", {
  nodes: [
    ["path", { d: "M2 9a10 10 0 1 0 20 0" }],
    ["path", { d: "M12 19a10 10 0 0 1 10 -10" }, { r: "sway", a: 5, o: [12, 19] }],
    ["path", { d: "M2 9a10 10 0 0 1 10 10" }, { r: "sway", a: -5, o: [12, 19] }],
    ["path", { d: "M12 4a9.7 9.7 0 0 1 2.99 7.5" }, { r: "grow", d: 0.1, o: [12, 11.5] }],
    ["path", { d: "M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" }, { r: "grow", d: 0.1, o: [12, 11.5] }],
  ],
});
