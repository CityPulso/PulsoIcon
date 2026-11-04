import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "location-exclamation" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LocationExclamation = createIcon("LocationExclamation", "location-exclamation", {
  nodes: [
    ["path", { d: "M15.024 19.55l-.524 1.45a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.317 9.186" }],
    ["path", { d: "M19 16v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19 22v.01" }, { r: "pop", d: 0.35, o: [19, 22] }],
  ],
});
