import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "ruler-arrows" (MIT, Copyright (c) 2021 Luca Burgio).
export const RulerArrows = createIcon("RulerArrows", "ruler-arrows", {
  nodes: [
    ["path", { d: "M15.4 22H8.6C8.26863 22 8 21.7314 8 21.4V2.6C8 2.26863 8.26863 2 8.6 2H15.4C15.7314 2 16 2.26863 16 2.6V21.4C16 21.7314 15.7314 22 15.4 22Z" }],
    ["path", { d: "M16 17H13" }],
    ["path", { d: "M16 7H13" }],
    ["path", { d: "M13 12H23M23 12L21 14M23 12L21 10" }, { r: "slide", x: 1, y: 0, a: 1.5, o: [18, 12] }],
    ["path", { d: "M1 12L3 10M1 12L3 14M1 12H8" }, { r: "slide", x: -1, y: 0, a: 1.5, o: [4.5, 12] }],
  ],
});
