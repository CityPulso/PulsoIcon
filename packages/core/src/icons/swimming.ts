import { icon } from "../icon.js";

export const Swimming = icon("Swimming", "swimming", {
  nodes: [
    ["circle", { cx: "18", cy: "9", r: "1" }, { r: "bounce", y: -1, a: 1, o: [18, 9] }],
    ["path", { d: "M4 15l9-2.5 2.5-1" }, { r: "float", a: 1, o: [10, 13] }],
    ["path", { d: "M13 12.5 10 7l6-2" }, { r: "turn", d: 0.05, a: -30, o: [13, 12.5] }],
    ["path", { d: "M2 19c.6.5 1.2 1 2.5 1C7 20 7 18 9.5 18c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 19] }],
  ],
});
