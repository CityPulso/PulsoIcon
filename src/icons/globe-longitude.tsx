import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "world-longitude" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GlobeLongitude = createIcon("GlobeLongitude", "globe-longitude", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }],
    ["path", { d: "M11.5 3a11.2 11.2 0 0 0 0 18" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M12.5 3a11.2 11.2 0 0 1 0 18" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M12 3l0 18" }, { r: "flip", o: [12, 12] }],
  ],
});
