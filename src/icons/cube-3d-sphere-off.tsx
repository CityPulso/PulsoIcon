import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cube-3d-sphere-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Cube3dSphereOff = createIcon("Cube3dSphereOff", "cube-3d-sphere-off", {
  nodes: [
    ["path", { d: "M6 17.6l-2 -1.1v-2.5" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M4 10v-2.5l2 -1.1" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M10 4.1l2 -1.1l2 1.1" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M18 6.4l2 1.1v2.5" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M20 14v2" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M14 19.9l-2 1.1l-2 -1.1" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M18 8.6l2 -1.1" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M12 12v2.5" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M12 18.5v2.5" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M12 12l-2 -1.12" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M6 8.6l-2 -1.1" }, { r: "turn", a: 15, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
