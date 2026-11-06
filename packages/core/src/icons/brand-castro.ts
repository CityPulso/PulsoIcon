import { icon } from "../icon.js";

// Drawn after Simple Icons "castro" (CC0-1.0). Castro is a trademark of its owner.
export const BrandCastro = icon("BrandCastro", "brand-castro", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "10", r: "2.5" }, { r: "pulse", a: 0.25, o: [12, 10] }],
    ["path", { d: "M8.5 19.5l2-6M15.5 19.5l-2-6" }, { r: "draw", d: 0.1 }],
  ],
});
