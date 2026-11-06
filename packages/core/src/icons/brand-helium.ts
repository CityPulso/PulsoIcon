import { icon } from "../icon.js";

// Drawn after Simple Icons "helium" (CC0-1.0). Helium is a trademark of its owner.

export const BrandHelium = icon("BrandHelium", "brand-helium", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M9.9 14.1 8 16" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M14.1 9.9 16 8" }, { r: "spin", o: [12, 12] }],
    ["circle", { cx: "7", cy: "17", r: "1.4" }, { r: "spin", o: [12, 12] }],
    ["circle", { cx: "17", cy: "7", r: "1.4" }, { r: "spin", o: [12, 12] }],
  ],
});
