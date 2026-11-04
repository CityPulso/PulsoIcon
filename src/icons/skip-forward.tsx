import { createIcon } from "../runtime/createIcon.js";

export const SkipForward = createIcon("SkipForward", "skip-forward", {
  nodes: [
    ["path", { d: "M21 4v16" }, { r: "jelly", d: 0.1, o: [21, 12] }],
    ["path", { d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }, { r: "slide", x: 1, a: 2, o: [10, 12] }],
  ],
});
