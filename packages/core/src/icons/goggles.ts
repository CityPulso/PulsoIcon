import { icon } from "../icon.js";

// Drawn after Phosphor Icons "goggles" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Goggles = icon("Goggles", "goggles", {
  nodes: [
    ["path", { d: "M3 12.5C3 8.5 7 6 12 6s9 2.5 9 6.5" }, { r: "press", a: 0.06, o: [12, 13] }],
    ["circle", { cx: "7", cy: "14", r: "3.5" }, { r: "press", a: 0.06, o: [12, 13] }],
    ["circle", { cx: "17", cy: "14", r: "3.5" }, { r: "press", a: 0.06, o: [12, 13] }],
    ["path", { d: "M10.5 13.5h3" }, { r: "press", a: 0.06, o: [12, 13] }],
    ["path", { d: "m5.5 15.5 2.5-2.5" }, { r: "draw", d: 0.15, o: [7, 14] }],
    ["path", { d: "m15.5 15.5 2.5-2.5" }, { r: "draw", d: 0.25, o: [17, 14] }],
  ],
});
