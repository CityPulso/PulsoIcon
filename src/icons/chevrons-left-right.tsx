import { createIcon } from "../runtime/createIcon.js";

export const ChevronsLeftRight = createIcon("ChevronsLeftRight", "chevrons-left-right", {
  nodes: [
    ["path", { d: "m9 7-5 5 5 5" }, { r: "slide", x: -1, a: 2, o: [6.5, 12] }],
    ["path", { d: "m15 7 5 5-5 5" }, { r: "slide", x: 1, a: 2, o: [17.5, 12] }],
  ],
});
