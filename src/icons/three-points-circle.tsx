import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "three-points-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const ThreePointsCircle = createIcon("ThreePointsCircle", "three-points-circle", {
  nodes: [
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
    ["path", { d: "M5 5h.01" }, { r: "pop", o: [5, 5] }],
    ["path", { d: "M5 10.5V9" }],
    ["path", { d: "M5 15V13.5" }],
    ["path", { d: "M5 19h.01" }, { r: "pop", d: 0.12, o: [5, 19] }],
    ["path", { d: "M19 19h.01" }, { r: "pop", d: 0.24, o: [19, 19] }],
    ["path", { d: "M10.5 19H9" }],
    ["path", { d: "M15 19H13.5" }],
  ],
});
