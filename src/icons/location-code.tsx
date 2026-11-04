import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "location-code" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LocationCode = createIcon("LocationCode", "location-code", {
  nodes: [
    ["path", { d: "M11.505 17.01l-1.505 -3.01l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.677 10.184" }],
    ["path", { d: "M20 21l2 -2l-2 -2" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M17 17l-2 2l2 2" }, { r: "slide", x: -1, a: 1.5 }],
  ],
});
