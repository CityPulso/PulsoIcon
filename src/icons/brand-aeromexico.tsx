import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "aeromexico" (CC0-1.0). Aeroméxico is a trademark of its owner.
export const BrandAeromexico = createIcon("BrandAeromexico", "brand-aeromexico", {
  nodes: [
    ["path", { d: "M11 20V8.5A4.5 4.5 0 0 1 15.5 4h1.5l4 3.5-3 1.5v3.5l-2 1.5V20" }, { r: "press", a: 0.06, o: [15, 20] }],
    ["path", { d: "M3 8h5" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M2 12h6" }, { r: "slide", d: 0.06, x: -1, a: 1.5 }],
    ["path", { d: "M3 16h5" }, { r: "slide", d: 0.12, x: -1, a: 1.5 }],
  ],
});
