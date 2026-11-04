import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "traccar" (CC0-1.0). Traccar is a trademark of its owner.

export const BrandTraccar = createIcon("BrandTraccar", "brand-traccar", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 11.5a5 5 0 0 0 6 6z" }, { r: "tilt", a: 10, o: [9.5, 14.5] }],
    ["path", { d: "M11.5 12.5h.01" }, { r: "pop", o: [11.5, 12.5] }],
    ["path", { d: "M13.5 9a3.5 3.5 0 0 1 1.5 1.5" }, { r: "blink", d: 0.1, o: [14, 10] }],
    ["path", { d: "M14 6.5a6 6 0 0 1 3.5 3.5" }, { r: "blink", d: 0.2, o: [16, 8] }],
  ],
});
