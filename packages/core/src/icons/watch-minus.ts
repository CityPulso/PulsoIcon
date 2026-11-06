import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-watch-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WatchMinus = icon("WatchMinus", "watch-minus", {
  nodes: [
    ["path", { d: "M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6" }],
    ["path", { d: "M9 18v3h3.5" }],
    ["path", { d: "M9 6v-3h6v3" }],
    ["path", { d: "M16 19h6" }, { r: "growX", d: 0.1, o: [19, 19] }],
  ],
});
