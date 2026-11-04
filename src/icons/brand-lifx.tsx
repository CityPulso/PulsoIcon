import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lifx" (CC0-1.0). LIFX is a trademark of its owner.

export const BrandLifx = createIcon("BrandLifx", "brand-lifx", {
  nodes: [
    ["path", { d: "M9.5 16a6.5 6.5 0 1 1 5 0" }, { r: "flicker", o: [12, 10] }],
    ["path", { d: "M9.5 19h5" }, { r: "flicker", d: 0.1, o: [12, 19] }],
    ["path", { d: "M10.5 22h3" }, { r: "flicker", d: 0.2, o: [12, 22] }],
  ],
});
