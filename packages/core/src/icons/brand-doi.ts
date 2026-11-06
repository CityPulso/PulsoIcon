import { icon } from "../icon.js";

// Drawn after Simple Icons "doi" (CC0-1.0). DOI is a trademark of its owner.
export const BrandDoi = icon("BrandDoi", "brand-doi", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.5 9v6.5M9.5 13.5a2 2 0 1 0-4 0a2 2 0 1 0 4 0" }, { r: "draw" }],
    ["circle", { cx: "13.5", cy: "13.5", r: "2" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M17.5 11.5v4" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M17.5 8.5h.01" }, { r: "pop", d: 0.32, o: [17.5, 8.5] }],
  ],
});
