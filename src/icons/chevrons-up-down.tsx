import { createIcon } from "../runtime/createIcon.js";

export const ChevronsUpDown = createIcon("ChevronsUpDown", "chevrons-up-down", {
  nodes: [
    ["path", { d: "m7 15 5 5 5-5" }, { r: "slide", y: 1, a: 2, o: [12, 17.5] }],
    ["path", { d: "m7 9 5-5 5 5" }, { r: "slide", y: -1, a: 2, o: [12, 6.5] }],
  ],
});
