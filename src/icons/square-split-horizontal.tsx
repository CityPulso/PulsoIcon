import { createIcon } from "../runtime/createIcon.js";

export const SquareSplitHorizontal = createIcon("SquareSplitHorizontal", "square-split-horizontal", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }, { r: "slide", x: 1, a: 1.5, o: [18.5, 12] }],
    ["path", { d: "M8 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" }, { r: "slide", x: -1, a: 1.5, o: [5.5, 12] }],
  ],
});
