import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "pen-tablet" (MIT, Copyright (c) 2021 Luca Burgio).
export const PenTablet = createIcon("PenTablet", "pen-tablet", {
  nodes: [
    ["path", { d: "M22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5Z" }],
    ["path", { d: "M2 12H6" }],
    ["path", { d: "M6 3V21" }],
    ["path", { d: "M15.5 11.5L12 14.5" }, { r: "draw" }],
    ["path", { d: "M17 10.01L17.01 9.99889" }, { r: "pop", d: 0.3, o: [17, 10] }],
  ],
});
