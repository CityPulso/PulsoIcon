import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cube-3d-sphere" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cube3dSphere = createIcon("Cube3dSphere", "cube-3d-sphere", {
  nodes: [
    ["path", { d: "M6 17.6l-2 -1.1v-2.5" }, { r: "pulse", d: 0.0, a: 0.08, o: [12, 12] }],
    ["path", { d: "M4 10v-2.5l2 -1.1" }, { r: "pulse", d: 0.05, a: 0.08, o: [12, 12] }],
    ["path", { d: "M10 4.1l2 -1.1l2 1.1" }, { r: "pulse", d: 0.1, a: 0.08, o: [12, 12] }],
    ["path", { d: "M18 6.4l2 1.1v2.5" }, { r: "pulse", d: 0.15000000000000002, a: 0.08, o: [12, 12] }],
    ["path", { d: "M20 14v2.5l-2 1.12" }, { r: "pulse", d: 0.2, a: 0.08, o: [12, 12] }],
    ["path", { d: "M14 19.9l-2 1.1l-2 -1.1" }, { r: "pulse", d: 0.25, a: 0.08, o: [12, 12] }],
    ["path", { d: "M12 12l2 -1.1" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18 8.6l2 -1.1" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12 12l0 2.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 18.5l0 2.5" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12 12l-2 -1.12" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M6 8.6l-2 -1.1" }, { r: "draw", d: 0.3 }],
  ],
});
