import { createIcon } from "../runtime/createIcon.js";

export const X = createIcon("X", "x", {
  nodes: [
    ["path", { d: "M18 6 6 18" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m6 6 12 12" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
