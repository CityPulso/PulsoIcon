import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pelican" (CC-BY-4.0). Pelican is a trademark of its owner.
export const BrandPelican = createIcon("BrandPelican", "brand-pelican", {
  nodes: [
    ["path", { d: "M6 21.5c2.5-2 3.5-5 4-8.5.5-4 3-7.5 7-8 2.5-.3 4.5 1 4.5 3.5 0 3-3 4-6 4" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M14.5 8.5h7" }, { r: "slide", d: 0.15, x: 1, a: 1, o: [18, 8.5] }],
    ["path", { d: "M2.5 3c3 0 6 1 8.5 3.5M3.5 7c2.5 0 4.5 1 6 2.5" }, { r: "swing", d: 0.1, a: 10, o: [10, 8] }],
  ],
});
