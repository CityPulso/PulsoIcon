import { createIcon } from "../runtime/createIcon.js";

export const Dice4 = createIcon("Dice4", "dice-4", {
  svg: { r: "spin", a: 180 },
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M16 8h.01" }, { r: "pop", d: 0.25, o: [16.005, 8] }],
    ["path", { d: "M8 8h.01" }, { r: "pop", d: 0.2, o: [8.005, 8] }],
    ["path", { d: "M8 16h.01" }, { r: "pop", d: 0.35, o: [8.005, 16] }],
    ["path", { d: "M16 16h.01" }, { r: "pop", d: 0.3, o: [16.005, 16] }],
  ],
});
