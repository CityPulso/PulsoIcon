import { createIcon } from "../runtime/createIcon.js";

export const Lake = createIcon("Lake", "lake", {
  nodes: [
    ["ellipse", { cx: "12", cy: "16", rx: "10", ry: "5" }],
    ["path", { d: "M4 13 9 5l3 4 2-2 6 6" }, { r: "rise", a: 2, o: [12, 9] }],
    ["path", { d: "M7 16q1.25 1 2.5 0t2.5 0" }, { r: "slide", d: 0.1, x: 1, a: 1.2, o: [9.5, 16] }],
    ["path", { d: "M12 18.5q1.25 1 2.5 0t2.5 0" }, { r: "slide", d: 0.18, x: -1, a: 1.2, o: [14.5, 18.5] }],
  ],
});
