import { createIcon } from "../runtime/createIcon.js";

export const CornerBottomLeft = createIcon("CornerBottomLeft", "corner-bottom-left", {
  nodes: [["path", { d: "M4 4V14A6 6 0 0 0 10 20H20" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [4, 20] }]],
});
