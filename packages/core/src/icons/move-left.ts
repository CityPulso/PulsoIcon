import { icon } from "../icon.js";

export const MoveLeft = icon("MoveLeft", "move-left", {
  nodes: [
    ["path", { d: "M6 8L2 12L6 16" }, { r: "shoot", x: -1, a: 4, o: [12, 12] }],
    ["path", { d: "M2 12H22" }, { r: "shoot", x: -1, a: 4, o: [12, 12] }],
  ],
});
