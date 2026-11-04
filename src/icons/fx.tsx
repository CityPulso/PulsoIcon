import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "fx" (MIT, Copyright (c) 2021 Luca Burgio).
export const Fx = createIcon("Fx", "fx", {
  nodes: [
    ["path", { d: "M3 17L3 7L10 7" }, { r: "draw" }],
    ["path", { d: "M3 12H8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M13 17L17 12M17 12L21 7M17 12L13 7M17 12L21 17" }, { r: "spin", d: 0.25, a: 90, o: [17, 12] }],
  ],
});
