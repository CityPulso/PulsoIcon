import { createIcon } from "../runtime/createIcon.js";

export const SquareAsterisk = createIcon("SquareAsterisk", "square-asterisk", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 8v8" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
    ["path", { d: "m8.5 14 7-4" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
    ["path", { d: "m8.5 10 7 4" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
  ],
});
