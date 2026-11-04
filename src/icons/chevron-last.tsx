import { createIcon } from "../runtime/createIcon.js";

export const ChevronLast = createIcon("ChevronLast", "chevron-last", {
  nodes: [
    ["path", { d: "m7 18 6-6-6-6" }, { r: "slide", x: 1, a: 2, o: [10, 12] }],
    ["path", { d: "M17 6v12" }, { r: "jelly", d: 0.15, o: [17, 12] }],
  ],
});
