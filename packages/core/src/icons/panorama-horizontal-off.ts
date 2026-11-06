import { icon } from "../icon.js";

// Adapted from Tabler Icons "panorama-horizontal-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "panorama-horizontal" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PanoramaHorizontalOff = icon("PanoramaHorizontalOff", "panorama-horizontal-off", {
  nodes: [
    [
      "path",
      {
        d: "M10.95 6.952c2.901 .15 5.803 -.323 8.705 -1.42a1 1 0 0 1 1.345 .934v10.534m-3.212 .806c-4.483 -1.281 -8.966 -1.074 -13.449 .622a.993 .993 0 0 1 -1.339 -.935v-11.027a1 1 0 0 1 1.338 -.935c.588 .221 1.176 .418 1.764 .59",
      },
      { r: "slide", x: 1, a: 1 },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M19.31 4.591a2 2 0 0 1 2.69 1.873v11c0 1.382 -1.38 2.38 -2.694 1.897c-4.879 -1.845 -9.734 -1.845 -14.612 0c-1.304 .495 -2.694 -.481 -2.694 -1.871v-11.032a2 2 0 0 1 2.676 -1.87l.025 .012l.448 .162c4.572 1.623 9.123 1.622 13.703 -.003z",
        stroke: "none",
      },
      { r: "slide", x: 1, a: 1 },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
