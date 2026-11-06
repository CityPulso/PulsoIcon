import { icon } from "../icon.js";

// Drawn after Simple Icons "pixabay" (CC0-1.0). Pixabay is a trademark of its owner.

export const BrandPixabay = icon("BrandPixabay", "brand-pixabay", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M6.5 12v6.5" }, { r: "draw" }],
    ["circle", { cx: "9", cy: "12", r: "2.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 9.5l4.5 5M18.5 9.5l-4.5 5" }, { r: "pop", d: 0.25, o: [16.25, 12] }],
  ],
});
