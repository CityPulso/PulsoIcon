import { icon } from "../icon.js";

// Drawn after Phosphor Icons "line-segments" (MIT, Copyright (c) 2023 Phosphor Icons).
export const LineSegments = icon("LineSegments", "line-segments", {
  nodes: [
    ["circle", { cx: "5", cy: "18", r: "2" }, { r: "pop", o: [5, 18] }],
    ["circle", { cx: "9", cy: "9", r: "2" }, { r: "pop", d: 0.12, o: [9, 9] }],
    ["circle", { cx: "15", cy: "14", r: "2" }, { r: "pop", d: 0.24, o: [15, 14] }],
    ["circle", { cx: "19", cy: "5", r: "2" }, { r: "pop", d: 0.36, o: [19, 5] }],
    ["path", { d: "m5.8 16.2 2.4-5.4" }, { r: "draw", d: 0.06, o: [7, 13.5] }],
    ["path", { d: "m10.5 10.3 3 2.4" }, { r: "draw", d: 0.18, o: [12, 11.5] }],
    ["path", { d: "m15.8 12.2 2.4-5.4" }, { r: "draw", d: 0.3, o: [17, 9.5] }],
  ],
});
