import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "strapi" (CC0-1.0). Strapi is a trademark of its owner.
export const BrandStrapi = createIcon("BrandStrapi", "brand-strapi", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 8h8v8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 8v4h4v4h4" }, { r: "draw", d: 0.2 }],
  ],
});
