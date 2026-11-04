import { createIcon } from "../runtime/createIcon.js";

export const ChevronsRight = createIcon("ChevronsRight", "chevrons-right", {
  nodes: [
    ["path", { d: "m6 17 5-5-5-5" }, { r: "slide", x: 1, a: 2, o: [8.5, 12] }],
    ["path", { d: "m13 17 5-5-5-5" }, { r: "slide", d: 0.08, x: 1, a: 2, o: [15.5, 12] }],
  ],
});
