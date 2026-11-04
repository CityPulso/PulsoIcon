import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "plunger" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Plunger = createIcon("Plunger", "plunger", {
  nodes: [
    ["path", { d: "M12.71 14.12l7.81 -7.82a2 2 0 0 0 -2.82 -2.82l-7.82 7.81" }, { r: "press", a: 0.1, o: [7.5, 16.5] }],
    ["path", { d: "M3.71 13.22l.7 -.71a5 5 0 0 1 7.08 0a5 5 0 0 1 0 7.08l-.71 .7" }, { r: "press", a: 0.1, o: [7.5, 16.5] }],
    ["path", { d: "M3 12.5l8.5 8.5" }, { r: "press", a: 0.1, o: [7.5, 16.5] }],
  ],
});
