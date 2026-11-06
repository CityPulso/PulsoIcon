import { icon } from "../icon.js";

// Drawn after Simple Icons "codecrafters" (CC0-1.0). CodeCrafters is a trademark of its owner.
export const BrandCodecrafters = icon("BrandCodecrafters", "brand-codecrafters", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9 9l-3 3 3 3" }, { r: "slide", x: -0.75 }],
    ["path", { d: "M15 9l3 3-3 3" }, { r: "slide", x: 0.75 }],
    ["path", { d: "M13 8l-2 8" }, { r: "draw", d: 0.1 }],
  ],
});
