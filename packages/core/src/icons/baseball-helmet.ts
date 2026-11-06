import { icon } from "../icon.js";

// Drawn after Phosphor Icons "baseball-helmet" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BaseballHelmet = icon("BaseballHelmet", "baseball-helmet", {
  svg: { r: "wobble", a: 5, o: [11, 20] },
  nodes: [
    ["path", { d: "M3 13a8 8 0 0 1 16 0" }],
    ["path", { d: "M11 13h11" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [16, 13] }],
    ["path", { d: "M3 13v3a4 4 0 0 0 4 4h6a2 2 0 0 0 2-2v-5" }],
    ["circle", { cx: "8", cy: "16", r: "2" }, { r: "pop", d: 0.15, o: [8, 16] }],
  ],
});
