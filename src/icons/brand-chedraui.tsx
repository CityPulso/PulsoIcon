import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "chedraui" (CC0-1.0). Chedraui is a trademark of its owner.

export const BrandChedraui = createIcon("BrandChedraui", "brand-chedraui", {
  nodes: [
    ["circle", { cx: "7", cy: "4.5", r: "2" }, { r: "bounce", x: 0, y: -1, a: 1 }],
    ["path", { d: "M7 8.5v4.5l-3 8M7 13l3 8M7 9.5l5 2.5" }, { r: "bounce", x: 0, y: -1, a: 1 }],
    ["path", { d: "M12 11.5h1.5l1.5 6h5l1.5-4.5H14.5M15.5 20.5h.01M19.5 20.5h.01" }, { r: "slide", x: 1, y: 0, a: 1.5, d: 0.1 }],
  ],
});
