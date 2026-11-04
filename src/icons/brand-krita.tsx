import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "krita" (CC0-1.0). Krita is a trademark of its owner.
export const BrandKrita = createIcon("BrandKrita", "brand-krita", {
  nodes: [
    ["path", { d: "M10.5 3.1A9 9 0 1 1 3.1 10.5" }, { r: "draw" }],
    ["path", { d: "M3 3l8.5 8.5" }, { r: "swing", d: 0.1, a: 8, o: [3, 3] }],
    ["path", { d: "M11.5 11.5l3 3c-.5 2-2 3-4 3 1.5 1.5 4.5 1.5 6 0s1.5-4.5-2-6z" }, { r: "swing", d: 0.1, a: 8, o: [3, 3] }],
  ],
});
