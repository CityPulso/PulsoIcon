import { icon } from "../icon.js";

// Adapted from Tabler Icons "bleach-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BleachOff = icon("BleachOff", "bleach-off", {
  nodes: [
    [
      "path",
      { d: "M5 19h14m1.986 -1.977a2 2 0 0 0 -.146 -.773l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.815 1.405m-1.488 2.568l-4.797 8.277a2 2 0 0 0 1.75 2.75" },
      { r: "wobble", a: 4, o: [12, 12] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
