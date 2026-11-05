import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pyramid-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PyramidOff = createIcon("PyramidOff", "pyramid-off", {
  nodes: [
    [
      "path",
      {
        d: "M21.384 17.373a1.004 1.004 0 0 0 -.013 -1.091l-8.54 -13.836a.999 .999 0 0 0 -1.664 0l-1.8 2.917m-1.531 2.48l-5.209 8.439a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a1.994 1.994 0 0 0 1.789 0l5.903 -2.958",
      },
      { r: "wobble", o: [12, 21] },
    ],
    ["path", { d: "M12 2v6m0 4v10" }, { r: "wobble", o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" }, { r: "wobble", o: [12, 21] }],
    ["path", { d: "M12 2v20" }, { r: "wobble", o: [12, 21] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
