import { icon } from "../icon.js";

// Drawn after Simple Icons "cline" (CC0-1.0). Cline is a trademark of its owner.

export const BrandCline = icon("BrandCline", "brand-cline", {
  nodes: [
    ["rect", { x: "5", y: "7", width: "14", height: "13", rx: "4" }],
    ["path", { d: "M3 12v4M21 12v4" }],
    ["circle", { cx: "12", cy: "4", r: "1.5" }, { r: "pop", o: [12, 4] }],
    ["path", { d: "M12 5.5V7" }],
    ["path", { d: "M10 12v2M14 12v2" }, { r: "blink", d: 0.15, o: [12, 13] }],
  ],
});
