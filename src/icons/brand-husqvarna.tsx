import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "husqvarna" (CC0-1.0). Husqvarna is a trademark of its owner.

export const BrandHusqvarna = createIcon("BrandHusqvarna", "brand-husqvarna", {
  nodes: [
    ["path", { d: "M5 6v7a7 7 0 0 0 14 0V6" }],
    ["path", { d: "M4.5 6h15M5 6L3.5 3M12 6V3M19 6l1.5-3" }, { r: "lift", x: 0, y: -1, a: 0, o: [12, 5] }],
    ["path", { d: "M9.5 9v7M14.5 9v7M9.5 12.5h5" }, { r: "pop", d: 0.15, o: [12, 12.5] }],
  ],
});
