import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rich" (CC0-1.0). Rich is a trademark of its owner.

export const BrandRich = createIcon("BrandRich", "brand-rich", {
  nodes: [
    ["rect", { x: "3", y: "11", width: "18", height: "9", rx: "1.5" }],
    ["path", { d: "M3 11V8.5A4.5 4.5 0 0 1 7.5 4h9A4.5 4.5 0 0 1 21 8.5V11" }, { r: "lift", y: -1.5, a: -8, o: [3, 11] }],
    ["rect", { x: "10", y: "9.5", width: "4", height: "4", rx: "1" }, { r: "pop", d: 0.15, o: [12, 11.5] }],
  ],
});
