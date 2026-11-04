import { createIcon } from "../runtime/createIcon.js";

export const SquareOff = createIcon("SquareOff", "square-off", {
  nodes: [
    ["path", { d: "M20.4 20.4a2 2 0 01-1.4.6H5a2 2 0 01-2-2V5a2 2 0 01.59-1.41" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M21 15.3V5a2 2 0 00-2-2H8.7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
