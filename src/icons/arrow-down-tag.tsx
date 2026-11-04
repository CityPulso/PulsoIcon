import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "arrow-down-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const ArrowDownTag = createIcon("ArrowDownTag", "arrow-down-tag", {
  nodes: [
    ["path", { d: "M6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15V9C2 6.79086 3.79086 5 6 5Z" }],
    ["path", { d: "M14.5 10.75L12 13.25L9.5 10.75" }, { r: "slide", x: 0, y: 1, a: 1.5 }],
  ],
});
