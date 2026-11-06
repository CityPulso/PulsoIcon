import { icon } from "../icon.js";

// Drawn after Simple Icons "xubuntu" (CC0-1.0). Xubuntu is a trademark of its owner.
export const BrandXubuntu = icon("BrandXubuntu", "brand-xubuntu", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    [
      "path",
      { d: "M8.5 17c-1.5-2-1.5-6 0-8 .5-1.5 2-1.5 2.5 0 1.5-.5 3-.5 4.5.5 1.5 1.5 2 3.5 1.5 5.5-.5 1.5-2 2.5-4 2.5s-3.5 0-4.5-.5z" },
      { r: "wobble", d: 0.05, a: 6, o: [12, 14] },
    ],
    ["path", { d: "M15.5 8l.75-2.5M17 9l1.5-1.75" }, { r: "ring", d: 0.15, a: 12, o: [16, 9] }],
  ],
});
