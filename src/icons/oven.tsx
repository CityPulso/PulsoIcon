import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "oven" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Oven = createIcon("Oven", "oven", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["rect", { width: "10", height: "6", x: "7", y: "11", rx: "1" }, { r: "flicker", d: 0.1, o: [12, 14] }],
    ["path", { d: "M8 7h.01" }, { r: "pop", o: [8, 7] }],
    ["path", { d: "M12 7h.01" }, { r: "pop", d: 0.06, o: [12, 7] }],
    ["path", { d: "M16 7h.01" }, { r: "pop", d: 0.12, o: [16, 7] }],
  ],
});
