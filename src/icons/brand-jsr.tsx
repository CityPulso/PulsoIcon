import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jsr" (CC0-1.0). JSR is a trademark of its owner.
export const BrandJsr = createIcon("BrandJsr", "brand-jsr", {
  nodes: [
    ["path", { d: "M5 5.5h.01" }, { r: "pop", o: [5, 5.5] }],
    ["path", { d: "M5 9v8.5H2.5" }, { r: "draw" }],
    ["path", { d: "M13 9H8.5v4h4.5v4H8.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16 17V9h5v2.5" }, { r: "draw", d: 0.2 }],
  ],
});
