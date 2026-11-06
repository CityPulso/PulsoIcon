import { icon } from "../icon.js";

// Adapted from Tabler Icons "brightness-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrightnessOff = icon("BrightnessOff", "brightness-off", {
  nodes: [
    ["path", { d: "M12 3v5m0 4v9" }],
    ["path", { d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M12.5 8.5l4.15 -4.15" }, { r: "fade" }],
    ["path", { d: "M12 14l1.025 -.983m2.065 -1.981l4.28 -4.106" }, { r: "fade" }],
    ["path", { d: "M12 19.6l3.79 -3.79m2 -2l3.054 -3.054" }, { r: "fade" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M12 3l0 18" }, undefined, "line"],
    ["path", { d: "M12 9l4.65 -4.65" }, { r: "fade" }, "line"],
    ["path", { d: "M12 14.3l7.37 -7.37" }, { r: "fade" }, "line"],
    ["path", { d: "M12 19.6l8.85 -8.85" }, { r: "fade" }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
