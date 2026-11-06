import { icon } from "../icon.js";

// Adapted from Tabler Icons "directions-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DirectionsOff = icon("DirectionsOff", "directions-off", {
  nodes: [
    ["path", { d: "M12 21v-4" }],
    ["path", { d: "M12 13v-1" }],
    ["path", { d: "M12 5v-2" }],
    ["path", { d: "M10 21h4" }],
    ["path", { d: "M8 8v1h1m4 0h6l2 -2l-2 -2h-10" }, { r: "slide", x: 1, a: 1.5, o: [14, 7] }],
    ["path", { d: "M14 14v3h-8l-2 -2l2 -2h7" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [9, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
