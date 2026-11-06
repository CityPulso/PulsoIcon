import { icon } from "../icon.js";

// Drawn after Simple Icons "steelseries" (CC0-1.0). Steelseries is a trademark of its owner.
export const BrandSteelseries = icon("BrandSteelseries", "brand-steelseries", {
  nodes: [
    ["circle", { cx: "13", cy: "14", r: "7" }, { r: "press", a: 0.04, o: [13, 14] }],
    ["circle", { cx: "13", cy: "14", r: "2.5" }, { r: "pulse", d: 0.1, o: [13, 14] }],
    ["path", { d: "M13 7V3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M6 14H3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M5 6.5h.01" }, { r: "pop", d: 0.3, o: [5, 6.5] }],
  ],
});
