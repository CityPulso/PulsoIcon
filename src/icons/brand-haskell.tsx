import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "haskell" (CC0-1.0). Haskell is a trademark of its owner.

export const BrandHaskell = createIcon("BrandHaskell", "brand-haskell", {
  nodes: [
    ["path", { d: "M3 4l5 8-5 8" }, { r: "slide", x: 1, a: 1 }],
    ["path", { d: "M8 4l10 16" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13 12l-5 8" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14 9h7" }, { r: "growX", d: 0.25, o: [14, 9] }],
    ["path", { d: "M16.5 13h4.5" }, { r: "growX", d: 0.3, o: [16.5, 13] }],
  ],
});
