import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "flag-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FlagPause = createIcon("FlagPause", "flag-pause", {
  nodes: [
    ["path", { d: "M13.536 15.029a4.987 4.987 0 0 1 -1.536 -1.029a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5" }, { r: "swing", a: 4, o: [5, 9.5] }],
    ["path", { d: "M5 21v-7" }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, o: [19, 19.5] }],
  ],
});
