import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "500px" (CC0-1.0). 500px is a trademark of its owner.
export const Brand500px = createIcon("Brand500px", "brand-500px", {
  nodes: [
    ["path", { d: "M7.5 7.5H3.5L3 11.5a2.75 2.75 0 1 1 0 4" }, { r: "draw" }],
    ["ellipse", { cx: "11.5", cy: "12", rx: "2.25", ry: "4.5" }, { r: "roll", d: 0.1, a: 0.5, o: [11.5, 12] }],
    ["ellipse", { cx: "18.75", cy: "12", rx: "2.25", ry: "4.5" }, { r: "roll", d: 0.2, a: 0.5, o: [18.75, 12] }],
  ],
});
