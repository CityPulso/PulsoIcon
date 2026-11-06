import { icon } from "../icon.js";

export const MoveUpRight = icon("MoveUpRight", "move-up-right", {
  nodes: [
    ["path", { d: "M13 5H19V11" }, { r: "shoot", x: 1, y: -1, a: 4, o: [12, 12] }],
    ["path", { d: "M19 5L5 19" }, { r: "shoot", x: 1, y: -1, a: 4, o: [12, 12] }],
  ],
});
