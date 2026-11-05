import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "music-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MusicOff = createIcon("MusicOff", "music-off", {
  nodes: [
    ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "bounce", y: -1, a: 1, o: [6, 17] }],
    ["path", { d: "M14.42 14.45a3 3 0 1 0 4.138 4.119" }, { r: "bounce", d: 0.15, y: -1, a: 1, o: [16, 17] }],
    ["path", { d: "M9 17v-8m0 -4v-1h10v11" }, { r: "sway", a: 3, o: [12, 12] }],
    ["path", { d: "M12 8h7" }, { r: "sway", a: 3, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", fill: "none" }, { r: "sway", a: 3, o: [12, 12] }],
    ["circle", { cx: "18", cy: "16", r: "3" }, { r: "bounce", d: 0.15, y: -1, a: 1, o: [16, 17] }],
    ["circle", { cx: "6", cy: "19", r: "3" }, { r: "bounce", y: -1, a: 1, o: [6, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
