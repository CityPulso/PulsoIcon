import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "napster" (CC0-1.0). Napster is a trademark of its owner.
export const BrandNapster = createIcon("BrandNapster", "brand-napster", {
  nodes: [
    ["circle", { cx: "12", cy: "13", r: "7" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M4 13V10a8 8 0 0 1 16 0v3" }, { r: "lift", y: -1, a: 0, o: [12, 6] }],
    ["path", { d: "M8 11.5c2 0 4 1 4 3.5c0-2.5 2-3.5 4-3.5" }, { r: "draw", d: 0.15 }],
  ],
});
