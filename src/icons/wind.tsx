import { createIcon } from "../runtime/createIcon.js";

export const Wind = createIcon("Wind", "wind", {
  nodes: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2" }, { r: "slide", d: 0.12, x: 1, a: 1.5, o: [9, 18] }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2" }, { r: "slide", d: 0.06, x: 1, a: 1.5, o: [12, 9.5] }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2" }, { r: "slide", x: 1, a: 1.5, o: [7.5, 6] }],
  ],
});
