import { createIcon } from "../runtime/createIcon.js";

export const HouseLaptop = createIcon("HouseLaptop", "house-laptop", {
  nodes: [
    ["rect", { width: "8", height: "5", x: "8", y: "11", rx: "1" }, { r: "flicker", d: 0.1, o: [12, 13.5] }],
    ["path", { d: "M6.5 18h11" }, { r: "growX", d: 0.15, o: [12, 18] }],
    ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
