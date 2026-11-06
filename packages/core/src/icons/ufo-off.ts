import { icon } from "../icon.js";

// Adapted from Tabler Icons "ufo-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const UfoOff = icon("UfoOff", "ufo-off", {
  nodes: [
    [
      "path",
      {
        d: "M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 1.08 -.931 2.063 -2.468 2.814m-3 1c-1.36 .295 -2.9 .462 -4.531 .462c-5.52 0 -10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724",
      },
      { r: "float", y: -1, a: 1 },
    ],
    [
      "path",
      {
        d: "M14.69 10.686c1.388 -.355 2.31 -.976 2.31 -1.686v-.035c0 -2.742 -2.239 -4.965 -5 -4.965c-1.125 0 -2.164 .37 -3 .992m-1.707 2.297a4.925 4.925 0 0 0 -.293 1.676v.035c0 .961 1.696 1.764 3.956 1.956",
      },
      { r: "float", y: -1, a: 1 },
    ],
    ["path", { d: "M15 17l2 3" }, { r: "float", y: -1, a: 1 }],
    ["path", { d: "M8.5 17l-1.5 3" }, { r: "float", y: -1, a: 1 }],
    ["path", { d: "M12 14h.01" }, { r: "flicker" }],
    ["path", { d: "M7 13h.01" }, { r: "flicker" }],
    ["path", { d: "M17 13h.01" }, { r: "flicker" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["ellipse", { cx: "12", cy: "13", rx: "10", ry: "3.5" }, { r: "float", y: -1, a: 1 }],
    ["path", { d: "M7 10a5 5 0 0 1 10 0" }, { r: "float", y: -1, a: 1 }],
    ["path", { d: "M7 13h 0.01" }, { r: "flicker" }, "line"],
    ["path", { d: "M12 13.5h 0.01" }, { r: "flicker" }, "line"],
    ["path", { d: "M17 13h 0.01" }, { r: "flicker" }, "line"],
    ["path", { d: "M9 19L7.5 21", fill: "none" }, { r: "float", y: -1, a: 1 }],
    ["path", { d: "M15 19l 1.5 2", fill: "none" }, { r: "float", y: -1, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
