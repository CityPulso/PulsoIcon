import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-circus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingCircus = createIcon("BuildingCircus", "building-circus", {
  nodes: [
    ["path", { d: "M4 11h16" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
    ["path", { d: "M12 6.5c0 1 -5 4.5 -8 4.5" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
    ["path", { d: "M12 6.5c0 1 5 4.5 8 4.5" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
    ["path", { d: "M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1" }, { r: "press", d: 0.1, a: 0.04, o: [12, 21] }],
    ["path", { d: "M12 7v-4l2 1h-2" }, { r: "swing", a: 12, o: [12, 7] }],
  ],
});
