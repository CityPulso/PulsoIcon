import { createIcon } from "../runtime/createIcon.js";

export const MoveVertical = createIcon("MoveVertical", "move-vertical", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "jelly", a: 0.06, o: [12, 12] }],
    ["path", { d: "m8 18 4 4 4-4" }, { r: "slide", y: 1, a: 1.5, o: [12, 20] }],
    ["path", { d: "m8 6 4-4 4 4" }, { r: "slide", y: -1, a: 1.5, o: [12, 4] }],
  ],
});
