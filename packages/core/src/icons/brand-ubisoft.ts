import { icon } from "../icon.js";

// Drawn after Simple Icons "ubisoft" (CC0-1.0). Ubisoft is a trademark of its owner.
export const BrandUbisoft = icon("BrandUbisoft", "brand-ubisoft", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7 15.5A6 6 0 1 1 17.8 10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["circle", { cx: "13", cy: "13", r: "2" }, { r: "pop", d: 0.1, o: [13, 13] }],
  ],
});
