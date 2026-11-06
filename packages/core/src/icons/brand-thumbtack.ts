import { icon } from "../icon.js";

// Drawn after Simple Icons "thumbtack" (CC0-1.0). Thumbtack is a trademark of its owner.

export const BrandThumbtack = icon("BrandThumbtack", "brand-thumbtack", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7.5 8h9" }, { r: "drop", o: [12, 12] }],
    ["path", { d: "M10.5 8v6l1.5 3.5 1.5-3.5V8" }, { r: "drop", o: [12, 12] }],
  ],
});
