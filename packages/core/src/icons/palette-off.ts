import { icon } from "../icon.js";

// Adapted from Tabler Icons "palette-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PaletteOff = icon("PaletteOff", "palette-off", {
  nodes: [
    ["path", { d: "M15 15h-1a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25a9 9 0 0 1 -6.372 -15.356" }],
    ["path", { d: "M8 4c1.236 -.623 2.569 -1 4 -1c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828a4.516 4.516 0 0 1 -1.127 .73" }],
    ["path", { d: "M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", o: [8.5, 10.5] }],
    ["path", { d: "M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.08, o: [12.5, 7.5] }],
    ["path", { d: "M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, { r: "pop", d: 0.16, o: [16.5, 10.5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" }],
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.08, o: [12.5, 7.5] }, "cut"],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }, { r: "pop", d: 0.16, o: [16.5, 10.5] }, "cut"],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }, { r: "pop", o: [8.5, 10.5] }, "cut"],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }, { r: "pop", o: [8.5, 10.5] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
