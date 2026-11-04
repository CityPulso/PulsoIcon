import { createIcon } from "../runtime/createIcon.js";

export const TextAlignStart = createIcon("TextAlignStart", "text-align-start", {
  nodes: [
    ["path", { d: "M21 5H3" }, { r: "growX", o: [3, 5] }],
    ["path", { d: "M15 12H3" }, { r: "growX", d: 0.06, o: [3, 12] }],
    ["path", { d: "M17 19H3" }, { r: "growX", d: 0.12, o: [3, 19] }],
  ],
});
