import { icon } from "../icon.js";

// Adapted from Tabler Icons "brightness" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Brightness = icon("Brightness", "brightness", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, { r: "pulse", d: 0, o: [12, 12] }],
    ["path", { d: "M12 3l0 18" }, { r: "pulse", d: 0, o: [12, 12] }],
    ["path", { d: "M12 9l4.65 -4.65" }, { r: "growX", d: 0.05, o: [12, 9] }],
    ["path", { d: "M12 14.3l7.37 -7.37" }, { r: "growX", d: 0.1, o: [12, 14] }],
    ["path", { d: "M12 19.6l8.85 -8.85" }, { r: "growX", d: 0.15, o: [12, 19] }],
  ],
});
