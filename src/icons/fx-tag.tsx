import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "fx-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const FxTag = createIcon("FxTag", "fx-tag", {
  nodes: [
    ["path", { d: "M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z" }],
    ["path", { d: "M6 15V9L11 9" }, { r: "draw" }],
    ["path", { d: "M5.99998 12H9.57141" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M13 15L15.5 12M15.5 12L18 9M15.5 12L13 9M15.5 12L18 15" }, { r: "spin", d: 0.25, a: 90, o: [15.5, 12] }],
  ],
});
