import { icon } from "../icon.js";

export const Dice5 = icon("Dice5", "dice-5", {
  svg: { r: "spin", a: 90 },
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M16 8h.01" }, { r: "pop", d: 0.32, o: [16.005, 8] }],
    ["path", { d: "M8 8h.01" }, { r: "pop", d: 0.28, o: [8.005, 8] }],
    ["path", { d: "M8 16h.01" }, { r: "pop", d: 0.4, o: [8.005, 16] }],
    ["path", { d: "M16 16h.01" }, { r: "pop", d: 0.36, o: [16.005, 16] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12.005, 12] }],
  ],
});
