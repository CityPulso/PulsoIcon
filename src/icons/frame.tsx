import { createIcon } from "../runtime/createIcon.js";

export const Frame = createIcon("Frame", "frame", {
  nodes: [
    ["line", { x1: "22", x2: "2", y1: "6", y2: "6" }, { r: "slide", y: -1, a: 1.5, o: [12, 6] }],
    ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }, { r: "slide", y: 1, a: 1.5, o: [12, 18] }],
    ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }, { r: "slide", d: 0.05, x: -1, a: 1.5, o: [6, 12] }],
    ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [18, 12] }],
  ],
});
