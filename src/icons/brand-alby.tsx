import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "alby" (CC0-1.0). Alby is a trademark of its owner.
export const BrandAlby = createIcon("BrandAlby", "brand-alby", {
  nodes: [
    ["ellipse", { cx: "12", cy: "14", rx: "9", ry: "6.5" }, { r: "float", a: 1 }],
    ["rect", { x: "7.5", y: "12", width: "9", height: "4", rx: "2" }, { r: "float", a: 1 }],
    ["path", { d: "M10.5 14h.01M13.5 14h.01" }, { r: "blink", d: 0.2, o: [12, 14] }],
    ["path", { d: "M7.5 8.3 5 5.5" }, { r: "wobble", a: 12, o: [7.5, 8.3] }],
    ["circle", { cx: "4.5", cy: "4.5", r: "1" }, { r: "wobble", a: 12, o: [7.5, 8.3] }],
    ["path", { d: "M16.5 8.3 19 5.5" }, { r: "wobble", a: -12, o: [16.5, 8.3] }],
    ["circle", { cx: "19.5", cy: "4.5", r: "1" }, { r: "wobble", a: -12, o: [16.5, 8.3] }],
  ],
});
