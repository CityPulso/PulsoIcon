import { icon } from "../icon.js";

export const GardenHose = icon("GardenHose", "garden-hose", {
  nodes: [
    ["circle", { cx: "9", cy: "14", r: "7" }, { r: "spin", a: -180, o: [9, 14] }],
    ["circle", { cx: "9", cy: "14", r: "2.5" }, { r: "spin", a: -180, o: [9, 14] }],
    ["path", { d: "M16 14h2a2 2 0 0 0 2-2V8" }, { r: "draw", d: 0.1, o: [18, 11] }],
    ["rect", { x: "18.5", y: "4", width: "3", height: "4", rx: "1" }, { r: "shake", a: 0.6, d: 0.3, o: [20, 6] }],
  ],
});
