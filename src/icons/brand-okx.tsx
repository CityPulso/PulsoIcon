import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "okx" (CC0-1.0). OKX is a trademark of its owner.
export const BrandOkx = createIcon("BrandOkx", "brand-okx", {
  nodes: [
    ["rect", { x: "2.5", y: "2.5", width: "5", height: "5" }, { r: "pop", o: [5, 5] }],
    ["rect", { x: "16.5", y: "2.5", width: "5", height: "5" }, { r: "pop", d: 0.1, o: [19, 5] }],
    ["rect", { x: "9.5", y: "9.5", width: "5", height: "5" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["rect", { x: "2.5", y: "16.5", width: "5", height: "5" }, { r: "pop", d: 0.1, o: [5, 19] }],
    ["rect", { x: "16.5", y: "16.5", width: "5", height: "5" }, { r: "pop", d: 0.3, o: [19, 19] }],
  ],
});
