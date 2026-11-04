import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "playlist-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlaylistOff = createIcon("PlaylistOff", "playlist-off", {
  nodes: [
    ["path", { d: "M14 14a3 3 0 1 0 3 3" }, { r: "bounce", y: -1, a: 1, o: [16, 16] }],
    ["path", { d: "M17 13v-9h4" }, { r: "bounce", y: -1, a: 1, o: [16, 16] }],
    ["path", { d: "M13 5h-4m-4 0h-2" }, { r: "growX", d: 0.1, o: [3, 5] }],
    ["path", { d: "M3 9h6" }, { r: "growX", d: 0.2, o: [3, 9] }],
    ["path", { d: "M9 13h-6" }, { r: "growX", d: 0.3, o: [3, 13] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
