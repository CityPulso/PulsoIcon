import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "furaffinity" (CC0-1.0). Fur Affinity is a trademark of its owner.
export const BrandFurAffinity = createIcon("BrandFurAffinity", "brand-fur-affinity", {
  nodes: [
    ["path", { d: "M3 14l5-3 1-7 4 4.5h3l3-4.5 .5 7-2 5-3.5 3H9l-2.5-3z" }, { r: "wobble", a: 5, o: [12, 14] }],
    ["path", { d: "M14 12h.01" }, { r: "blink", d: 0.2, o: [14, 12] }],
    ["path", { d: "M3 14l1.5 2" }, { r: "slide", d: 0.1, y: 1, a: 0.5, o: [4, 15] }],
  ],
});
