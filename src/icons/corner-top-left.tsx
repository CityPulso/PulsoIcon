import { createIcon } from "../runtime/createIcon.js";

export const CornerTopLeft = createIcon("CornerTopLeft", "corner-top-left", {
  nodes: [["path", { d: "M4 20V10A6 6 0 0 1 10 4H20" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [4, 4] }]],
});
