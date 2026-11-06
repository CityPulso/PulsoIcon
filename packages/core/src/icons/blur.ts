import { icon } from "../icon.js";

// Adapted from Tabler Icons "blur" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Blur = icon("Blur", "blur", {
  nodes: [
    ["path", { d: "M12 21a9.01 9.01 0 0 0 2.32 -.302a9 9 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035" }],
    ["path", { d: "M12 3v17" }],
    ["path", { d: "M12 12h9" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 9h8" }, { r: "growX", d: 0.05, o: [12, 9] }],
    ["path", { d: "M12 6h6" }, { r: "growX", o: [12, 6] }],
    ["path", { d: "M12 18h6" }, { r: "growX", d: 0.2, o: [12, 18] }],
    ["path", { d: "M12 15h8" }, { r: "growX", d: 0.15, o: [12, 15] }],
  ],
});
