import { createIcon } from "../runtime/createIcon.js";

export const MoveRight = createIcon("MoveRight", "move-right", {
  nodes: [
    ["path", { d: "M18 8L22 12L18 16" }, { r: "shoot", x: 1, a: 4, o: [12, 12] }],
    ["path", { d: "M2 12H22" }, { r: "shoot", x: 1, a: 4, o: [12, 12] }],
  ],
});
