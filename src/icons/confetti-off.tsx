import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "confetti-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ConfettiOff = createIcon("ConfettiOff", "confetti-off", {
  nodes: [
    ["path", { d: "M4 5h1" }, { r: "pop", d: 0.05, o: [4.5, 5.5] }],
    ["path", { d: "M5 5v1" }, { r: "pop", d: 0.05, o: [4.5, 5.5] }],
    ["path", { d: "M11.5 4l-.5 2" }, { r: "pop", d: 0.1, o: [11.2, 5] }],
    ["path", { d: "M18 5h2" }, { r: "pop", d: 0.15, o: [19, 5] }],
    ["path", { d: "M19 4v2" }, { r: "pop", d: 0.15, o: [19, 5] }],
    ["path", { d: "M15 9l-1 1" }, { r: "pop", d: 0.2, o: [14.5, 9.5] }],
    ["path", { d: "M18 13l2 -.5" }, { r: "pop", d: 0.25, o: [19, 12.7] }],
    ["path", { d: "M18 19h1" }, { r: "pop", d: 0.3, o: [18.5, 19.5] }],
    ["path", { d: "M19 19v1" }, { r: "pop", d: 0.3, o: [18.5, 19.5] }],
    ["path", { d: "M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39" }, { r: "wobble", a: 5, o: [8, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
