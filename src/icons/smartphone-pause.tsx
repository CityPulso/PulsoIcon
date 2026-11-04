import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphonePause = createIcon("SmartphonePause", "smartphone-pause", {
  nodes: [
    ["path", { d: "M13 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M17 17v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M21 17v5" }, { r: "press", d: 0.1, a: 0.25, o: [19, 19.5] }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M12 17v.01" }],
  ],
});
