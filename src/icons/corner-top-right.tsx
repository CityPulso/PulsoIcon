import { createIcon } from "../runtime/createIcon.js";

export const CornerTopRight = createIcon("CornerTopRight", "corner-top-right", {
  nodes: [["path", { d: "M20 20V10A6 6 0 0 0 14 4H4" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [20, 4] }]],
});
