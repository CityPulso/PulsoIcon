import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "galaxus" (CC0-1.0). Galaxus is a trademark of its owner.
export const BrandGalaxus = createIcon("BrandGalaxus", "brand-galaxus", {
  nodes: [
    ["circle", { cx: "12", cy: "13", r: "5.5" }, { r: "press", a: 0.05, o: [12, 13] }],
    ["circle", { cx: "12", cy: "4.5", r: "1.5" }, { r: "slide", d: 0.1, y: -1, a: 0.8, o: [12, 4.5] }],
    ["path", { d: "M8.2 9 6 7M15.8 9 18 7M8.2 17 6 19M15.8 17 18 19M12 18.5V21" }, { r: "wobble", d: 0.15, a: 6, o: [12, 13] }],
  ],
});
