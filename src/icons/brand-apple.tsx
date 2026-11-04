import { createIcon } from "../runtime/createIcon.js";

export const BrandApple = createIcon("BrandApple", "brand-apple", {
  nodes: [
    [
      "path",
      {
        d: "M12 7.2c-.9-1.1-2.2-1.7-3.6-1.6C5.9 5.8 4 8 4 11.2c0 4.3 2.8 8.8 5 8.8 1 0 1.7-.6 3-.6s2 .6 3 .6c1.6 0 3.2-2.6 4.2-5.2a4 4 0 0 1-.4-7.2c-.9-1.3-2.2-2-3.7-2-1.3 0-2.2.6-3.1 1.6z",
      },
      { r: "jelly", a: 0.08, o: [12, 20] },
    ],
    ["path", { d: "M12 5c0-1.7 1.3-3 3-3 0 1.7-1.3 3-3 3z" }, { r: "swing", d: 0.05, a: 25, o: [12, 5] }],
  ],
});
