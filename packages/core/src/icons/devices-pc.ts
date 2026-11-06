import { icon } from "../icon.js";

// Adapted from Tabler Icons "devices-pc" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesPc = icon("DevicesPc", "devices-pc", {
  nodes: [
    ["path", { d: "M3 5h6v14h-6l0 -14" }, { r: "press", d: 0, a: 0.06, o: [6, 12] }],
    ["path", { d: "M12 9h10v7h-10l0 -7" }, { r: "press", d: 0.15, a: 0.06, o: [17, 12.5] }],
    ["path", { d: "M14 19h6" }],
    ["path", { d: "M17 16v3" }],
    ["path", { d: "M6 13v.01" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M6 16v.01" }, { r: "flicker", d: 0.2 }],
  ],
});
