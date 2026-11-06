import { icon } from "../icon.js";

// Adapted from Tabler Icons "wash-dry-3" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WashDry3 = icon("WashDry3", "wash-dry-3", {
  nodes: [
    ["path", { d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" }],
    ["path", { d: "M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "spin", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 12h.01" }, { r: "spin", d: 0.1, o: [12, 12] }],
    ["path", { d: "M15 12h.01" }, { r: "spin", d: 0.1, o: [12, 12] }],
  ],
});
