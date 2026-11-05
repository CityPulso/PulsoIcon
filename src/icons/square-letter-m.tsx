import { createIcon } from "../runtime/createIcon.js";

export const SquareLetterM = createIcon("SquareLetterM", "square-letter-m", {
  text: true,
  nodes: [
    ["path", { d: "M8 16.001v-7.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3v7.501" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
