import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "f5" (CC0-1.0). F5 is a trademark of its owner.
export const BrandF5 = createIcon("BrandF5", "brand-f5", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8.5 18V9.5A2.5 2.5 0 0 1 11 7" }, { r: "draw", d: 0.05, o: [9.5, 12] }],
    ["path", { d: "M6.5 11.5H10.5" }, { r: "draw", d: 0.15, o: [8.5, 11.5] }],
    ["path", { d: "M17.5 7h-3.5l-.5 3.5c2.5-.8 4.5.5 4.5 2.5s-1.5 3-3 3c-.8 0-1.5-.3-2-.8" }, { r: "draw", d: 0.25, o: [15.5, 11.5] }],
  ],
});
