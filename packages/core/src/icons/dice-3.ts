import { icon } from "../icon.js";

export const Dice3 = icon("Dice3", "dice-3", {
  svg: { r: "spin", a: 90 },
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M16 8h.01" }, { r: "pop", d: 0.2, o: [16.005, 8] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.26, o: [12.005, 12] }],
    ["path", { d: "M8 16h.01" }, { r: "pop", d: 0.32, o: [8.005, 16] }],
  ],
});
