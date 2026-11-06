import { icon } from "../icon.js";

export const CircleStop = icon("CircleStop", "circle-stop", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }, { r: "stamp", d: 0.1, a: 0.4, o: [12, 12] }],
  ],
});
