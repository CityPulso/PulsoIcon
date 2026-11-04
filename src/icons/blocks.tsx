import { createIcon } from "../runtime/createIcon.js";

export const Blocks = createIcon("Blocks", "blocks", {
  nodes: [
    ["path", { d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" }, { r: "press", d: 0.15, a: 0.05, o: [10, 14] }],
    ["rect", { x: "14", y: "2", width: "8", height: "8", rx: "1" }, { r: "drop", x: 1, y: -1, a: 3, o: [18, 6] }],
  ],
});
