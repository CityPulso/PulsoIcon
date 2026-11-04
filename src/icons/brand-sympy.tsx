import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sympy" (CC0-1.0). SymPy is a trademark of its owner.
export const BrandSympy = createIcon("BrandSympy", "brand-sympy", {
  nodes: [
    ["path", { d: "M3 9.5 9 7l6 2.5V18l-6 3-6-3z" }, { r: "press", a: 0.04, o: [9, 14] }],
    ["path", { d: "M3 9.5l6 2.5 6-2.5M9 12v9" }, { r: "press", a: 0.04, o: [9, 14] }],
    ["path", { d: "M15 15c2.5 0 4-1.5 4-3.5S16 9 16 7s1.5-3 3-3h1.5l1-1M20.5 4l1 1" }, { r: "wobble", d: 0.1, a: 6, o: [17, 10] }],
  ],
});
