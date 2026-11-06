import { icon } from "../icon.js";

// Adapted from Tabler Icons "exposure-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ExposureOff = icon("ExposureOff", "exposure-off", {
  nodes: [
    ["path", { d: "M3.6 20.4l8.371 -8.371m2.04 -2.04l6.389 -6.389" }],
    ["path", { d: "M6 8h2m0 0v2" }, { r: "pop", o: [7, 9] }],
    ["path", { d: "M14 16h2" }, { r: "pop", d: 0.1, o: [15, 16] }],
    ["path", { d: "M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362 .36 -.95 .5 -1.5 .5h-14a2 2 0 0 1 -2 -2v-14c0 -.541 .215 -1.033 .565 -1.393" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M3.6 20.4l16.8 -16.8" }, undefined, "line"],
    ["path", { d: "M6 8h 4" }, { r: "pop", o: [7, 9] }, "line"],
    ["path", { d: "M8 6v 4" }, { r: "pop", o: [7, 9] }, "line"],
    ["path", { d: "M14 16h4" }, { r: "pop", d: 0.1, o: [15, 16] }, "line"],
    ["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -14" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
