import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "afdian" (CC0-1.0). AFDIAN is a trademark of its owner.
export const BrandAfdian = createIcon("BrandAfdian", "brand-afdian", {
  nodes: [
    ["ellipse", { cx: "12.5", cy: "14", rx: "8", ry: "6" }, { r: "jelly", a: 0.08, o: [12.5, 20] }],
    ["path", { d: "M7.5 9.5C5.5 7.5 3 6 4 4.5s4.5-.5 4 2" }, { r: "swing", a: 15, o: [7.5, 9.5] }],
    ["path", { d: "M10 13.5h.01" }, { r: "blink", d: 0.1, o: [12.5, 13.5] }],
    ["path", { d: "M15 13.5h.01" }, { r: "blink", d: 0.1, o: [12.5, 13.5] }],
    ["path", { d: "M11.5 16.5q1 1 2 0" }, { r: "draw", d: 0.2 }],
  ],
});
