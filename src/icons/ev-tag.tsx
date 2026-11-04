import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "ev-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const EvTag = createIcon("EvTag", "ev-tag", {
  nodes: [
    ["path", { d: "M18.5 9L15.5 15L12.5 9" }, { r: "draw", d: 0.15, o: [15.5, 12] }],
    ["path", { d: "M10 9H6L6 15L10 15" }, { r: "draw", d: 0, o: [8, 12] }],
    ["path", { d: "M6 12H9" }, { r: "draw", d: 0.05, o: [7.5, 12] }],
    ["path", { d: "M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z" }],
  ],
});
