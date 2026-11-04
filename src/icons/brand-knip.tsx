import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "knip" (CC0-1.0). Knip is a trademark of its owner.
export const BrandKnip = createIcon("BrandKnip", "brand-knip", {
  nodes: [
    ["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "4" }],
    ["circle", { cx: "7.5", cy: "9", r: "1.75" }, { r: "swing", a: -10, o: [12.5, 12] }],
    ["path", { d: "M9 9.9 18.5 15" }, { r: "swing", a: -10, o: [12.5, 12] }],
    ["circle", { cx: "7.5", cy: "15", r: "1.75" }, { r: "swing", a: 10, o: [12.5, 12] }],
    ["path", { d: "M9 14.1 18.5 9" }, { r: "swing", a: 10, o: [12.5, 12] }],
  ],
});
