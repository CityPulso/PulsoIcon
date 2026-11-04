import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "marker-circle" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MarkerCircle = createIcon("MarkerCircle", "marker-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 21.2V14h8v7.2" }, { r: "bounce", d: 0.05, y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M10 14l2-7 2 7" }, { r: "bounce", d: 0.05, y: -1, a: 1, o: [12, 15] }],
  ],
});
