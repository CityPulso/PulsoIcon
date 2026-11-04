import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "arrow-reduce-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const ArrowReduceTag = createIcon("ArrowReduceTag", "arrow-reduce-tag", {
  nodes: [
    ["path", { d: "M7 9.5L9.5 12L7 14.5" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M16.5 9.5L14 12L16.5 14.5" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15V9C2 6.79086 3.79086 5 6 5Z" }],
  ],
});
