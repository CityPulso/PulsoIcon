import { icon } from "../icon.js";

// Adapted from Tabler Icons "send-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "send" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SendOff = icon("SendOff", "send-off", {
  nodes: [
    ["path", { d: "M10 14l2 -2m2 -2l7 -7" }, { r: "slide", x: 0.7, y: -0.7, a: 2, o: [14, 10] }],
    [
      "path",
      { d: "M10.718 6.713l10.282 -3.713l-3.715 10.289m-1.063 2.941l-1.722 4.77a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l4.772 -1.723" },
      { r: "slide", x: 0.7, y: -0.7, a: 2, o: [14, 10] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M21.864 3.549l-6.454 17.868a1.55 1.55 0 0 1 -1.41 .903a1.54 1.54 0 0 1 -1.394 -.874l-2.88 -5.759zm-1.414 -1.414l-12.139 12.138l-5.728 -2.864a1.55 1.55 0 0 1 -.903 -1.409c0 -.606 .353 -1.157 .981 -1.44z",
        stroke: "none",
      },
      { r: "slide", x: 0.7, y: -0.7, a: 2, o: [14, 10] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
