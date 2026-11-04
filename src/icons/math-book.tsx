import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "math-book" (MIT, Copyright (c) 2021 Luca Burgio).
export const MathBook = createIcon("MathBook", "math-book", {
  nodes: [
    ["path", { d: "M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143" }],
    ["path", { d: "M6 17L20 17" }],
    ["path", { d: "M6 21L20 21" }],
    ["path", { d: "M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17" }],
    ["path", { d: "M10 10H14" }, { r: "spin", a: 180, o: [12, 10] }],
    ["path", { d: "M12 13.01L12.01 12.9989" }, { r: "pop", d: 0.15, o: [12, 13] }],
    ["path", { d: "M12 7.01L12.01 6.99889" }, { r: "pop", d: 0.15, o: [12, 7] }],
  ],
});
