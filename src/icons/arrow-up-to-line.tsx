import { createIcon } from "../runtime/createIcon.js";

export const ArrowUpToLine = createIcon("ArrowUpToLine", "arrow-up-to-line", {
  nodes: [
    ["path", { d: "M5 3h14" }, { r: "jelly", d: 0.15, o: [12, 3] }],
    ["path", { d: "m18 13-6-6-6 6" }, { r: "bounce", y: -1, a: 3, o: [12, 14] }],
    ["path", { d: "M12 7v14" }, { r: "bounce", y: -1, a: 3, o: [12, 14] }],
  ],
});
