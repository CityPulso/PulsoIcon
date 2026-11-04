import { createIcon } from "../runtime/createIcon.js";

export const Rows2 = createIcon("Rows2", "rows-2", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 12h18" }, { r: "growX", d: 0.05, o: [12, 12] }],
  ],
});
