import { createIcon } from "../runtime/createIcon.js";

export const MoveDiagonal = createIcon("MoveDiagonal", "move-diagonal", {
  nodes: [
    ["path", { d: "M11 19H5v-6" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [8, 16] }],
    ["path", { d: "M13 5h6v6" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [16, 8] }],
    ["path", { d: "M19 5 5 19" }, { r: "fade", o: [12, 12] }],
  ],
});
