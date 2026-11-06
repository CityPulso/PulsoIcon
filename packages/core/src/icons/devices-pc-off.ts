import { icon } from "../icon.js";

// Adapted from Tabler Icons "devices-pc-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DevicesPcOff = icon("DevicesPcOff", "devices-pc-off", {
  nodes: [
    ["path", { d: "M9 9v10h-6v-14h2" }, { r: "press", a: 0.06, o: [6, 19] }],
    ["path", { d: "M13 9h9v7h-2m-4 0h-4v-4" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M14 19h5" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M17 17v2" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M6 13v.01" }, { r: "press", a: 0.06, o: [6, 19] }],
    ["path", { d: "M6 16v.01" }, { r: "press", a: 0.06, o: [6, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M3 5h6v14h-6l0 -14" }, { r: "press", a: 0.06, o: [6, 19] }],
    ["path", { d: "M12 9h10v7h-10l0 -7" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M14 19h6", fill: "none" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M17 16v3", fill: "none" }, { r: "float", d: 0.08, o: [17, 13] }],
    ["path", { d: "M6 13v.01" }, { r: "press", a: 0.06, o: [6, 19] }, "line"],
    ["path", { d: "M6 16v.01" }, { r: "press", a: 0.06, o: [6, 19] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
