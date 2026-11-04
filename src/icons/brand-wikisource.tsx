import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wikisource" (CC0-1.0). Wikisource is a trademark of its owner.
export const BrandWikisource = createIcon("BrandWikisource", "brand-wikisource", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M2.5 9h19" }],
    ["path", { d: "M8.5 9l1 4.5-1.5 4 3 3 1.5-5.5 1.5 3 1-5L14 9" }, { r: "float", y: -1, o: [12, 13] }],
    ["path", { d: "M10 9l1.5-3 2 3" }, { r: "float", y: -1, o: [12, 13] }],
  ],
});
