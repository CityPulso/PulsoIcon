import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "square-rounded-percentage" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SquareRoundedPercentage = createIcon("SquareRoundedPercentage", "square-rounded-percentage", {
  nodes: [
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }, { r: "press", d: 0, a: 0.05, o: [12, 12] }],
    ["path", { d: "M9 15.075l6 -6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 9.105v.015" }, { r: "pop", d: 0.25, o: [9, 9] }],
    ["path", { d: "M15 15.12v.015" }, { r: "pop", d: 0.35, o: [15, 15] }],
  ],
});
