import { createIcon } from "../runtime/createIcon.js";

export const ChevronsRightLeft = createIcon("ChevronsRightLeft", "chevrons-right-left", {
  nodes: [
    ["path", { d: "m20 17-5-5 5-5" }, { r: "slide", x: -1, a: 2, o: [17.5, 12] }],
    ["path", { d: "m4 17 5-5-5-5" }, { r: "slide", x: 1, a: 2, o: [6.5, 12] }],
  ],
});
