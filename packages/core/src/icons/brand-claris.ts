import { icon } from "../icon.js";

// Drawn after Simple Icons "claris" (CC0-1.0). Claris is a trademark of its owner.

export const BrandClaris = icon("BrandClaris", "brand-claris", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 5l7 7-7 7-7-7z" }, { r: "turn", a: 90, o: [12, 12] }],
    ["path", { d: "M13 9.5 10.5 12l2.5 2.5" }, { r: "slide", x: -1, y: 0, a: 1, d: 0.1 }],
  ],
});
