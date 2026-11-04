import { createIcon } from "../runtime/createIcon.js";

export const SquareSplitVertical = createIcon("SquareSplitVertical", "square-split-vertical", {
  nodes: [
    ["path", { d: "M2 12h20" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }, { r: "slide", y: 1, a: 1.5, o: [12, 18.5] }],
    ["path", { d: "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" }, { r: "slide", y: -1, a: 1.5, o: [12, 5.5] }],
  ],
});
