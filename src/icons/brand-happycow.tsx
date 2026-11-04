import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "happycow" (CC0-1.0). HappyCow is a trademark of its owner.

export const BrandHappycow = createIcon("BrandHappycow", "brand-happycow", {
  nodes: [
    ["path", { d: "M7 13.5a5.5 5.5 0 1 1 10 0" }, { r: "tilt", a: 6, o: [12, 20] }],
    ["ellipse", { cx: "12", cy: "16", rx: "5", ry: "3.5" }, { r: "tilt", a: 6, o: [12, 20] }],
    ["path", { d: "M8 6.5C6.5 5.8 5.8 4.5 6 3" }, { r: "tilt", a: 6, o: [12, 20] }],
    ["path", { d: "M16 6.5c1.5-.7 2.2-2 2-3.5" }, { r: "tilt", a: 6, o: [12, 20] }],
    ["path", { d: "M6.6 9.5H3.5" }, { r: "tilt", a: 6, o: [12, 20] }],
    ["path", { d: "M17.4 9.5h3.1" }, { r: "tilt", a: 6, o: [12, 20] }],
    ["path", { d: "M10 10h.01" }, { r: "blink", d: 0.2, o: [10.005, 10] }],
    ["path", { d: "M14 10h.01" }, { r: "blink", d: 0.2, o: [14.005, 10] }],
    ["path", { d: "M10.5 16h.01" }],
    ["path", { d: "M13.5 16h.01" }],
  ],
});
