import { icon } from "../icon.js";

// Adapted from Tabler Icons "segway" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Segway = icon("Segway", "segway", {
  nodes: [
    ["path", { d: "M11 3h3q -2.25 5 .75 11" }, { r: "tilt", a: 6, o: [12, 17] }],
    ["path", { d: "M8 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" }, { r: "spin", o: [12, 17] }],
    ["path", { d: "M12 17.01v.01" }],
  ],
});
