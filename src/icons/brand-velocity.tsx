import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "velocity" (CC0-1.0). Velocity is a trademark of its owner.

export const BrandVelocity = createIcon("BrandVelocity", "brand-velocity", {
  nodes: [
    ["path", { d: "M7 6.5l4.76 2.75v5.5L7 17.5l-4.76-2.75v-5.5z" }, { r: "slide", x: 1, a: 1, o: [7, 12] }],
    ["path", { d: "M7 12v5.5M7 12L2.24 9.25M7 12l4.76-2.75" }, { r: "slide", x: 1, a: 1, o: [7, 12] }],
    ["path", { d: "M14.5 9H21" }, { r: "growX", d: 0.05, o: [21, 9] }],
    ["path", { d: "M15.5 12h4" }, { r: "growX", d: 0.12, o: [19.5, 12] }],
    ["path", { d: "M14.5 15H21" }, { r: "growX", d: 0.19, o: [21, 15] }],
  ],
});
