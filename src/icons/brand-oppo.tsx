import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "oppo" (CC0-1.0). OPPO is a trademark of its owner.
export const BrandOppo = createIcon("BrandOppo", "brand-oppo", {
  nodes: [
    ["ellipse", { cx: "4", cy: "12", rx: "2.25", ry: "2.5" }, { r: "draw", o: [4, 12] }],
    ["path", { d: "M8 17.5v-6.5" }, { r: "draw", d: 0.1, o: [8, 14] }],
    ["ellipse", { cx: "10", cy: "12", rx: "2", ry: "2.5" }, { r: "draw", d: 0.15, o: [10, 12] }],
    ["path", { d: "M14 17.5v-6.5" }, { r: "draw", d: 0.25, o: [14, 14] }],
    ["ellipse", { cx: "16", cy: "12", rx: "2", ry: "2.5" }, { r: "draw", d: 0.3, o: [16, 12] }],
    ["ellipse", { cx: "20.25", cy: "12", rx: "1.75", ry: "2.5" }, { r: "draw", d: 0.4, o: [20, 12] }],
  ],
});
