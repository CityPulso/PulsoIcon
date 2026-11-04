import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hearth" (CC0-1.0). Hearth is a trademark of its owner.

export const BrandHearth = createIcon("BrandHearth", "brand-hearth", {
  nodes: [
    ["path", { d: "M5 3v18" }, { r: "draw" }],
    ["path", { d: "M5 12l6-3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11 21V8.5l8 3.5v9z" }, { r: "rise", d: 0.1, a: 2, o: [15, 21] }],
  ],
});
