import { icon } from "../icon.js";

// Adapted from Tabler Icons "pencil-pause" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilPause = icon("PencilPause", "pencil-pause", {
  nodes: [
    ["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }],
    ["path", { d: "M13.5 6.5l4 4" }],
    ["path", { d: "M17 17v5" }, { r: "press", o: [19, 19] }],
    ["path", { d: "M21 17v5" }, { r: "press", o: [19, 19] }],
  ],
});
