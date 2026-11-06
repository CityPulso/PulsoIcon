import { icon } from "../icon.js";

// Adapted from Tabler Icons "file-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileOff = icon("FileOff", "file-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7 3h7l5 5v7m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }, { r: "float", o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "float", o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
