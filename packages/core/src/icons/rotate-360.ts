import { icon } from "../icon.js";

// Adapted from Tabler Icons "rotate-360" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Rotate360 = icon("Rotate360", "rotate-360", {
  nodes: [
    ["path", { d: "M12 16h4v4" }, { r: "slide", d: 0.4, x: 0.7, y: 0.7, a: 1.2, o: [14, 18] }],
    [
      "path",
      { d: "M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515" },
      { r: "draw" },
    ],
  ],
});
