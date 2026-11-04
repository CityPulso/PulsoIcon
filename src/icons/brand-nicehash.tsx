import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nicehash" (CC0-1.0). NiceHash is a trademark of its owner.
export const BrandNicehash = createIcon("BrandNicehash", "brand-nicehash", {
  nodes: [
    ["circle", { cx: "6", cy: "6", r: "2" }, { r: "pop", o: [6, 6] }],
    ["path", { d: "M13 4h7v8" }, { r: "slide", d: 0.1, x: 0.5, y: -0.5 }],
    ["path", { d: "M4 12a8 8 0 0 0 16 0" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M4 12h5a3 3 0 0 0 6 0" }, { r: "draw", d: 0.25 }],
  ],
});
