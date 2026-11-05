import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "telescope-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TelescopeOff = createIcon("TelescopeOff", "telescope-off", {
  nodes: [
    ["path", { d: "M6 21l6 -5l6 5" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M12 13v8" }, { r: "press", o: [12, 21] }],
    [
      "path",
      {
        d: "M8.238 8.264l-4.183 2.51c-1.02 .614 -1.357 1.898 -.76 2.906l.165 .28c.52 .88 1.624 1.266 2.605 .91l6.457 -2.34m2.907 -1.055l4.878 -1.77a1.023 1.023 0 0 0 .565 -1.455l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-6.016 3.61",
      },
      { r: "turn", a: -10, o: [12, 13] },
    ],
    ["path", { d: "M14 5l3 5.5" }, { r: "turn", a: -10, o: [12, 13] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44", fill: "none" }, { r: "turn", a: -10, o: [12, 13] }],
    ["path", { d: "m13.56 11.747 4.332-.924", fill: "none" }, { r: "turn", a: -10, o: [12, 13] }],
    ["path", { d: "m16 21-3.105-6.21", fill: "none" }, { r: "press", o: [12, 21] }],
    [
      "path",
      { d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" },
      { r: "turn", a: -10, o: [12, 13] },
    ],
    ["path", { d: "m6.158 8.633 1.114 4.456", fill: "none" }, { r: "press", o: [12, 21] }],
    ["path", { d: "m8 21 3.105-6.21", fill: "none" }, { r: "press", o: [12, 21] }],
    ["circle", { cx: "12", cy: "13", r: "2", fill: "none" }, { r: "turn", a: -10, o: [12, 13] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
