import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bmw" (CC0-1.0). BMW is a trademark of its owner.
export const BrandBmw = createIcon("BrandBmw", "brand-bmw", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 6v12" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M6 12h12" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
