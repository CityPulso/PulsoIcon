import { createIcon } from "../runtime/createIcon.js";

export const MoveLeft = createIcon("MoveLeft", "move-left", {
  nodes: [
    ["path", { d: "M6 8L2 12L6 16" }, { r: "shoot", x: -1, a: 4, o: [12, 12] }],
    ["path", { d: "M2 12H22" }, { r: "shoot", x: -1, a: 4, o: [12, 12] }],
  ],
});
