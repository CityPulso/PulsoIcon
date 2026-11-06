import { icon } from "../icon.js";

export const AppWindow = icon("AppWindow", "app-window", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M10 4v4" }, { r: "pop", d: 0.15, o: [10, 6] }],
    ["path", { d: "M2 8h20" }, { r: "growX", o: [2, 8] }],
    ["path", { d: "M6 4v4" }, { r: "pop", d: 0.21, o: [6, 6] }],
  ],
});
