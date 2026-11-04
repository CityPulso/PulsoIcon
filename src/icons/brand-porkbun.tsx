import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "porkbun" (CC0-1.0). Porkbun is a trademark of its owner.

export const BrandPorkbun = createIcon("BrandPorkbun", "brand-porkbun", {
  nodes: [
    ["path", { d: "M5 20v-8a7 7 0 0 1 14 0v8" }, { r: "bounce", y: -1, a: 1, o: [12, 20] }],
    ["path", { d: "M10 20v-1.5a2 2 0 0 1 4 0V20" }, { r: "bounce", y: -1, a: 1, o: [12, 20] }],
    ["path", { d: "M6.5 7.5 6 3l4.3 2.3" }, { r: "ring", d: 0.1, a: 12, o: [8, 6] }],
    ["path", { d: "M17.5 7.5 18 3l-4.3 2.3" }, { r: "ring", d: 0.1, a: -12, o: [16, 6] }],
    ["rect", { x: "9.5", y: "11.5", width: "5", height: "3.5", rx: "1.75" }, { r: "bounce", y: -1, a: 1, o: [12, 20] }],
    ["path", { d: "M9 9h.01M15 9h.01" }, { r: "blink", d: 0.2, o: [12, 9] }],
  ],
});
