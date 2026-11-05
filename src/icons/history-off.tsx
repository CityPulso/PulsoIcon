import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "history-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HistoryOff = createIcon("HistoryOff", "history-off", {
  nodes: [
    [
      "path",
      { d: "M3.05 11a8.975 8.975 0 0 1 2.54 -5.403m2.314 -1.697a9 9 0 0 1 12.113 12.112m-1.695 2.312a9 9 0 0 1 -14.772 -3.324m-.5 5v-5h5" },
      { r: "turn", a: -60, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", fill: "none" }, { r: "turn", a: -60, o: [12, 12] }],
    ["path", { d: "M3 3v5h5", fill: "none" }, { r: "turn", a: -60, o: [12, 12] }],
    ["path", { d: "M12 7v5l4 2", fill: "none" }, { r: "turn", a: -60, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
