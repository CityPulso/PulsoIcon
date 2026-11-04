import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "icon" (CC0-1.0). ICON is a trademark of its owner.

export const BrandIcon = createIcon("BrandIcon", "brand-icon", {
  nodes: [
    ["path", { d: "M17.63 8.75A6.5 6.5 0 0 1 8.75 17.63" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M6.37 15.25A6.5 6.5 0 0 1 15.25 6.37" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "19", cy: "5", r: "1.5" }, { r: "pop", d: 0.2, o: [19, 5] }],
    ["circle", { cx: "5", cy: "19", r: "1.5" }, { r: "pop", d: 0.28, o: [5, 19] }],
  ],
});
