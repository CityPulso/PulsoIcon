import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "location-cancel" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LocationCancel = createIcon("LocationCancel", "location-cancel", {
  nodes: [
    ["path", { d: "M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.305 9.151" }],
    ["path", { d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17 21l4 -4" }, { r: "draw", d: 0.25 }],
  ],
});
