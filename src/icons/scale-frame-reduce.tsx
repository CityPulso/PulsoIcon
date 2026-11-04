import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "scale-frame-reduce" (MIT, Copyright (c) 2021 Luca Burgio).
export const ScaleFrameReduce = createIcon("ScaleFrameReduce", "scale-frame-reduce", {
  nodes: [
    ["path", { d: "M11 15V13.6C11 13.2686 10.7314 13 10.4 13H9" }, { r: "press", o: [3, 21] }],
    ["path", { d: "M6 13H3" }, { r: "press", o: [3, 21] }],
    ["path", { d: "M11 18V21" }, { r: "press", o: [3, 21] }],
    ["path", { d: "M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3Z" }],
    ["path", { d: "M16 11H13V8" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [14.5, 9.5] }],
  ],
});
