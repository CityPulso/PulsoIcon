import { icon } from "../icon.js";

// Drawn after Phosphor Icons "beach-ball" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BeachBall = icon("BeachBall", "beach-ball", {
  svg: { r: "bounce", y: -1, a: 2 },
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "turn", a: 25, o: [12, 12] }],
    ["path", { d: "M2.3 9.6Q9 7 15 9" }, { r: "turn", a: 25, o: [12, 12] }],
    ["path", { d: "M10.3 21.8Q10.5 13 15 9" }, { r: "turn", a: 25, o: [12, 12] }],
    ["path", { d: "M21.9 13.5Q19.5 9.5 15 9" }, { r: "turn", a: 25, o: [12, 12] }],
  ],
});
