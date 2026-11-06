import { icon } from "../icon.js";

export const Touchpad = icon("Touchpad", "touchpad", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2 14h20" }, { r: "growX", d: 0.05, o: [12, 14] }],
    ["path", { d: "M12 20v-6" }, { r: "grow", d: 0.1, o: [12, 14] }],
  ],
});
