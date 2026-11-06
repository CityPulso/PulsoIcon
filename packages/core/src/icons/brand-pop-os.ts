import { icon } from "../icon.js";

// Drawn after Simple Icons "popos" (CC0-1.0). Pop!_OS is a trademark of its owner.

export const BrandPopOs = icon("BrandPopOs", "brand-pop-os", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7.5 14V6.5h2.5a2.5 2.5 0 0 1 0 5H7.5" }, { r: "press", a: 0.06, o: [9.5, 14] }],
    ["path", { d: "M15.5 6.5v4.5M15.5 13.5h.01" }, { r: "wobble", d: 0.1, o: [15.5, 13.5] }],
    ["path", { d: "M8 17h8" }, { r: "flicker", d: 0.2 }],
  ],
});
