import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hexagon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HexagonOff = createIcon("HexagonOff", "hexagon-off", {
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
});
