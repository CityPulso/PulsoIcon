import { icon } from "../icon.js";

// Drawn after Simple Icons "iata" (CC0-1.0). IATA is a trademark of its owner.

export const BrandIata = icon("BrandIata", "brand-iata", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "pulse", o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "12", rx: "2", ry: "5" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M7 12h10" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M2 9.5h4M3 12h3M4 14.5h2.5" }, { r: "slide", x: -1, a: 1, d: 0.1, o: [4, 12] }],
    ["path", { d: "M22 9.5h-4M21 12h-3M20 14.5h-2.5" }, { r: "slide", x: 1, a: 1, d: 0.1, o: [20, 12] }],
  ],
});
