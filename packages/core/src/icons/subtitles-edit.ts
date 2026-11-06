import { icon } from "../icon.js";

// Adapted from Tabler Icons "subtitles-edit" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SubtitlesEdit = icon("SubtitlesEdit", "subtitles-edit", {
  nodes: [
    ["path", { d: "M11.5 19h-5.5a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v3" }],
    ["path", { d: "M7 15h5" }, { r: "growX", o: [7, 15] }],
    ["path", { d: "M17 12h-3" }, { r: "growX", d: 0.15, o: [14, 12] }],
    ["path", { d: "M11 12h-1" }, { r: "growX", d: 0.1, o: [10, 12] }],
    ["path", { d: "M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" }, { r: "tilt", d: 0.2, a: 10, o: [15.5, 21.5] }],
  ],
});
