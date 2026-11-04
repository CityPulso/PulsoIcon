import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dataiku" (CC0-1.0). Dataiku is a trademark of its owner.
export const BrandDataiku = createIcon("BrandDataiku", "brand-dataiku", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 18.5 13 12c.5-2 1.5-3.5 3-3.5a1.5 1.5 0 0 1 1.5 1.5c0 3-2 5.5-5 6" }, { r: "float", a: 1.2, o: [12, 13] }],
    ["path", { d: "M17.5 10h1" }, { r: "float", a: 1.2, o: [12, 13] }],
    ["path", { d: "M13 16h4.5" }, { r: "growX", d: 0.2, o: [13, 16] }],
  ],
});
