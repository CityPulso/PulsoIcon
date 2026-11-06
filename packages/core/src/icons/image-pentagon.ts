import { icon } from "../icon.js";

// Adapted from Tabler Icons "photo-pentagon" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ImagePentagon = icon("ImagePentagon", "image-pentagon", {
  nodes: [
    [
      "path",
      {
        d: "M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0",
      },
      { r: "press", d: 0, a: 0.06, o: [12, 12] },
    ],
    ["path", { d: "M15 8h.01" }, { r: "rise", d: 0, a: 2, o: [15, 8] }],
    ["path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" }, { r: "draw", d: 0.2 }],
  ],
});
