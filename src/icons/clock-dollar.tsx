import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-dollar" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockDollar = createIcon("ClockDollar", "clock-dollar", {
  nodes: [
    ["path", { d: "M20.866 10.45a9 9 0 1 0 -7.815 10.488" }],
    ["path", { d: "M12 7v5l1.5 1.5" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 21v1m0 -8v1" }, { r: "draw", d: 0.1 }],
  ],
});
