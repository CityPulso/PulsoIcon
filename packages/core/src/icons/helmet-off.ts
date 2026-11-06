import { icon } from "../icon.js";

// Adapted from Tabler Icons "helmet-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HelmetOff = icon("HelmetOff", "helmet-off", {
  nodes: [
    ["path", { d: "M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486a9.008 9.008 0 0 1 -1.192 1.16h-11.312a9 9 0 0 1 -.185 -13.847" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M20 9h-7m-2.768 1.246c.507 2 1.596 3.418 3.268 4.254c.524 .262 1.07 .49 1.64 .683" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" }, { r: "wobble", o: [12, 12] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
