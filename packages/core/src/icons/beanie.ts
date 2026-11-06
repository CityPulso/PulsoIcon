import { icon } from "../icon.js";

// Drawn after Phosphor Icons "beanie" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Beanie = icon("Beanie", "beanie", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "2" }, { r: "bounce", y: -1, a: 1.5, o: [12, 5] }],
    ["path", { d: "M4 15a8 8 0 0 1 16 0" }, { r: "jelly", a: 0.05, o: [12, 20] }],
    ["rect", { x: "3", y: "15", width: "18", height: "5", rx: "1" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["path", { d: "M8 15v5" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["path", { d: "M12 15v5" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["path", { d: "M16 15v5" }, { r: "press", a: 0.05, o: [12, 20] }],
  ],
});
