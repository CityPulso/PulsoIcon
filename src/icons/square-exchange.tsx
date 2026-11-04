import { createIcon } from "../runtime/createIcon.js";

export const SquareExchange = createIcon("SquareExchange", "square-exchange", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 13v-1a3 3 0 0 1 3-3h7" }, { r: "slide", x: 1, a: 1.5, o: [12, 9] }],
    ["path", { d: "m15 7 2 2-2 2" }, { r: "slide", x: 1, a: 1.5, o: [12, 9] }],
    ["path", { d: "M17 11v1a3 3 0 0 1-3 3H7" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 15] }],
    ["path", { d: "m9 13-2 2 2 2" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 15] }],
  ],
});
