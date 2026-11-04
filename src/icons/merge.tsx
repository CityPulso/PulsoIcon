import { createIcon } from "../runtime/createIcon.js";

export const Merge = createIcon("Merge", "merge", {
  nodes: [
    ["path", { d: "m8 6 4-4 4 4" }, { r: "slide", y: -1, a: 1.5, o: [12, 4] }],
    ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }, { r: "draw", d: 0.1, o: [8, 12] }],
    ["path", { d: "m20 22-5-5" }, { r: "slide", d: 0.2, x: 1, y: 1, a: 1.5, o: [17.5, 19.5] }],
  ],
});
