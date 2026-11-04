import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "zomato" (CC0-1.0). Zomato is a trademark of its owner.

export const BrandZomato = createIcon("BrandZomato", "brand-zomato", {
  nodes: [
    ["path", { d: "M5 8.5h7.5L4 16.5h7.5" }, { r: "draw", o: [8, 12.5] }],
    ["ellipse", { cx: "17.5", cy: "12.5", rx: "3.5", ry: "4" }, { r: "roll", d: 0.15, x: 1, a: 1, o: [17.5, 12.5] }],
  ],
});
