import { icon } from "../icon.js";

// Drawn after Phosphor Icons "circle-half-tilt" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CircleHalfTilt = icon("CircleHalfTilt", "circle-half-tilt", {
  text: true,
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M19.07 4.93 4.93 19.07" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M11 13v8.9M15 9v12.5M19 5v14" }, { r: "grow", d: 0.15, o: [15, 21] }],
  ],
});
