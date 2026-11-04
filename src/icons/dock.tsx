import { createIcon } from "../runtime/createIcon.js";

export const Dock = createIcon("Dock", "dock", {
  nodes: [
    ["path", { d: "M2 8h20" }, { r: "growX", d: 0.2, o: [12, 8] }],
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 16h12" }, { r: "float", d: 0.1, a: 1, o: [12, 16] }],
  ],
});
