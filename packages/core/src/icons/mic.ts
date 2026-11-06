import { icon } from "../icon.js";

export const Mic = icon("Mic", "mic", {
  nodes: [
    ["path", { d: "M12 19v3" }, { r: "grow", d: 0.15, o: [12, 19] }],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }, { r: "redraw", d: 0.05, o: [12, 14.5] }],
    ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3" }, { r: "pulse", a: 0.08, o: [12, 8.5] }],
  ],
});
