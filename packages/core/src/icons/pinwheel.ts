import { icon } from "../icon.js";

// Drawn after Phosphor Icons "pinwheel" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Pinwheel = icon("Pinwheel", "pinwheel", {
  nodes: [
    ["path", { d: "M10 10V3a5 5 0 0 1 5 5z" }, { r: "spin", a: 360, o: [10, 10] }],
    ["path", { d: "M10 10h7a5 5 0 0 1-5 5z" }, { r: "spin", a: 360, o: [10, 10] }],
    ["path", { d: "M10 10v7a5 5 0 0 1-5-5z" }, { r: "spin", a: 360, o: [10, 10] }],
    ["path", { d: "M10 10H3a5 5 0 0 1 5-5z" }, { r: "spin", a: 360, o: [10, 10] }],
    ["path", { d: "m15 15 6 6" }, { r: "sway", a: 3, o: [21, 21] }],
  ],
});
