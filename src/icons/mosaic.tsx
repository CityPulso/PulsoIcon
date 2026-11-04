import { createIcon } from "../runtime/createIcon.js";

export const Mosaic = createIcon("Mosaic", "mosaic", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 10h6l2-7" }, { r: "fade", o: [7, 7] }],
    ["path", { d: "M9 10l5 3 7-2" }, { r: "fade", d: 0.1, o: [15, 11] }],
    ["path", { d: "M14 13l-1 8" }, { r: "fade", d: 0.2, o: [13.5, 17] }],
    ["path", { d: "M9 10l-1 6-5 1" }, { r: "fade", d: 0.3, o: [7, 14] }],
  ],
});
