import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "tire" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Tire = createIcon("Tire", "tire", {
  nodes: [
    ["path", { d: "M15 4H7a4.5 8 0 0 0 0 16h8" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["ellipse", { cx: "15", cy: "12", rx: "4.5", ry: "8" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["ellipse", { cx: "15", cy: "12", rx: "1.5", ry: "3.5" }, { r: "pulse", d: 0.1, o: [15, 12] }],
    ["path", { d: "M8.5 5.5 6.5 9l2 3-2 3 2 3.5" }, { r: "slide", d: 0.05, y: 1, a: 1, o: [7.5, 12] }],
    ["path", { d: "M15 20h6" }, { r: "growX", d: 0.15, o: [15, 20] }],
  ],
});
