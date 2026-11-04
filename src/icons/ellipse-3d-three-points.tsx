import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "ellipse-3d-three-points" (MIT, Copyright (c) 2021 Luca Burgio).
export const Ellipse3dThreePoints = createIcon("Ellipse3dThreePoints", "ellipse-3d-three-points", {
  nodes: [
    ["path", { d: "M5 2h.01" }, { r: "pop", d: 0.1, o: [5, 2] }],
    ["path", { d: "M5 22H13" }],
    ["path", { d: "M5 22L5 2" }],
    ["path", { d: "M5 22h.01" }, { r: "pop", d: 0.2, o: [5, 22] }],
    [
      "path",
      { d: "M8 4.19329C9.3696 2.8209 11.1081 2 13 2C17.4183 2 21 6.47715 21 12C21 15.2712 19.7435 18.1755 17.8008 20", strokeDasharray: "3 3" },
      { r: "draw", d: 0, o: [14, 12] },
    ],
    ["path", { d: "M8.19917 20C7.76265 19.59 7.36077 19.1255 7 18.6146" }, { r: "draw", d: 0.25, o: [7.6, 19.3] }],
    ["path", { d: "M13 22h.01" }, { r: "pop", d: 0.3, o: [13, 22] }],
  ],
});
