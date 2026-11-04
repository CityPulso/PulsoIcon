import { createIcon } from "../runtime/createIcon.js";

export const ChevronsLeft = createIcon("ChevronsLeft", "chevrons-left", {
  nodes: [
    ["path", { d: "m11 17-5-5 5-5" }, { r: "slide", d: 0.08, x: -1, a: 2, o: [8.5, 12] }],
    ["path", { d: "m18 17-5-5 5-5" }, { r: "slide", x: -1, a: 2, o: [15.5, 12] }],
  ],
});
