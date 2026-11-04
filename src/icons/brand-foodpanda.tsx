import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "foodpanda" (CC0-1.0). foodpanda is a trademark of its owner.
export const BrandFoodpanda = createIcon("BrandFoodpanda", "brand-foodpanda", {
  nodes: [
    ["circle", { cx: "12", cy: "13", r: "8.5" }, { r: "press", a: 0.03, o: [12, 13] }],
    ["path", { d: "M5 8.5a2.5 2.5 0 1 1 3.5-3.5M15.5 5A2.5 2.5 0 1 1 19 8.5" }, { r: "pop", d: 0.05, o: [12, 6] }],
    [
      "path",
      { d: "M7.2 14c-.4-1.5.6-3.5 2-3.7s1.7 1 1.2 2.2-1.4 2.3-2.2 2.3S7.4 14.5 7.2 14zM16.8 14c.4-1.5-.6-3.5-2-3.7s-1.7 1-1.2 2.2 1.4 2.3 2.2 2.3.8-.3 1-.8z" },
      { r: "blink", d: 0.15, o: [12, 12] },
    ],
    ["path", { d: "M11.3 15.5h1.4M10.5 18c1 .5 2 .5 3 0" }, { r: "pop", d: 0.25, o: [12, 16.5] }],
  ],
});
