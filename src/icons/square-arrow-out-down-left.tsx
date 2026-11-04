import { createIcon } from "../runtime/createIcon.js";

export const SquareArrowOutDownLeft = createIcon("SquareArrowOutDownLeft", "square-arrow-out-down-left", {
  nodes: [
    ["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m3 21 9-9" }, { r: "shoot", d: 0.05, x: -1, y: 1, a: 3, o: [7.5, 16.5] }],
    ["path", { d: "M9 21H3v-6" }, { r: "shoot", d: 0.05, x: -1, y: 1, a: 3, o: [7.5, 16.5] }],
  ],
});
