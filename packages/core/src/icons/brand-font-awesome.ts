import { icon } from "../icon.js";

// Drawn after Simple Icons "fontawesome" (CC0-1.0). Font Awesome is a trademark of its owner.
export const BrandFontAwesome = icon("BrandFontAwesome", "brand-font-awesome", {
  nodes: [
    ["path", { d: "M5 22V6" }],
    ["circle", { cx: "5", cy: "3.5", r: "1.5" }, { r: "pop", o: [5, 3.5] }],
    ["path", { d: "M5 6h14l-3 4.5 3 4.5H5" }, { r: "swing", d: 0.05, a: 8, o: [5, 10] }],
  ],
});
