import { icon } from "../icon.js";

// Adapted from Tabler Icons "confetti" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Confetti = icon("Confetti", "confetti", {
  nodes: [
    ["path", { d: "M4 5h2" }, { r: "pop", d: 0.1, o: [5, 5] }],
    ["path", { d: "M5 4v2" }, { r: "pop", d: 0.1, o: [5, 5] }],
    ["path", { d: "M11.5 4l-.5 2" }, { r: "pop", d: 0.15, o: [11.25, 5] }],
    ["path", { d: "M18 5h2" }, { r: "pop", d: 0.2, o: [19, 5] }],
    ["path", { d: "M19 4v2" }, { r: "pop", d: 0.2, o: [19, 5] }],
    ["path", { d: "M15 9l-1 1" }, { r: "pop", d: 0.25, o: [14.5, 9.5] }],
    ["path", { d: "M18 13l2 -.5" }, { r: "pop", d: 0.3, o: [19, 12.75] }],
    ["path", { d: "M18 19h2" }, { r: "pop", d: 0.35, o: [19, 19] }],
    ["path", { d: "M19 18v2" }, { r: "pop", d: 0.35, o: [19, 19] }],
    ["path", { d: "M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39" }, { r: "tilt", a: 8, o: [4, 20] }],
  ],
});
