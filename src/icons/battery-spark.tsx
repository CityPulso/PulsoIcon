import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "battery-spark" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BatterySpark = createIcon("BatterySpark", "battery-spark", {
  nodes: [
    ["path", { d: "M12 17h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v1" }, { r: "draw", d: 0 }],
    ["path", { d: "M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" }, { r: "twinkle", d: 0.1, o: [19, 19] }],
  ],
});
