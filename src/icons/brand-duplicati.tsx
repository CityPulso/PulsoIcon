import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "duplicati" (CC0-1.0). Duplicati is a trademark of its owner.
export const BrandDuplicati = createIcon("BrandDuplicati", "brand-duplicati", {
  nodes: [
    ["rect", { x: "10", y: "3", width: "11", height: "11", rx: "2" }],
    ["path", { d: "M12.5 14v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-4" }, { r: "drop", y: -1, a: 1.5, d: 0.1 }],
    ["rect", { x: "3", y: "15", width: "6.5", height: "6", rx: "1.5" }, { r: "slide", x: -1, y: 1, a: 1 }],
  ],
});
