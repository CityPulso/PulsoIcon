import { createIcon } from "../runtime/createIcon.js";

export const SquarePlus = createIcon("SquarePlus", "square-plus", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 12h8" }, { r: "spin", d: 0.1, a: 90, o: [12, 12] }],
    ["path", { d: "M12 8v8" }, { r: "spin", d: 0.1, a: 90, o: [12, 12] }],
  ],
});
