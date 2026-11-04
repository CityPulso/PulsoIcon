import { createIcon } from "../runtime/createIcon.js";

export const BrandGoodreads = createIcon("BrandGoodreads", "brand-goodreads", {
  nodes: [
    ["circle", { cx: "11.5", cy: "10", r: "4.5" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M16 4v11.5a4.5 4.5 0 0 1-8.8 1.3" }, { r: "draw", d: 0.1, o: [12, 14] }],
  ],
});
