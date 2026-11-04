import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "1dot1dot1dot1" (CC0-1.0). 1.1.1.1 is a trademark of its owner.
export const Brand1111 = createIcon("Brand1111", "brand-1-1-1-1", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8.5 9.5L11.5 7v10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16.5 10V6l-2.5 3h3.5" }, { r: "pop", d: 0.3, o: [16, 8] }],
  ],
});
