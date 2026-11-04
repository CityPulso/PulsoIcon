import { createIcon } from "../runtime/createIcon.js";

export const Vibrate = createIcon("Vibrate", "vibrate", {
  nodes: [
    ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }, { r: "slide", d: 0.05, x: -1, a: 1, o: [3, 12] }],
    ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [21, 12] }],
    ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }, { r: "shake", a: 1, o: [12, 12] }],
  ],
});
