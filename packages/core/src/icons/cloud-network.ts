import { icon } from "../icon.js";

// Adapted from Tabler Icons "cloud-network" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CloudNetwork = icon("CloudNetwork", "cloud-network", {
  nodes: [
    ["path", { d: "M3 20h7" }, { r: "growX", d: 0.3, o: [10, 20] }],
    ["path", { d: "M14 20h7" }, { r: "growX", d: 0.3, o: [14, 20] }],
    ["path", { d: "M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, { r: "pop", d: 0.2, o: [12, 20] }],
    ["path", { d: "M12 16v2" }, { r: "draw", d: 0.1 }],
    [
      "path",
      {
        d: "M8 16.004h-1.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-2.535",
      },
      { r: "float", a: 1 },
    ],
  ],
});
