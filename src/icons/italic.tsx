import { createIcon } from "../runtime/createIcon.js";

export const Italic = createIcon("Italic", "italic", {
  text: true,
  nodes: [
    ["line", { x1: "19", x2: "10", y1: "4", y2: "4" }, { r: "slide", x: 1, a: 1, o: [14.5, 4] }],
    ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }, { r: "slide", x: -1, a: 1, o: [9.5, 20] }],
    ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }, { r: "turn", a: 12, o: [12, 12] }],
  ],
});
