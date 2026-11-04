import { createIcon } from "../runtime/createIcon.js";

export const Split = createIcon("Split", "split", {
  nodes: [
    ["path", { d: "M16 3h5v5" }, { r: "slide", d: 0.15, x: 1, y: -1, a: 1.5, o: [18, 6] }],
    ["path", { d: "M8 3H3v5" }, { r: "slide", d: 0.15, x: -1, y: -1, a: 1.5, o: [5.5, 5.5] }],
    ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }, { r: "draw", o: [7.5, 12.5] }],
    ["path", { d: "m15 9 6-6" }, { r: "slide", d: 0.15, x: 1, y: -1, a: 1.5, o: [18, 6] }],
  ],
});
