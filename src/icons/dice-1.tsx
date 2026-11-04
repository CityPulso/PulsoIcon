import { createIcon } from "../runtime/createIcon.js";

export const Dice1 = createIcon("Dice1", "dice-1", {
  svg: { r: "spin", a: 90 },
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12.005, 12] }],
  ],
});
