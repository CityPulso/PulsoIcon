import { icon } from "../icon.js";

// Drawn after Simple Icons "fiat" (CC0-1.0). Fiat is a trademark of its owner.
export const BrandFiat = icon("BrandFiat", "brand-fiat", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M8 8.5H5.5v7M5.5 12h2" }, { r: "draw", d: 0.1, o: [6.75, 12] }],
    ["path", { d: "M10 8.5v7" }, { r: "draw", d: 0.16, o: [10, 12] }],
    ["path", { d: "M12 15.5l1.5-7 1.5 7M12.5 13.5h2" }, { r: "draw", d: 0.22, o: [13.5, 12] }],
    ["path", { d: "M17 8.5h3M18.5 8.5v7" }, { r: "draw", d: 0.3, o: [18.5, 12] }],
  ],
});
