import { icon } from "../icon.js";

// Adapted from Tabler Icons "play-card-7" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayCard7 = icon("PlayCard7", "play-card-7", {
  nodes: [
    ["path", { d: "M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }],
    ["path", { d: "M10 9h4l-2 6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 6h.01" }, { r: "pop", o: [8.0, 6.0] }],
    ["path", { d: "M16 18h.01" }, { r: "pop", d: 0.35, o: [16.0, 18.0] }],
  ],
});
