import { icon } from "../icon.js";

// Adapted from Tabler Icons "pentagram" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Pentagram = icon("Pentagram", "pentagram", {
  nodes: [
    ["path", { d: "M5.636 5.636a9 9 0 1 1 12.728 12.728a9 9 0 0 1 -12.728 -12.728" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M15.236 11l5.264 4h-6.5l-2 6l-2 -6h-6.5l5.276 -4l-2.056 -6.28l5.28 3.78l5.28 -3.78l-2.044 6.28" }, { r: "spin", a: 72, o: [12, 12] }],
  ],
});
