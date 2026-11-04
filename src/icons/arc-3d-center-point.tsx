import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "arc-3d-center-point" (MIT, Copyright (c) 2021 Luca Burgio).
export const Arc3dCenterPoint = createIcon("Arc3dCenterPoint", "arc-3d-center-point", {
  nodes: [
    ["path", { d: "M21.9999 16C21.9999 10.4772 17.5228 6 11.9999 6C7.89931 6 4.37514 8.46819 2.83203 12", strokeDasharray: "3 3" }, { r: "draw" }],
    ["path", { d: "M2 16h.01" }, { r: "pop", d: 0.35, o: [2, 16] }],
    ["path", { d: "M2 16H12" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.35, o: [12, 16] }],
  ],
});
