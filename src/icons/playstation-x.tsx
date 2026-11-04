import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "playstation-x" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlaystationX = createIcon("PlaystationX", "playstation-x", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" }],
    ["path", { d: "M8.5 8.5l7 7" }, { r: "press", a: 0.2, o: [12, 12] }],
    ["path", { d: "M8.5 15.5l7 -7" }, { r: "press", a: 0.2, o: [12, 12] }],
  ],
});
