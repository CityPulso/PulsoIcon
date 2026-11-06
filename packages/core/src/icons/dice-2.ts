import { icon } from "../icon.js";

export const Dice2 = icon("Dice2", "dice-2", {
  svg: { r: "spin", a: 180 },
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M15 9h.01" }, { r: "pop", d: 0.2, o: [15.005, 9] }],
    ["path", { d: "M9 15h.01" }, { r: "pop", d: 0.28, o: [9.005, 15] }],
  ],
});
