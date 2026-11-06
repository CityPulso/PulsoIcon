import { icon } from "../icon.js";

// Adapted from Tabler Icons "window-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WindowOff = icon("WindowOff", "window-off", {
  nodes: [
    ["path", { d: "M6.166 6.19a6.903 6.903 0 0 0 -1.166 3.81v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-1m0 -4v-5c0 -3.728 -3.134 -7 -7 -7a6.86 6.86 0 0 0 -3.804 1.158" }],
    ["path", { d: "M5 13h8m4 0h2" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M12 3v5m0 4v9" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7", fill: "none" }],
    ["path", { d: "M5 13l14 0", fill: "none" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M12 3l0 18", fill: "none" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
