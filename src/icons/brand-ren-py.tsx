import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "renpy" (CC0-1.0). Ren'Py is a trademark of its owner.
export const BrandRenPy = createIcon("BrandRenPy", "brand-ren-py", {
  nodes: [
    ["path", { d: "M3 10.5h18" }, { r: "tilt", a: 6, o: [12, 10] }],
    ["path", { d: "M6.5 10.5a5.5 5.5 0 0 1 11 0" }, { r: "tilt", a: 6, o: [12, 10] }],
    ["path", { d: "M6.5 10.5v3.5a5.5 5.5 0 0 0 11 0v-3.5" }, { r: "press", a: 0.03, o: [12, 19] }],
    ["path", { d: "M10 14.5h.01M14 14.5h.01" }, { r: "blink", d: 0.3, o: [12, 14.5] }],
    ["path", { d: "M11 17.5h2" }, { r: "press", a: 0.03, o: [12, 19] }],
  ],
});
