import { createIcon } from "../runtime/createIcon.js";

export const PaintRoller = createIcon("PaintRoller", "paint-roller", {
  nodes: [
    ["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2" }, { r: "roll", x: 1, a: 2, o: [10, 5] }],
    ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }, { r: "fade", d: 0.1, o: [15, 13.5] }],
    ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1" }, { r: "fade", d: 0.1, o: [15, 13.5] }],
  ],
});
