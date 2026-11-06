import { icon } from "../icon.js";

export const BrandAfterEffects = icon("BrandAfterEffects", "brand-after-effects", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 16 8.5 8l2.5 8m-4-2.5h3" }, { r: "draw", d: 0.05, o: [8.5, 12] }],
    ["path", { d: "M13.5 13.5h4a2 2 0 1 0-.6 1.4" }, { r: "draw", d: 0.15, o: [15.5, 13.5] }],
  ],
});
