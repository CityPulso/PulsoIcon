import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "xfce" (CC0-1.0). XFCE is a trademark of its owner.
export const BrandXfce = createIcon("BrandXfce", "brand-xfce", {
  nodes: [
    [
      "path",
      { d: "M7 17c0-3.5 3-5.5 7-5.5 1.5 0 2.5-2.5 4.5-2.5 1.75 0 3 1.25 3 3 0 1.25-1 2-1.5 2.75-.75 1.5-1.5 3.25-4.5 3.25H8.5C7.5 18 7 17.75 7 17z" },
      { r: "bounce", x: 1, y: 0, a: 0.5, o: [14, 14] },
    ],
    ["circle", { cx: "17.5", cy: "7.5", r: "1.5" }, { r: "bounce", x: 1, y: 0, a: 0.5, o: [14, 14] }],
    ["path", { d: "M19 12h.01" }, { r: "blink", d: 0.2, o: [19, 12] }],
    ["path", { d: "M7 16c-2.5 0-4.5-1.5-5-5" }, { r: "swing", d: 0.05, a: 15, o: [7, 16] }],
  ],
});
