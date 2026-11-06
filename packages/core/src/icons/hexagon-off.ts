import { icon } from "../icon.js";

// Adapted from Tabler Icons "hexagon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "hexagon" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HexagonOff = icon("HexagonOff", "hexagon-off", {
  nodes: [
    [
      "path",
      {
        d: "M8.693 4.69l2.336 -1.39a2.056 2.056 0 0 1 2 0l6 3.573h-.029a2 2 0 0 1 1 1.747v6.536c0 .246 -.045 .485 -.13 .707m-2.16 1.847l-4.739 3.027a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l1.154 -.687",
      },
      { r: "turn", a: 60, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M10.425 1.414l-6.775 3.996a3.21 3.21 0 0 0 -1.65 2.807v7.285a3.226 3.226 0 0 0 1.678 2.826l6.695 4.237c1.034 .57 2.22 .57 3.2 .032l6.804 -4.302c.98 -.537 1.623 -1.618 1.623 -2.793v-7.284l-.005 -.204a3.223 3.223 0 0 0 -1.284 -2.39l-.107 -.075l-.007 -.007a1.074 1.074 0 0 0 -.181 -.133l-6.776 -3.995a3.33 3.33 0 0 0 -3.216 0z",
        stroke: "none",
      },
      { r: "turn", a: 60, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
