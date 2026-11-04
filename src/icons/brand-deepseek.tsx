import { createIcon } from "../runtime/createIcon.js";

export const BrandDeepseek = createIcon("BrandDeepseek", "brand-deepseek", {
  nodes: [
    [
      "path",
      {
        d: "M17 9.5c3 0 4.5-1.6 5-3.8-1 .6-2 .8-3 .5-.8-1-1.8-1.7-3-2 0 1.5.4 2.7 1 3.5M17 9.5c.2 5.5-3.5 10-8.5 10-3.7 0-6.5-3-6.5-7.5C2 8 5 5.5 9 5.5c2.2 0 4.4 1.3 6 3 .6.6 1.3.9 2 1",
      },
      { r: "sway", a: 5, o: [10, 13] },
    ],
    ["path", { d: "M14 17c-2-1.2-3.5-3-4.8-5C8 10.3 6.2 9.5 4 10c.2 3 2 5.3 4.5 6" }, { r: "swing", d: 0.08, a: 10, o: [10, 15] }],
    ["path", { d: "M13 11.5h.01" }, { r: "blink", d: 0.15, o: [13, 11.5] }],
  ],
});
