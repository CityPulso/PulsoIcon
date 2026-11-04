import { createIcon } from "../runtime/createIcon.js";

export const Customs = createIcon("Customs", "customs", {
  nodes: [
    ["path", { d: "M5 9v12M3 21h4" }, { r: "fade", o: [5, 15] }],
    ["rect", { x: "3", y: "6", width: "18", height: "3", rx: "1.5" }, { r: "turn", a: -30, o: [5, 7.5] }],
    ["path", { d: "m10 6-2 3M15 6l-2 3M20 6l-2 3" }, { r: "turn", a: -30, o: [5, 7.5] }],
    ["rect", { x: "10", y: "13", width: "10", height: "8", rx: "1.5" }, { r: "slide", x: 1, a: 1, d: 0.1, o: [15, 17] }],
    ["path", { d: "M13 13v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" }, { r: "slide", x: 1, a: 1, d: 0.1, o: [15, 17] }],
  ],
});
