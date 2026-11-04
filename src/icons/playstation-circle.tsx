import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "playstation-circle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlaystationCircle = createIcon("PlaystationCircle", "playstation-circle", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" }],
    ["path", { d: "M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" }, { r: "press", a: 0.2, o: [12, 12] }],
  ],
});
