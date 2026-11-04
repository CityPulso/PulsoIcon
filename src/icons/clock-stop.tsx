import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "clock-stop" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ClockStop = createIcon("ClockStop", "clock-stop", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 0 -9 9" }],
    ["path", { d: "M12 7v5l1 1" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M16 16h6v6h-6l0 -6" }, { r: "press", a: 0.2, o: [19, 19] }],
  ],
});
