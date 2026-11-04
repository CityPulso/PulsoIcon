import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cairographics" (CC0-1.0). Cairo Graphics is a trademark of its owner.
export const BrandCairoGraphics = createIcon("BrandCairoGraphics", "brand-cairo-graphics", {
  nodes: [
    ["ellipse", { cx: "12", cy: "14", rx: "4.5", ry: "6" }, { r: "wobble", a: 5, o: [12, 14] }],
    ["path", { d: "M12 10.5v9.5M7.5 12.5h9" }, { r: "wobble", a: 5, o: [12, 14] }],
    ["path", { d: "M10 8.5V6.5a2 2 0 0 1 4 0v2M10 5 8.5 3M14 5l1.5-2" }, { r: "wobble", a: 5, o: [12, 14] }],
    ["path", { d: "M7.5 11 4 9M7.5 14.5H3.5M8 18l-3 2.5" }, { r: "sway", a: 8, o: [7.5, 14] }],
    ["path", { d: "M16.5 11 20 9M16.5 14.5h4M16 18l3 2.5" }, { r: "sway", a: -8, o: [16.5, 14] }],
  ],
});
