import { createIcon } from "../runtime/createIcon.js";

export const Archive = createIcon("Archive", "archive", {
  nodes: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }, { r: "lift", a: -6, o: [2, 8] }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }, { r: "press", d: 0.05, a: 0.04, o: [12, 21] }],
    ["path", { d: "M10 12h4" }, { r: "growX", d: 0.15, o: [12, 12] }],
  ],
});
