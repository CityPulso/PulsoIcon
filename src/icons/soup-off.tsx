import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "soup-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SoupOff = createIcon("SoupOff", "soup-off", {
  nodes: [
    ["path", { d: "M3 19h16" }],
    ["path", { d: "M15 11h6c0 1.691 -.525 3.26 -1.42 4.552m-2.034 2.032a7.963 7.963 0 0 1 -4.546 1.416h-2a8 8 0 0 1 -8 -8h8" }, { r: "pulse", a: 0.03, o: [12, 15] }],
    ["path", { d: "M12 5v3" }, { r: "float", d: 0.1, o: [12, 6] }],
    ["path", { d: "M15 5v3" }, { r: "float", d: 0.2, o: [15, 6] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
