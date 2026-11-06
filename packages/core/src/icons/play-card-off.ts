import { icon } from "../icon.js";

// Adapted from Tabler Icons "play-card-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayCardOff = icon("PlayCardOff", "play-card-off", {
  nodes: [
    ["path", { d: "M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M16 18h.01" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M12.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z" }, { r: "flip", o: [12, 12] }, "cut"],
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "2" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
