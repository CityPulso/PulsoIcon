import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "time-duration-30" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TimeDuration30 = createIcon("TimeDuration30", "time-duration-30", {
  nodes: [
    ["path", { d: "M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M3 12v.01" }, { r: "pop", d: 0.0, a: 0.6, o: [3.0, 12.0] }],
    ["path", { d: "M7.5 4.2v.01" }, { r: "pop", d: 0.03, a: 0.6, o: [7.5, 4.2] }],
    ["path", { d: "M7.5 19.8v.01" }, { r: "pop", d: 0.06, a: 0.6, o: [7.5, 19.8] }],
    ["path", { d: "M4.2 16.5v.01" }, { r: "pop", d: 0.09, a: 0.6, o: [4.2, 16.5] }],
    ["path", { d: "M4.2 7.5v.01" }, { r: "pop", d: 0.12, a: 0.6, o: [4.2, 7.5] }],
    ["path", { d: "M12 21a9 9 0 0 0 0 -18" }, { r: "draw" }],
  ],
});
