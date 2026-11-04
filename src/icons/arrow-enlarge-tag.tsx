import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "arrow-enlarge-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const ArrowEnlargeTag = createIcon("ArrowEnlargeTag", "arrow-enlarge-tag", {
  nodes: [
    ["path", { d: "M8.5 9.5L6 12L8.5 14.5" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M15.5 9.5L18 12L15.5 14.5" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z" }],
  ],
});
