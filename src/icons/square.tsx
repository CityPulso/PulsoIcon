import { createIcon } from "../runtime/createIcon.js";

export const Square = createIcon("Square", "square", {
  nodes: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "spin", a: 90, o: [12, 12] }]],
});
