import { icon } from "../icon.js";

export const AppWindowMac = icon("AppWindowMac", "app-window-mac", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M6 8h.01" }, { r: "pop", o: [6.005, 8] }],
    ["path", { d: "M10 8h.01" }, { r: "pop", d: 0.08, o: [10.005, 8] }],
    ["path", { d: "M14 8h.01" }, { r: "pop", d: 0.16, o: [14.005, 8] }],
  ],
});
