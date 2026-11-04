import { createIcon } from "../runtime/createIcon.js";

export const ArmenianDram = createIcon("ArmenianDram", "armenian-dram", {
  nodes: [
    ["path", { d: "M11 10h8" }, { r: "growX", d: 0.2, o: [11, 12] }],
    ["path", { d: "M11 14h8" }, { r: "growX", d: 0.28, o: [11, 12] }],
    ["path", { d: "M17 20V10a6 6 0 0 0-12 0" }, { r: "redraw", o: [11, 12] }],
  ],
});
