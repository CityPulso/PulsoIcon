import { createIcon } from "../runtime/createIcon.js";

export const Arcade = createIcon("Arcade", "arcade", {
  nodes: [
    ["path", { d: "M5 22h14v-8l-2-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v9l-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["rect", { x: "9", y: "4.5", width: "6", height: "4.5", rx: "1" }, { r: "flicker", d: 0.05, o: [12, 6.75] }],
    ["path", { d: "M9 16v2" }, { r: "turn", d: 0.1, a: 25, o: [9, 18] }],
    ["path", { d: "M9 16h.01" }, { r: "turn", d: 0.1, a: 25, o: [9, 18] }],
    ["path", { d: "M14 17h.01" }, { r: "pop", d: 0.15, o: [14, 17] }],
    ["path", { d: "M16.5 17h.01" }, { r: "pop", d: 0.22, o: [16.5, 17] }],
  ],
});
