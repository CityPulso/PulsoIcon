import { icon } from "../icon.js";

// Adapted from Tabler Icons "device-imac-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceImacOff = icon("DeviceImacOff", "device-imac-off", {
  nodes: [
    ["path", { d: "M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707" }, { r: "pulse", a: 0.04, o: [12, 10] }],
    ["path", { d: "M3 13h10m4 0h4" }, { r: "pulse", a: 0.04, o: [12, 10] }],
    ["path", { d: "M8 21h8" }],
    ["path", { d: "M10 17l-.5 4" }],
    ["path", { d: "M14 17l.5 4" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12" }, { r: "pulse", a: 0.04, o: [12, 10] }],
    ["path", { d: "M3 13h18" }, { r: "pulse", a: 0.04, o: [12, 10] }, "line"],
    ["path", { d: "M8 21h8", fill: "none" }],
    ["path", { d: "M10 17l-.5 4", fill: "none" }],
    ["path", { d: "M14 17l.5 4", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
