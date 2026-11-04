import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "librewolf" (CC0-1.0). LibreWolf is a trademark of its owner.

export const BrandLibrewolf = createIcon("BrandLibrewolf", "brand-librewolf", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M9.5 20c.5-3 0-5.5-1.5-7.5L6 7.5l4.5 2 3-4 .5 4.5c2 1.5 3 4.5 3 7.5v2.5" }, { r: "tilt", d: 0.1, a: -8, o: [12, 20] }],
  ],
});
