import { icon } from "../icon.js";

export const RedEnvelope = icon("RedEnvelope", "red-envelope", {
  nodes: [
    ["rect", { width: "14", height: "18", x: "5", y: "3", rx: "2" }, { r: "jelly", a: 0.05, o: [12, 21] }],
    ["path", { d: "M5 7.5c1.6 1.6 3.2 2.6 5 3" }, { r: "jelly", a: 0.05, o: [12, 21] }],
    ["path", { d: "M19 7.5c-1.6 1.6-3.2 2.6-5 3" }, { r: "jelly", a: 0.05, o: [12, 21] }],
    ["circle", { cx: "12", cy: "10.5", r: "2" }, { r: "stamp", d: 0.15, o: [12, 10.5] }],
  ],
});
