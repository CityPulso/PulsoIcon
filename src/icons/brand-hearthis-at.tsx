import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hearthisdotat" (CC0-1.0). hearthis.at is a trademark of its owner.

export const BrandHearthisAt = createIcon("BrandHearthisAt", "brand-hearthis-at", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 15.5h.01" }, { r: "pop", o: [7.5, 15.5] }],
    ["path", { d: "M7.5 11.5a4 4 0 0 1 4 4" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M7.5 7.5a8 8 0 0 1 8 8" }, { r: "draw", d: 0.16 }],
  ],
});
