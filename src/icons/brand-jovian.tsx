import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jovian" (CC0-1.0). Jovian is a trademark of its owner.
export const BrandJovian = createIcon("BrandJovian", "brand-jovian", {
  nodes: [
    ["rect", { x: "4", y: "3", width: "16", height: "18", rx: "3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 8h.01" }, { r: "pop", o: [15, 8] }],
    ["path", { d: "M9 16h.01" }, { r: "pop", o: [9, 16], d: 0.1 }],
    ["path", { d: "M15 16h.01" }, { r: "pop", o: [15, 16], d: 0.2 }],
  ],
});
