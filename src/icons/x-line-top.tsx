import { createIcon } from "../runtime/createIcon.js";

export const XLineTop = createIcon("XLineTop", "x-line-top", {
  nodes: [
    ["path", { d: "M18 4H6" }, { r: "growX", d: 0.2, o: [12, 4] }],
    ["path", { d: "M18 8 6 20" }, { r: "draw", o: [12, 14] }],
    ["path", { d: "m6 8 12 12" }, { r: "draw", d: 0.1, o: [12, 14] }],
  ],
});
