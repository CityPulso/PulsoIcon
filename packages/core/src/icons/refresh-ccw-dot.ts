import { icon } from "../icon.js";

export const RefreshCcwDot = icon("RefreshCcwDot", "refresh-ccw-dot", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M3 3v5h5" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M16 16h5v5" }, { r: "spin", a: -360, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "pop", d: 0.1, o: [12, 12] }],
  ],
});
