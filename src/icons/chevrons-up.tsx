import { createIcon } from "../runtime/createIcon.js";

export const ChevronsUp = createIcon("ChevronsUp", "chevrons-up", {
  nodes: [
    ["path", { d: "m17 11-5-5-5 5" }, { r: "slide", d: 0.08, y: -1, a: 2, o: [12, 8.5] }],
    ["path", { d: "m17 18-5-5-5 5" }, { r: "slide", y: -1, a: 2, o: [12, 15.5] }],
  ],
});
