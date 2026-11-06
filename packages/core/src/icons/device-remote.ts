import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-remote" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceRemote = icon("DeviceRemote", "device-remote", {
  nodes: [
    ["path", { d: "M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "press", d: 0.05, a: 0.3, o: [12, 10] }],
    ["path", { d: "M7 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -14" }],
    ["path", { d: "M12 3v2" }, { r: "flicker", d: 0.2 }],
    ["path", { d: "M10 15v.01" }, { r: "pop", d: 0.25, o: [10, 15] }],
    ["path", { d: "M10 18v.01" }, { r: "pop", d: 0.35, o: [10, 18] }],
    ["path", { d: "M14 18v.01" }, { r: "pop", d: 0.4, o: [14, 18] }],
    ["path", { d: "M14 15v.01" }, { r: "pop", d: 0.3, o: [14, 15] }],
  ],
});
