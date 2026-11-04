import { createIcon } from "../runtime/createIcon.js";

export const BaggageClaim = createIcon("BaggageClaim", "baggage-claim", {
  nodes: [
    ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }, { r: "press", a: 0.05, o: [12, 10] }],
    ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }, { r: "press", a: 0.05, o: [12, 10] }],
    ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }, { r: "slide", x: -1, a: 3, o: [14.5, 10] }],
    ["circle", { cx: "18", cy: "20", r: "2" }, { r: "roll", x: -1, a: 1, o: [13.5, 20] }],
    ["circle", { cx: "9", cy: "20", r: "2" }, { r: "roll", d: 0.05, x: -1, a: 1, o: [13.5, 20] }],
  ],
});
