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
  solid: [
    ["path", { d: "M11.248 3c.273.1.808.53.747 1.36-.05.83-.938 1.2-.989 2.02-.06.78.333 1.24.727 1.62", fill: "none" }, { r: "float", d: 0.1, o: [12, 6] }],
    ["path", { d: "M16.252 3c.268.1.794.53.745 1.36-.06.83-.923 1.2-.993 2.02-.05.78.338 1.24.725 1.62", fill: "none" }, { r: "float", d: 0.2, o: [15, 6] }],
    ["path", { d: "M19.5 12 22 6", fill: "none" }, { r: "float", d: 0.2, o: [15, 6] }],
    ["path", { d: "M4 12a1 1 0 00-.99 1.133A9 9 0 0012 21a9 9 0 008.99-7.867A1 1 0 0020 12z" }, { r: "pulse", a: 0.03, o: [12, 15] }],
    ["path", { d: "M6.252 3c.268.1.794.53.745 1.36-.06.83-.923 1.2-.993 2.02-.05.78.338 1.24.735 1.62", fill: "none" }, { r: "float", d: 0.1, o: [12, 6] }],
    ["path", { d: "M7 21h10", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
