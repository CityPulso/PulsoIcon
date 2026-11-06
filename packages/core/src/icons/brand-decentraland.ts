import { icon } from "../icon.js";

// Drawn after Simple Icons "decentraland" (CC0-1.0). Decentraland is a trademark of its owner.
export const BrandDecentraland = icon("BrandDecentraland", "brand-decentraland", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "16", cy: "8", r: "1.75" }, { r: "rise", d: 0.1, a: 2, o: [16, 8] }],
    ["path", { d: "M5.5 17l5.5-9v9" }, { r: "sway", d: 0.1, a: 6, o: [8.5, 17] }],
    ["path", { d: "M14 17l3.5-4.5v4.5" }, { r: "sway", d: 0.15, a: 6, o: [16, 17] }],
    ["path", { d: "M3.5 17h17" }],
  ],
});
