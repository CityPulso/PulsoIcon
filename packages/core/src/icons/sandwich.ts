import { icon } from "../icon.js";

export const Sandwich = icon("Sandwich", "sandwich", {
  nodes: [
    ["path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }, { r: "lift", o: [12, 7.612] }],
    ["path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }, { r: "press", d: 0.1, a: 0.04, o: [12, 19] }],
    ["path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }, { r: "press", d: 0.1, a: 0.04, o: [12, 19] }],
    ["path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }, { r: "press", d: 0.1, a: 0.04, o: [12, 19] }],
    ["rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" }, { r: "jelly", d: 0.05, a: 0.08, o: [12, 13] }],
  ],
});
