import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "applepay" (CC0-1.0). Apple Pay is a trademark of its owner.
export const BrandApplePay = createIcon("BrandApplePay", "brand-apple-pay", {
  nodes: [
    [
      "path",
      {
        d: "M4.7 10.68 c-0.36 -0.44 -0.88 -0.68 -1.44 -0.64 C2.26 10.12 1.5 11 1.5 12.28 c0 1.72 1.12 3.52 2 3.52 0.4 0 0.68 -0.24 1.2 -0.24 s0.8 0.24 1.2 0.24 c0.64 0 1.28 -1.04 1.68 -2.08 a1.6 1.6 0 0 1 -0.16 -2.88 c-0.36 -0.52 -0.88 -0.8 -1.48 -0.8 -0.52 0 -0.88 0.24 -1.24 0.64 z",
      },
      { r: "jelly", a: 0.08, o: [3.8, 15.5] },
    ],
    ["path", { d: "M4.7 9.8 c0 -0.68 0.52 -1.2 1.2 -1.2 0 0.68 -0.52 1.2 -1.2 1.2 z" }, { r: "swing", d: 0.05, a: 25, o: [4.54, 9.8] }],
    ["path", { d: "M9 16V8h2a2 2 0 0 1 0 4H9" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 11v5M17 13.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 1 0 3.5 0" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M18.5 11l1.75 4.5M22.5 11l-3 8" }, { r: "draw", d: 0.3 }],
  ],
});
