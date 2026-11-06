import { icon } from "../icon.js";

// Drawn after Simple Icons "fidoalliance" (CC0-1.0). Fido Alliance is a trademark of its owner.
export const BrandFidoAlliance = icon("BrandFidoAlliance", "brand-fido-alliance", {
  nodes: [
    ["path", { d: "M3.5 17V9a2 2 0 0 1 2-2M2 11h3.5" }, { r: "draw", o: [4, 12] }],
    ["path", { d: "M7.5 11v6" }, { r: "draw", d: 0.1, o: [7.5, 14] }],
    ["path", { d: "M7.5 7.5h.01" }, { r: "pop", d: 0.4, a: 0.6, o: [7.5, 7.5] }],
    ["path", { d: "M14 7v10M14 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0" }, { r: "draw", d: 0.18, o: [12, 13] }],
    ["circle", { cx: "19", cy: "14.5", r: "2.5" }, { r: "roll", d: 0.28, x: 1, a: 0.5, o: [19, 14.5] }],
  ],
});
