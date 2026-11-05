import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "meteor-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "meteor" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MeteorOff = createIcon("MeteorOff", "meteor-off", {
  nodes: [
    [
      "path",
      { d: "M9.75 5.761l3.25 -2.761l-1 5l9 -5l-5 9h5l-2.467 2.536m-1.983 2.04l-2.441 2.51a6.5 6.5 0 1 1 -8.855 -9.506l2.322 -1.972" },
      { r: "slide", x: -1, y: 1, a: 1.5, o: [9, 15] },
    ],
    ["path", { d: "M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [9, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M21.874 3.486l-4.174 7.514h3.3c.846 0 1.293 .973 .791 1.612l-.074 .085l-6.9 7.095a7.5 7.5 0 1 1 -10.21 -10.974l7.746 -6.58c.722 -.614 1.814 .028 1.628 .958l-.577 2.879l7.11 -3.95c.88 -.488 1.849 .481 1.36 1.36m-12.374 7.515a3.5 3.5 0 0 0 -3.495 3.308l-.005 .192a3.5 3.5 0 1 0 3.5 -3.5",
        stroke: "none",
      },
      { r: "slide", x: -1, y: 1, a: 1.5, o: [9, 15] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
