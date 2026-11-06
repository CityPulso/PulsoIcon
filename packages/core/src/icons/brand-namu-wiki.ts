import { icon } from "../icon.js";

// Drawn after Simple Icons "namuwiki" (CC0-1.0). Namu Wiki is a trademark of its owner.
export const BrandNamuWiki = icon("BrandNamuWiki", "brand-namu-wiki", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7 16l3.5-3.5h5" }, { r: "draw" }],
    ["path", { d: "M10.5 12.5V9.5" }, { r: "draw", d: 0.1 }],
    ["circle", { cx: "10.5", cy: "8", r: "1.5" }, { r: "pop", d: 0.2, o: [10.5, 8] }],
    ["circle", { cx: "17", cy: "12.5", r: "1.5" }, { r: "pop", d: 0.28, o: [17, 12.5] }],
  ],
});
