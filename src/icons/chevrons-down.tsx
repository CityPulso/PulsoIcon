import { createIcon } from "../runtime/createIcon.js";

export const ChevronsDown = createIcon("ChevronsDown", "chevrons-down", {
  nodes: [
    ["path", { d: "m7 6 5 5 5-5" }, { r: "slide", y: 1, a: 2, o: [12, 8.5] }],
    ["path", { d: "m7 13 5 5 5-5" }, { r: "slide", d: 0.08, y: 1, a: 2, o: [12, 15.5] }],
  ],
});
