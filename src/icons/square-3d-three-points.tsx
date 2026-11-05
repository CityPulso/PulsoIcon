import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "square-3d-three-points" (MIT, Copyright (c) 2021 Luca Burgio).
export const Square3dThreePoints = createIcon("Square3dThreePoints", "square-3d-three-points", {
  text: true,
  nodes: [
    ["path", { d: "M3 21V3.6C3 3.26863 3.26863 3 3.6 3H21" }],
    ["path", { d: "M17 21H20.4C20.7314 21 21 20.7314 21 20.4V17" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M21 7V9" }],
    ["path", { d: "M21 12V14" }],
    ["path", { d: "M7 21H9" }],
    ["path", { d: "M12 21H14" }],
    ["path", { d: "M3 3h.01" }, { r: "pop", o: [3, 3] }],
    ["path", { d: "M3 21h.01" }, { r: "pop", d: 0.1, o: [3, 21] }],
    ["path", { d: "M21 3h.01" }, { r: "pop", d: 0.2, o: [21, 3] }],
  ],
});
