import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tomtom" (CC0-1.0). TomTom is a trademark of its owner.

export const BrandTomtom = createIcon("BrandTomtom", "brand-tomtom", {
  nodes: [
    ["circle", { cx: "12", cy: "9", r: "6.5" }, { r: "bounce", y: -1, a: 1.5 }],
    ["circle", { cx: "12", cy: "9", r: "2.5" }, { r: "bounce", y: -1, a: 1.5 }],
    ["path", { d: "M9.5 18.5h5L12 21.5z" }, { r: "bounce", d: 0.05, y: -1, a: 1.5 }],
  ],
});
