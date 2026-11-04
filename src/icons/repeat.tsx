import { createIcon } from "../runtime/createIcon.js";

export const Repeat = createIcon("Repeat", "repeat", {
  nodes: [
    ["path", { d: "m17 2 4 4-4 4" }, { r: "slide", x: 1, a: 1.5, o: [12, 6.5] }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }, { r: "slide", x: 1, a: 1.5, o: [12, 6.5] }],
    ["path", { d: "m7 22-4-4 4-4" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 17.5] }],
    ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 17.5] }],
  ],
});
