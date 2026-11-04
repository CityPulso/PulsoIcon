import { createIcon } from "../runtime/createIcon.js";

export const SquareSquare = createIcon("SquareSquare", "square-square", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }, { r: "spin", a: -90, o: [12, 12] }],
  ],
});
