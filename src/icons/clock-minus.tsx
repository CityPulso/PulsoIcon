import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockMinus = createIcon("ClockMinus", "clock-minus", {
  nodes: [
    ["path", { d: "M20.477 15.022a9 9 0 1 0 -7.998 5.965" }],
    ["path", { d: "M12 7v5l3 3" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M16 19h6" }, { r: "growX", d: 0.15, o: [19, 19] }],
  ],
});
