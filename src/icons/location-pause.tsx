import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "location-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LocationPause = createIcon("LocationPause", "location-pause", {
  nodes: [
    ["path", { d: "M13.02 20.04l-3.02 -6.04l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.634 10.062" }],
    ["path", { d: "M17 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", a: 0.25, o: [19, 19.5] }],
  ],
});
