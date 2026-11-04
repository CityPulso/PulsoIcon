import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "stardock" (CC0-1.0). Stardock is a trademark of its owner.
export const BrandStardock = createIcon("BrandStardock", "brand-stardock", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 9.5h-2.2a1.3 1.3 0 0 0 0 2.6h.4a1.3 1.3 0 0 1 0 2.6H10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M7.6 16.2C4 18.8 1.6 21 2.6 21.6c1.5.8 7.5-2 12.6-5.6S22.5 8.6 21.5 7.4c-.6-.7-2.3-.4-4.5.5" }, { r: "draw", d: 0.2 }],
  ],
});
