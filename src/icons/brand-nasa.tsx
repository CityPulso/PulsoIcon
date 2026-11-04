import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nasa" (CC0-1.0). NASA is a trademark of its owner.
export const BrandNasa = createIcon("BrandNasa", "brand-nasa", {
  nodes: [
    ["path", { d: "M1.5 16V8l4 8V8" }, { r: "draw" }],
    ["path", { d: "M7 16l2-8 2 8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 8h-2.75a1.75 1.75 0 0 0 0 3.75h1a2.1 2.1 0 0 1 0 4.25H12.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18 16l2-8 2 8" }, { r: "draw", d: 0.3 }],
  ],
});
