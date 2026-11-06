import { icon } from "../icon.js";

// Adapted from Tabler Icons "medal-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Medal2 = icon("Medal2", "medal-2", {
  nodes: [
    ["path", { d: "M9 3h6l3 7l-6 2l-6 -2l3 -7" }, { r: "press", a: 0.05, o: [12, 8] }],
    ["path", { d: "M12 12l-3 -9" }],
    ["path", { d: "M15 11l-3 -8" }],
    ["path", { d: "M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5" }, { r: "twinkle", d: 0.1, o: [12, 16.5] }],
  ],
});
