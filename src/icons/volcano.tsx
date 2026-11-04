import { createIcon } from "../runtime/createIcon.js";

export const Volcano = createIcon("Volcano", "volcano", {
  nodes: [
    ["path", { d: "M3 21 9 10h1.5l1.5 1.5 1.5-1.5H15l6 11Z" }, { r: "shake", a: 0.6, o: [12, 15] }],
    ["path", { d: "M12 7V3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "M9 7.5 7.5 5" }, { r: "slide", d: 0.15, x: -0.5, y: -1, a: 1.5, o: [8, 6] }],
    ["path", { d: "M15 7.5 16.5 5" }, { r: "slide", d: 0.15, x: 0.5, y: -1, a: 1.5, o: [16, 6] }],
  ],
});
