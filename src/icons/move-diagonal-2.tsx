import { createIcon } from "../runtime/createIcon.js";

export const MoveDiagonal2 = createIcon("MoveDiagonal2", "move-diagonal-2", {
  nodes: [
    ["path", { d: "M19 13v6h-6" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [16, 16] }],
    ["path", { d: "M5 11V5h6" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [8, 8] }],
    ["path", { d: "m5 5 14 14" }, { r: "fade", o: [12, 12] }],
  ],
});
